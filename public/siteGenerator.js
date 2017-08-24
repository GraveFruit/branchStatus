function innerGenerateTile (json, k, formerStatus) {

    var branchStatus = getStatusString(k, formerStatus);

    var singleCell =
        "\t\t\t\t\t\t<div class='col-lg-2 col-md-2 col-sm-3 col-xs-4 text-center square'>\n" +
        "\t\t\t\t\t\t\t<div id='"+json[k].nazwa_hosta+" 'class='"+branchStatus+"'>\n" +
        "\t\t\t\t\t\t\t\t<div class='content'>\n" +
        "\t\t\t\t\t\t\t\t\t<div class='table'>\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class='table-cell'>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<span class='glyphicon glyphicon-home glyphont'></span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p class='hostname'>" + json[k].nazwa_hosta.substring(1).toUpperCase() + "</p>\n" +
        "\t\t\t\t\t\t</div></div></div></div></div>\n\n";

    return singleCell;
}

function innerGenerateWindow (json){
    var branchTable = "";
    var rowQuantity = Math.ceil(json.length / 12);
    var k = 0;

    for (var i = 0; i < rowQuantity; i++) {
        branchTable += "\t\t\t\t\t<div class='row row" + i + "'>\n";
        for (var j = 0; j < 12 && k < json.length; j++) {

            branchTable += this.generateTile(this.json, k, this.formerStatus);
            k++;
        }
        branchTable += "\t\t\t\t\t</div>\n";
    }
    return branchTable;
}

function innerGenerateSite (json) {
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

    return header + this.generateWindow(json) + footer;
}

function innerGetStatusString(status) {
    switch(status){
        case 'x':
            return "statusUnknown";
        case '0':
            return "statusGood";
        case 'g':
            return "statusGoGood";
        case 'b':
            return "statusGoBad";
        default:
            return "statusBad";
    }
}

var SiteGenerator = function () {

}

SiteGenerator.prototype.initializeGenerator = function (json) {
    console.log("siteGenerator init...");

    console.log("siteGenerator init: success");
};

SiteGenerator.prototype.generateWindow = function () {

};

SiteGenerator.prototype.generateSite = function () {

};

module.exports = new SiteGenerator()



