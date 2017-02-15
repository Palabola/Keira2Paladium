//var settings = require('./settings.js');
var settings = require('electron-settings');
var app = require('./express');
// var express = require("express");
var fs = require('fs');
var db = require('./API/db_connect.js');
var TC_API = require('./API/TC_API.js');
var controllers = require('./controllers')({ TC_API }); // call index.js from controllers folder and passing it dependencies
// var bodyParser = require('body-parser');
// var app = express();

// Settings optionaly best at the top
//     app.set("view options", {layout: false});
//     app.use(express.static(__dirname + ''));
//     app.use(bodyParser.text());


require('./routers')({ app, controllers });

// app.get('/', function(req, res){
//     res.render('/index.html');
// });

app.listen(3000);
console.log('Express server started!');