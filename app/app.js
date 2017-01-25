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

app.get('/creature/template/:creature_id', function (req, res) {
    
    TC_API.search_creature(req.params,function(result){
     
      res.send(result);
        
    });
});

app.get('/creature/text/:creature_id', function (req, res) {
    
    TC_API.search_creature_text(req.params,function(result){
     
      res.send(result);
        
    });
});


app.get('/gameobject/template/:gameobject_id', function (req, res) {
    
    TC_API.search_gameobject(req.params,function(result){
     
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
  
        TC_API.clean_up_sai(JSON.parse(req.body),function(sai_data){
            
          TC_API.run_script(sai_data);
          
          res.send(JSON.parse(req.body)); 
        });
  
});

app.post('/creature_text_execute', function (req, res) {
  
        res.send(JSON.parse(req.body)); 
  
  
        TC_API.run_text(JSON.parse(req.body),function(){
          
          res.send(JSON.parse(req.body)); 
        });
});




app.listen(3000);
console.log('Express server started!');