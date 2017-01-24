// LOGGER API
var mysql = require('mysql');
var settings = require('../settings');

var connection = mysql.createConnection({
    host     : settings.host,
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    charset  : 'utf8'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;





