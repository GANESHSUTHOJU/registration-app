const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ganesh12@2003bunny", // change if you set one
  database: "internship_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// API to insert user
app.post("/register", (req, res) => {
  const { fullName, email, mobile, dob } = req.body;
  const sql = "INSERT INTO users (fullName, email, mobile, dob) VALUES (?, ?, ?, ?)";
  db.query(sql, [fullName, email, mobile, dob], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "User registered" });
  });
});

// API to get users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
