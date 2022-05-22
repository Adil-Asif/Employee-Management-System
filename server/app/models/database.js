const express = require('express')
const mysql = require("mysql");

var db = mysql.createConnection({
 host : 'localhost',
 // host: "127.0.0.1",
  user: 'root',
  password: 'yumna123',
  database: 'EMS'
});

db.connect(err => {
  if (err) {
    if (err != null) 
    console.log({ error: err.message });
  }
  else
  console.log("Database Connected");
});
module.exports = db;

