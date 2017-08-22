var http = require('http');
var request = require('request');
var express = require('express');
var fs = require('fs');
var app = express();
//var url = "http://10.0.0.110:9090/pingStatus";
var url = "http://10.10.10.129:8080/dzejson.json"
app.use(express.static('public'));
var statusJson;

var dzejson = [{"nazwa_hosta":"vbelchatow","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"94.188482ms","licznik_testow":3724,"licznik_bledow":0},{"nazwa_hosta":"vbilgoraj","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"100.050134ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vbrzesko","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"19.90186ms","licznik_testow":3728,"licznik_bledow":0},{"nazwa_hosta":"vbrzozow","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"145.291807ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vchelm","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"92.224473ms","licznik_testow":3725,"licznik_bledow":1},{"nazwa_hosta":"vdebica","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"98.588481ms","licznik_testow":3722,"licznik_bledow":41},{"nazwa_hosta":"vdzierzoniow","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"96.113048ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vglubczyce","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"549.462µs","licznik_testow":3727,"licznik_bledow":0},{"nazwa_hosta":"vgorlice","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"18.602488ms","licznik_testow":3725,"licznik_bledow":0},{"nazwa_hosta":"vgostynin","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"88.962352ms","licznik_testow":3727,"licznik_bledow":0},{"nazwa_hosta":"vjaroslaw","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"77.09654ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vjaslo","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"100.402606ms","licznik_testow":3727,"licznik_bledow":78},{"nazwa_hosta":"vjastrzebiez","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"74.291803ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vjaworzno","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"13.96532ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vkalisz","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"77.021641ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vkluczbork","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"86.380324ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vkonskie","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"87.906904ms","licznik_testow":3721,"licznik_bledow":68},{"nazwa_hosta":"vkoprzywnica","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"93.011473ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vkrosno","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"97.338095ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vlancut","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"92.818887ms","licznik_testow":3728,"licznik_bledow":0},{"nazwa_hosta":"vlesko","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"99.672369ms","licznik_testow":3728,"licznik_bledow":0},{"nazwa_hosta":"vlezajsk","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"414.825µs","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vlubaczow","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"88.77123ms","licznik_testow":3725,"licznik_bledow":0},{"nazwa_hosta":"vmiedzyrzec","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"14.435761ms","licznik_testow":3727,"licznik_bledow":0},{"nazwa_hosta":"vmszana","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"88.585077ms","licznik_testow":3727,"licznik_bledow":0},{"nazwa_hosta":"vnowaruda","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"32.918559ms","licznik_testow":3728,"licznik_bledow":9},{"nazwa_hosta":"vntarg","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"97.356358ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"volawa","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"29.53837ms","licznik_testow":3728,"licznik_bledow":0},{"nazwa_hosta":"vpinczow","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"88.307189ms","licznik_testow":3725,"licznik_bledow":0},{"nazwa_hosta":"vprzeworsk","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"93.418845ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vradlin","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"15.461922ms","licznik_testow":3728,"licznik_bledow":1},{"nazwa_hosta":"vradomsko","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"93.260935ms","licznik_testow":3727,"licznik_bledow":0},{"nazwa_hosta":"vsanok-market","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"77.040628ms","licznik_testow":3726,"licznik_bledow":11},{"nazwa_hosta":"vsedziszow","data_pomiaru":"2017-08-22 14:17:43","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"46.329329ms","licznik_testow":3726,"licznik_bledow":0},{"nazwa_hosta":"vstalowa","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"238.508607ms","licznik_testow":3728,"licznik_bledow":1},{"nazwa_hosta":"vtarnobrzeg","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"21.486485ms","licznik_testow":3718,"licznik_bledow":0},{"nazwa_hosta":"vtarnow","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"86.408256ms","licznik_testow":3728,"licznik_bledow":0},{"nazwa_hosta":"vtrzebinia","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"84.575615ms","licznik_testow":3728,"licznik_bledow":0},{"nazwa_hosta":"vustrzyki","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"79.471549ms","licznik_testow":3727,"licznik_bledow":0},{"nazwa_hosta":"vwadowice","data_pomiaru":"2017-08-22 14:17:44","status_pomiaru":0,"status_wysyłkowy":0,"czas_ping":"91.718781ms","licznik_testow":3726,"licznik_bledow":20}];

