var Variables = function(){
    this.isTest = function () {
        return false;
    }
    this.targetUrl = function () {
        return "http://10.0.0.110:9090/pingStatus";
    }
    this.workingPort = function () {
        return "8080";
    }
    this.refreshInterval = function () {
        return 5000;
    }
}

module.exports = new Variables();