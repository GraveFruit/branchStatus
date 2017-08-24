var siteGenerator = require("./siteGenerator")
var variables = require('./variables');
var request = require('request');
var http = require('http');
var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.static('public'));

var url = variables.targetUrl();
var statusJson = [];

function refreshData() {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            statusJson = body;
            console.log("branches status update. last: " + JSON.stringify(statusJson[0].data_pomiaru));
            for (var i = 0; i < statusJson.length; i++) {
                if (statusJson[i].status_wysyłkowy > 0) {
                    console.log(statusJson[i].nazwa_hosta.substring(1) + " is offline. " + statusJson[i].data_pomiaru)
                }
            }
        }
    });
};

function refreshLoop(interval) {
    console.log("refreshLoop init...");
    setInterval(refreshData, interval) ;
}

function serverInit(port) {
    console.log("server init...")
    http.createServer(function (req, res) {
        if (req.url.indexOf('visuallayer.css') != -1) {
            fs.readFile(__dirname + '/visuallayer.css', function (err, data) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
            });
        }

        // else if (req.url.indexOf('.json') != -1) {
        //
        // }
        //
        // else if (req.url.indexOf('newStatusJS.js') != -1) {
        //     statusUpdate = [];
        //     for (var i = 0; i < statusJson.length; i++) {
        //         statusUpdate.push({
        //             "nazwa_hosta": statusJson[i].nazwa_hosta,
        //             "status_wysysłkowy": statusJson[i].status_wysyłkowy
        //         });
        //     }
        //     res.writeHead(200, {'Content-Type': 'text/javascript'});
        //     res.write("var newStatus = " + JSON.stringify(statusUpdate) + ";\n");
        //     res.end();
        // }

        else if (req.url.indexOf('update.js') != -1) {
            fs.readFile(__dirname + '/update.js', function (err, data) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
                res.end();
            });
        }
        else if(req.url.indexOf('index.html') != -1){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(JSON.stringify(statusJson));
        }
        else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("<h1>Error 404</h1><h2>Not Found</h2>");
        }
    }).listen(port);
    console.log('server init: success\nserver running at http://localhost:' + port + '/');
};

function statusJsonInit() {
    console.log("json init...")
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            statusJson = body;
            console.log("json init: success");
        }
    });
};


var Server = function () {
};

Server.prototype.start = function () {
    console.log("server starts...");
    statusJsonInit();
    refreshLoop(variables.refreshInterval());
    siteGenerator.initializeGenerator(statusJson);
    serverInit(variables.workingPort());
};

module.exports = new Server();