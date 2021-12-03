const mysql = require("mysql");
require("dotenv").config();
// const dbConfig = require("./dbconfig.json");

// 1. dotenv 파일을 사용하는 방식. 블록체인할때도 .dotenv를 사용
var con = mysql.createConnection({
    //dotenv 모듈을 설치하고 .dotenv 파일을 생성하고 이런 방식으로 활용하면 데이터베이스에 접근할 수 있다.
    host: process.env.HOST, 
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE 
});


// 2. dbconfig.json 파일을 사용하는 방식
// var con = mysql.createConnection(dbConfig);

con.connect((err) => {
    if(err) throw err;
    console.log("Connected!");
    // var sQuery = "CREATE DATABASE NODEPOT2"; // 데이터베이스 새로 만들기
    // var sQuery = "CREATE TABLE customers (name varchar(128), addr varchar(256))"; // TABLE 새로 만들기
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('James Hetfield', 'New York City')"; // value 넣기
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('Kirk Hammet', 'New York City')"; // value 넣기
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('Adams Dole', 'New York City')"; // value 넣기
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('Sarah Coner', 'Los Angeles')";
    // var sQuery = "SELECT * FROM customers"; // SELECT * 으로 다 선택한 후 console.log(result);로 확인가능
    // var sQuery = "SELECT * FROM customers where name ='Kirk Hammet'"
    // var sQuery = "SELECT * FROM customers ORDER BY name"; // name 기준으로 정렬해서 보여줌.
    // var sQuery = "SELECT * FROM customers ORDER BY addr"; // addr 기준으로 정렬
    // var sQuery = "DELETE FROM customers WHERE name='Adams dole'"; // 삭제
    // var sQuery = "UPDATE customers SET addr='Missisifi Liver' where name='Sarah Coner'"; // 주소 업데이트
    // var sQuery = "Select * from customers;"
    var sQuery = "drop table customers;"

    con.query(sQuery, (err, result, fields) => { // nodejs에서 입력한 sql문을 처리해주는 메소드 .query()
        if(err) throw err;

        console.log(result); // SELECT * 으로 다 선택한 후 콘솔에 찍으면 콘솔에 나옴.
    }) ;
});
con.end(); // 커넥션을 끊어야 함.