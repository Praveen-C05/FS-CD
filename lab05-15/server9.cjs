const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/university", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// Schema & Model
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  program: String,
  age: Number
});

const Student = mongoose.model("Student", studentSchema);

// API Route to fetch student by email
app.get("/student/:email", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.params.email });
    if (!student) {
      return res.json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.json({ error: "Error fetching student profile" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
