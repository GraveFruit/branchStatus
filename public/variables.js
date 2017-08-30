//this is list of global variables used to determine the way server works

var Variables = function () {

    //isTest is being used to switch between run or test mode
    this.isTest = function () {
        return false;
    };

    //targetUrl is being used to select json source server. if test is "true" url to localhost is being used
    this.targetUrl = function () {
        if (this.isTest())
            return "http://localhost:8080/testServerJson.json";
        else
            return "http://10.0.0.110:9090/pingStatus";
    };

    //workingPort is being used to determine Node.js server
    this.workingPort = function () {
        return "8080";
    };

    //refreshInterval is being used to determine interval between json requests
    this.refreshInterval = function () {
        return 10*1000;
    };

    //changeQuantity sets number of branches for test to randomly change
    //if set to 1 only one server is set to down at all times
    this.changeQuantity = function () {
        return 5;
    }
};

module.exports = new Variables();