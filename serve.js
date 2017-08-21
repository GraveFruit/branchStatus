var http = require('http');

var request = require('request');


const express = require('express')
const app = express()


var url = "http://10.0.0.110:9090/pingStatus";
var body;

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body[0]) // Print the json response
    }
})

http.createServer(function (req, res) {


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(body);
}).listen(8080);