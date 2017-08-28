var Variables = function () {
    this.isTest = function () {
        return false;
    }
    this.targetUrl = function () {
        if (this.isTest())
            return "http://localhost:8080/testServerJson.json";
        else
            return "http://10.0.0.110:9090/pingStatus";
    }
    this.workingPort = function () {
        return "8080";
    }
    this.refreshInterval = function () {
        return 9*1000;
    }
    this.changeQuantity = function () {
        return 5;
    }
}

module.exports = new Variables();