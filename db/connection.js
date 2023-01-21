const mysql = require("mysql2");




// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // mysql username
      user: "root",
      password: "@q^5y28mTPdv2tTz",
      database: "elections",
    },
    console.log("Connected to the elections database.")
  );


  module.exports = db;