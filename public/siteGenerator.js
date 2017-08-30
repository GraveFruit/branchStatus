//siteGenerator generates html code which represents status of branches

var formerStatus = [];

//generateTile generates single tile which represents one branch
function generateTile(json, k, formerStatus) {

    var branchStatus = getStatusString(json, k, formerStatus);

    var singleCell =
        "\t\t\t\t\t\t<div class='col-lg-1 col-md-1 col-sm-2 col-xs-3 text-center square'>\n" +
        "\t\t\t\t\t\t\t<div id='tile' class='" + branchStatus + "'>\n" +
        "\t\t\t\t\t\t\t\t<div class='content'>\n" +
        "\t\t\t\t\t\t\t\t\t<div class='table'>\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class='table-cell'>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<span class='glyphicon glyphicon-home glyphont'></span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p class='hostname'>" + json[k].nazwa_hosta.substring(1).toUpperCase() + "</p>\n" +
        "\t\t\t\t\t\t</div></div></div></div></div>\n\n";

    return singleCell;
}

//generates div in which grid of tiles is being kept
function generateWindow(json) {
    var branchTable = "";
    var rowQuantity = Math.ceil(json.length / 12);
    var k = 0;

    for (var i = 0; i < rowQuantity; i++) {
        branchTable += "\t\t\t\t\t<div class='row row" + i + "'>\n";
        for (var j = 0; j < 12 && k < json.length; j++) {

            branchTable += generateTile(json, k, formerStatus);
            k++;
        }
        branchTable += "\t\t\t\t\t</div>\n";
    }
    return branchTable;
}

//generates site as a whole
function generateSite(json) {
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

    return header + generateWindow(json) + footer;
}

//returns status string of given branch
function getStatusString(json, k, formerStatus) {
    if (json[k].status_wysyłkowy>0 && formerStatus[k]>0){
        return "statuSquare statusBad";
    }
    else if (json[k].status_wysyłkowy==0 && formerStatus[k]==0){
        return "statuSquare statusGood";
    }
    else if (json[k].status_wysyłkowy>0 && formerStatus[k]==0){
        return "statuSquare statusGoBad";
    }
    else if (json[k].status_wysyłkowy==0 && formerStatus[k]>0){
        return "statuSquare statusGoGood";
    }
    else
        return "statuSquare statusUnknown";
}

var SiteGenerator = function () {
};

//initializes site generator
SiteGenerator.prototype.initializeGenerator = function (json) {
    console.log("siteGenerator init...");
    this.refreshFormerStatus(json);
    if (formerStatus.length > 0) {
        console.log("siteGenerator init: success");
        //console.log(formerStatus);
    }
};

//refreshes status array used to determine animations
SiteGenerator.prototype.refreshFormerStatus = function (json) {
    formerStatus = [];
    for (var i in json) {
        formerStatus.push(json[i].status_wysyłkowy);
    }
};

//generates html which is later sent to client in order to update status of branches
SiteGenerator.prototype.getWindow = function (json) {
    return generateWindow(json)
};

//generates site as a whole
SiteGenerator.prototype.getSite = function (json) {
    return generateSite(json);
};

module.exports = new SiteGenerator();