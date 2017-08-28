var variables = require('./variables');

var json = [{
    "nazwa_hosta": "vbelchatow",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "94.188482ms",
    "licznik_testow": 3724,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vbilgoraj",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "100.050134ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vbrzesko",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "19.90186ms",
    "licznik_testow": 3728,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vbrzozow",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "145.291807ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vchelm",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "92.224473ms",
    "licznik_testow": 3725,
    "licznik_bledow": 1
}, {
    "nazwa_hosta": "vdebica",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "98.588481ms",
    "licznik_testow": 3722,
    "licznik_bledow": 41
}, {
    "nazwa_hosta": "vdzierzoniow",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "96.113048ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vglubczyce",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "549.462µs",
    "licznik_testow": 3727,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vgorlice",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "18.602488ms",
    "licznik_testow": 3725,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vgostynin",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "88.962352ms",
    "licznik_testow": 3727,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vjaroslaw",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "77.09654ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vjaslo",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "100.402606ms",
    "licznik_testow": 3727,
    "licznik_bledow": 78
}, {
    "nazwa_hosta": "vjastrzebiez",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "74.291803ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vjaworzno",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "13.96532ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vkalisz",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "77.021641ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vkluczbork",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "86.380324ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vkonskie",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "87.906904ms",
    "licznik_testow": 3721,
    "licznik_bledow": 68
}, {
    "nazwa_hosta": "vkoprzywnica",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "93.011473ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vkrosno",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "97.338095ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vlancut",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "92.818887ms",
    "licznik_testow": 3728,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vlesko",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "99.672369ms",
    "licznik_testow": 3728,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vlezajsk",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "414.825µs",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vlubaczow",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "88.77123ms",
    "licznik_testow": 3725,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vmiedzyrzec",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "14.435761ms",
    "licznik_testow": 3727,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vmszana",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "88.585077ms",
    "licznik_testow": 3727,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vnowaruda",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "32.918559ms",
    "licznik_testow": 3728,
    "licznik_bledow": 9
}, {
    "nazwa_hosta": "vntarg",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "97.356358ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "volawa",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "29.53837ms",
    "licznik_testow": 3728,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vpinczow",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "88.307189ms",
    "licznik_testow": 3725,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vprzeworsk",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "93.418845ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vradlin",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "15.461922ms",
    "licznik_testow": 3728,
    "licznik_bledow": 1
}, {
    "nazwa_hosta": "vradomsko",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "93.260935ms",
    "licznik_testow": 3727,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vsanok-market",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "77.040628ms",
    "licznik_testow": 3726,
    "licznik_bledow": 11
}, {
    "nazwa_hosta": "vsedziszow",
    "data_pomiaru": "2017-08-22 14:17:43",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "46.329329ms",
    "licznik_testow": 3726,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vstalowa",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "238.508607ms",
    "licznik_testow": 3728,
    "licznik_bledow": 1
}, {
    "nazwa_hosta": "vtarnobrzeg",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "21.486485ms",
    "licznik_testow": 3718,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vtarnow",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "86.408256ms",
    "licznik_testow": 3728,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vtrzebinia",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "84.575615ms",
    "licznik_testow": 3728,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vustrzyki",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "79.471549ms",
    "licznik_testow": 3727,
    "licznik_bledow": 0
}, {
    "nazwa_hosta": "vwadowice",
    "data_pomiaru": "2017-08-22 14:17:44",
    "status_pomiaru": 0,
    "status_wysyłkowy": 0,
    "czas_ping": "91.718781ms",
    "licznik_testow": 3726,
    "licznik_bledow": 20
}];
var prev = 0;

randomize = function (quantity) {

    if(quantity>1){
        for (var i = 0; i < quantity; i++) {
            var currentNumber = Math.floor(Math.random() * json.length);
            if (json[currentNumber].status_wysyłkowy > 0)
                json[currentNumber].status_wysyłkowy = 0;
            else
                json[currentNumber].status_wysyłkowy = 1;

        }
        return json;
    }
    else{
        var currentNumber = Math.floor(Math.random() * json.length);
        json[prev].status_wysyłkowy = 0;
        json[currentNumber].status_wysyłkowy = 1;
        prev = currentNumber;
        return json;
    }

};

var TestServer = function () {
};

TestServer.prototype.start = function () {
    return randomize(variables.changeQuantity());
};

module.exports = new TestServer();