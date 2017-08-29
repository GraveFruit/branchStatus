//server module

var siteGenerator = require("./siteGenerator");
var testServer = require('./testServer');
var variables = require('./variables');
var express = require('express');
var request = require('request');
var http = require('http');
var fs = require('fs');
var app = express();
app.use(express.static('public'));

var url = variables.targetUrl();
var statusJson = [];


//json request
function refreshData() {
    siteGenerator.refreshFormerStatus(statusJson);
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            statusJson = body;
            console.log("branches status update. last: " + JSON.stringify(statusJson[0].data_pomiaru));
            for (var i in statusJson) {
                if (statusJson[i].status_wysyłkowy > 0) {
                    console.log(statusJson[i].nazwa_hosta.substring(1) + " is offline. " + statusJson[i].data_pomiaru)
                }
            }
        }
    });
}

//refresh loop
function refreshLoop(interval) {
    console.log("refreshLoop starts");
    setInterval(refreshData, interval) ;
}

//http server launch function
function serverInit(port) {
    console.log("server init...");
    http.createServer(function (req, res) {
        if (req.url.indexOf('visuallayer.css') != -1) {
            fs.readFile(__dirname + '/visuallayer.css', function (err, data) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
            });
        }
        else if (req.url.indexOf('update.js') != -1) {
            fs.readFile(__dirname + '/update.js', function (err, data) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
                res.end();
            });
        }
        else if(req.url.indexOf('status.json') != -1){
            res.writeHead(200, {'Content-Type': 'text/plaintext'});
            res.end(JSON.stringify(statusJson));
        }
        else if(req.url.indexOf('index.html') != -1){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(siteGenerator.getSite(statusJson));
        }
        else if(req.url.indexOf('status.div') != -1){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(siteGenerator.getWindow(statusJson));
        }
        else if(req.url.indexOf('testServerJson.json') != -1){
            res.writeHead(200, {'Content-Type':'text/plaintext'});
            res.end(JSON.stringify(testServer.start()));
        }
        else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("<h1>Error 404</h1><h2>Not Found</h2>");
        }
    }).listen(port);
    console.log('server init: success\nserver running at http://localhost:' + port + '/');
}

//first json request
function statusJsonInit() {
    console.log("json init...");
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            statusJson = body;
            console.log("json init: success");
        }
    });
}

var Server = function () {
};

//server launch function
Server.prototype.start = function () {
    console.log("server starts...");
    statusJsonInit();
    refreshLoop(variables.refreshInterval());
    setTimeout(function() {siteGenerator.initializeGenerator(statusJson);}, 1000);
    serverInit(variables.workingPort());
};

module.exports = new Server();