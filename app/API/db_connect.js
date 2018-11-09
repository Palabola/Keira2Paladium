// LOGGER API
var mysql = require("mysql");
var settings = require("../settings");

const pool = mysql.createPool({
  connectionLimit: 20,
  host: settings.host,
  user: settings.user,
  port: settings.db_port,
  password: settings.password,
  database: settings.database,
  charset: "utf8"
});

module.exports = pool;
