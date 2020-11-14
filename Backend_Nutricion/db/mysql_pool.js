var mysql = require("mysql");

const pool = mysql.createPool ({
  connectionLimit : 10,
  host : "bzkzdtzwqy2di3eu0h42-mysql.services.clever-cloud.com",
  user : "uxqfjdl4idypawmb",
  password : "mTsGKOR2SeTZAkdBXPpR",
  database : "bzkzdtzwqy2di3eu0h42"
});

module.exports = {pool : pool}