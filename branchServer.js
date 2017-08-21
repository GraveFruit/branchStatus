var http = require('http');
var request = require('request');

var url = "http://10.0.0.110:9090/pingStatus";
var myNewData;

function appendTile(json, k) {
    console.log("test 3" + JSON.stringify(json[k]));
    var definitionGood =
        "<div class='col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center square'>" +
        "<div class='statusGood'>" +
        "<div class='content'>" +
        "<div class='table'>" +
        "<div class='table-cell'>" +
        "<span class='glyphicon glyphicon-home glyphont'></span>" +
        "<p class='hostname'>" + json[k].nazwa_hosta.substring(1).toUpperCase() + "</p>" +
        "</div></div></div></div></div>";
    var definitionBad =
        "<div class='col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center square'>" +
        "<div class='statusBad'>" +
        "<div class='content'>" +
        "<div class='table'>" +
        "<div class='table-cell'>" +
        "<span class='glyphicon glyphicon-home glyphont'></span>" +
        "<p class='hostname'>" + json[k].nazwa_hosta.substring(1).toUpperCase() + "</p>" +
        "</div></div></div></div></div>";

    if (json[k].status_wysyłkowy > 0)
        return definitionBad;
    else
        return definitionGood;
}

function siteTemplate(json) {

    var header = "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "<meta charset=\"utf-8\">\n" +
        "<title>branchStat</title>\n" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
        "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
        "<link rel=\"stylesheet\" href=\"public/visuallayer.css\">\n" +
        "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n" +
        "<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container-fluid\">\n" +
        "<div class=\"containter\">\n" +
        "<div class=\"window\">\n";

    var footer = "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>";

    var branchTable = "";
    var rowQuantity = Math.ceil(json.length / 12);

    var k=0;
    for (var i = 0; i < rowQuantity; i++) {
        branchTable += "<div class='row row" + i + "'>";

        for(var j=0; j<12 && k<json.length; j++){
            console.log(k);
            branchTable += appendTile(json, k);
            k++;
        }
        branchTable += "</div>";
    }
    return header+branchTable+footer;
}

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        //console.log(body[0]) // Print the json response
        myNewData = body;
    }
})


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(siteTemplate(myNewData));

}).listen('8080');
console.log('Server running at http://localhost:8080/');



