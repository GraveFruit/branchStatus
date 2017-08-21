var http = require('http');
var request = require('request');

var url = "http://10.0.0.110:9090/pingStatus";
var myNewData;

function siteTemplate(json){
    return "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <title>branchStat</title>\n" +
        "    <meta charset=\"utf-8\">\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
        "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n" +
        "    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.css\">\n" +
        "    <link rel=\"stylesheet\" href=\"visuallayer.css\">\n" +
        "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n" +
        "    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n" +
        "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.js\"></script>\n" +
        "    <script src=\"dzejson.js\"></script>\n" +
        "\n" +
        "    <script>\n" +
        "\n" +
        "        function appendTile(json) {\n" +
        "            var definitionGood =\n" +
        "                \"<div class='col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center square'>\" +\n" +
        "                \"<div class='statusGood'>\" +\n" +
        "                \"<div class='content'>\" +\n" +
        "                \"<div class='table'>\" +\n" +
        "                \"<div class='table-cell'>\" +\n" +
        "                \"<span class='glyphicon glyphicon-home glyphont'></span>\" +\n" +
        "                \"<p class='hostname'>\" + json.nazwa_hosta.substring(1).toUpperCase() + \"</p>\" +\n" +
        "                \"</div></div></div></div></div>\";\n" +
        "            var definitionBad =\n" +
        "                \"<div class='col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center square'>\" +\n" +
        "                \"<div class='statusBad'>\" +\n" +
        "                \"<div class='content'>\" +\n" +
        "                \"<div class='table'>\" +\n" +
        "                \"<div class='table-cell'>\" +\n" +
        "                \"<span class='glyphicon glyphicon-home glyphont'></span>\" +\n" +
        "                \"<p class='hostname'>\" + json.nazwa_hosta.substring(1).toUpperCase() + \"</p>\" +\n" +
        "                \"</div></div></div></div></div>\";\n" +
        "\n" +
        "            if (json.status_wysyłkowy > 0)\n" +
        "                return definitionBad;\n" +
        "            else\n" +
        "                return definitionGood;\n" +
        "        }\n" +
        "\n" +
        "        function appendGrid(json, element) {\n" +
        "            var jsonLength = json.length;\n" +
        "            jsonLength = Math.ceil(jsonLength / 12);\n" +
        "\n" +
        "            for (var i = 0; i < jsonLength; i++) {\n" +
        "                $(element).append(\"<div class='row row\" + i + \"'></div>\");\n" +
        "            }\n" +
        "            var j = 0;\n" +
        "            for (var i = 0; i < json.length;) {\n" +
        "                $(\".row\" + j).append(appendTile(json[i]));\n" +
        "                i = i + 1;\n" +
        "                if (i % 12 == 0) {\n" +
        "                    j = j + 1;\n" +
        "                }\n" +
        "            }\n" +
        "\n" +
        "        }\n" +
        "\n" +
        "        var newData =" +
        json+
        ";\n" +

        "\n" +
        "        $(document).ready(function () {\n" +
        "            appendGrid(newData, \".window\");\n" +
        "\n" +
        "        })\n" +
        "\n" +
        "\n" +
        "    </script>\n" +
        "\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"container-fluid\">\n" +
        "\n" +
        "    <div class=\"containter\">\n" +
        "        <div class=\"window\">\n" +
        "\n" +
        "        </div>\n" +
        "    </div>\n" +
        "\n" +
        "</div>\n" +
        "</body>\n" +
        "</html>";
}

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body[0]) // Print the json response
        myNewData = body;
    }
})


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(siteTemplate(JSON.stringify(myNewData)));
}).listen('8080');
console.log('Server running at http://localhost:8080/');



