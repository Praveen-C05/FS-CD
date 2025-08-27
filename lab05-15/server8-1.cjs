require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  program: { type: String, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

// Handle Registration Form
app.post("/register", async (req, res) => {
  const { name, email, program, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ name, email, program, password: hashedPassword });
    await student.save();
    res.send(`<h2>Registration Successful!</h2><p>Welcome, ${name}</p>`);
  } catch (err) {
    if (err.code === 11000) {
      res.send("Email already registered.");
    } else {
      res.send("Error registering student.");
    }
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
