require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Change this to your frontend port if different
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT
});

// Connect to DB
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database.");
});

// Health check route for debugging
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Handle Registration Form
app.post("/register", async (req, res) => {
  const { name, email, program, password } = req.body;
  if (!name || !email || !program || !password) {
    return res.json({ success: false, message: "All fields are required." });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO students (name, email, program, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, program, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.json({ success: false, message: "Email already registered." });
        }
        console.error("MySQL Error:", err);
        return res.json({ success: false, message: "Database error: " + err.message });
      }
      // Registration successful
      res.json({
        success: true,
        name,
        message: `Welcome to Full Stack, ${name}! Thank you for showing the interest. We will contact you soon.`
      });
    });
  } catch (err) {
    console.error("Server Error:", err);
    res.json({ success: false, message: "Server error: " + err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