var prev = 0;
var current = 0;

request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        statusJson = body;
    }
});

function appendTile(json, k) {
    var definitionGood =
        "\t\t\t\t\t\t<div class='col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center square'>\n" +
        "\t\t\t\t\t\t\t<div class='status'>\n" +
        "\t\t\t\t\t\t\t\t<div class='content'>\n" +
        "\t\t\t\t\t\t\t\t\t<div class='table'>\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class='table-cell'>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<span class='glyphicon glyphicon-home glyphont'></span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p class='hostname'>" + json[k].nazwa_hosta.substring(1).toUpperCase() + "</p>\n" +
        "\t\t\t\t\t\t</div></div></div></div></div>\n\n";

    var definitionBad =
        "\t\t\t\t\t\t<div class='col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center square'>\n" +
        "\t\t\t\t\t\t\t<div class='bad'>\n" +
        "\t\t\t\t\t\t\t\t<div class='content'>\n" +
        "\t\t\t\t\t\t\t\t\t<div class='table'>\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class='table-cell'>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<span class='glyphicon glyphicon-home glyphont'></span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p class='hostname'>" + json[k].nazwa_hosta.substring(1).toUpperCase() + "</p>\n" +
        "\t\t\t\t\t\t</div></div></div></div></div>\n\n";
    if (json[k].status_wysyłkowy > 0)
        return definitionBad;
    else
        return definitionGood;
}

function windowTemplate(json){
    var branchTable = "";
    var rowQuantity = Math.ceil(json.length / 12);
    var k = 0;

    for (var i = 0; i < rowQuantity; i++) {
        branchTable += "\t\t\t\t\t<div class='row row" + i + "'>\n";
        for (var j = 0; j < 12 && k < json.length; j++) {

            branchTable += appendTile(json, k);
            k++;
        }
        branchTable += "\t\t\t\t\t</div>\n";
    }
    return branchTable;
}

function siteTemplate(json) {

    var header = "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "\t<head>\n" +
        "\t\t<meta charset=\"utf-8\">\n" +
        "\t\t<title>branchStat</title>\n" +
        "\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
        "\t\t<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
        "\t\t<link rel=\"stylesheet\" href=\"/public/visuallayer.css\">\n" +
        "\t\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n" +
        "\t\t<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
        "\t\t<script src=\"/public/update.js\"></script>\n" +
        "\t</head>\n" +
        "\t<body>\n" +
        "\t\t<div class=\"container-fluid\">\n" +
        "\t\t\t<div class=\"containter\">\n" +
        "\t\t\t\t<div class=\"window\">\n";

    var footer = "\t\t\t\t</div>\n" +
        "\t\t\t</div>\n" +
        "\t\t</div>\n" +
        "\t</body>\n" +
        "</html>";


    return header + windowTemplate(json) + footer;
}

function refreshData() {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            statusJson = body;
            console.log("branches status update. last: "+JSON.stringify(statusJson[0].data_pomiaru));
            for(var i=0; i<statusJson.length; i++){
                if(statusJson[i].status_wysyłkowy>0){
                    console.log(statusJson[i].nazwa_hosta.substring(1)+" is offline. "+statusJson[i].data_pomiaru)
                }
            }
        }
    });


}setInterval(refreshData, 5 * 1000);

http.createServer(function (req, res) {
    if (req.url.indexOf('.css') != -1) { //req.url has the pathname, check if it conatins '.css'
        fs.readFile(__dirname + '/public/visuallayer.css', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url.indexOf('.div') != -1){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(windowTemplate(statusJson));
    }

    else if(req.url.indexOf('.json') != -1){
        current = Math.floor(Math.random()*40);
        dzejson[prev].status_wysyłkowy=0;
        dzejson[current].status_wysyłkowy=1;
        prev = current;

        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify(dzejson));
    }
    else if (req.url.indexOf('.js') != -1){
        fs.readFile(__dirname + '/public/update.js', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(siteTemplate(statusJson));
    }
}).listen('8080');
console.log('Server running at http://localhost:8080/');


