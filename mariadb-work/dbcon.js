const mysql = require("mysql");
const config = require("./dbconfig.json");


module.exports = mysql.createPool(config); 
// dbconfig.json에 대해 "connectionLimit": 100 커넥션 세션을 연다.
 

