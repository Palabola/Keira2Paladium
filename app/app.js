var express = require("express");
var fs = require('fs');


var app = express();
    app.set("view options", {layout: false});
    app.use(express.static(__dirname + ''));

app.get('/', function(req, res){
    res.render('/index.html');
});

app.listen(3000);
console.log('Express server started');