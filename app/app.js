var settings = require('./settings.js');
var express = require("express");
var fs = require('fs');
var db = require('./API/db_connect.js');
var TC_API = require('./API/TC_API.js');
var bodyParser = require('body-parser');

var app = express();
    app.set("view options", {layout: false});
    app.use(express.static(__dirname + ''));

app.get('/', function(req, res){
    res.render('/index.html');
});


app.get('/api', function(req, res){
    
    var api_json = {"api_version":"0.7", "api_branch":"master"} ;
    
    res.send(api_json);
});

app.get('/version', function(req, res){
    
    var api_json = {"api_version":"0.7", "api_branch":"master"} ;
    
    res.send(api_json);
});

// Creature Search
app.get('/search/creature/:creature_id', function (req, res) {
    
    TC_API.search_creature(req.params,function(result){
     
      res.send(result);
        
    });

  //res.send(req.params);
});

// Smart AI Search
app.get('/smart_scripts/:source_type/:entry_id', function (req, res) {
    
    TC_API.search_sai(req.params,function(result){
     
      res.send(result);
        
    });

  //res.send(req.params);
});

app.use(bodyParser.text());

app.post('/query_execute', function (req, res) {
  
          TC_API.run_script(req.body);
          res.send(req.body); 
        
    
   // res.send(req);
  
});






app.listen(3000);
console.log('Express server started!');