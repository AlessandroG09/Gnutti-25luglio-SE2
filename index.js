var express = require('express');
var app = express();
var fs = require("fs");

var getFlightInfo = require('./getFlightInfo.js');
var getFlights = require('./getFlights.js');
var setFlights = require('./setFlights.js');



//chiamata per la funzione getFlightInfo
app.get('/getFlightInfo:', function (req, res) {
    getFlightInfo(req);
})

//chiamata per la funzione getFlights
app.get('/getFlights', function(req, res) {
    getFlights(req);
})

//chiamata con "put" per la funzione setFlight per definire nuovi voli
app.put('./setFlights', function(req, res){
    setFlights(req);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server running at http://%s:%s", host, port)

})