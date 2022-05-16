const express = require('express')
const mysql = require("mysql");

var db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  // password: "your_password",
  database: "EMS"
});

db.connect(err => {
  if (err) {
    if (err != null) console.l
og({ error: err.message });
  }
  else
  console.log("Database Connected");
});
module.exports = db;

