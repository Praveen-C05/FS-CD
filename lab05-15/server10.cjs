const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/university", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Student Schema & Model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  program: String,
  age: Number,
});
const Student = mongoose.model("Student", studentSchema);

// CREATE: Add new student
app.post("/students", async (req, res) => {
  try {
    const { name, email, program, age } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required" });
    }
    const newStudent = new Student({ name, email, program, age });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(500).json({ error: "Error creating student" });
    }
  }
});

// READ: Get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Error fetching students" });
  }
});

// READ: Get a single student by ID
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Error fetching student" });
  }
});

// UPDATE: Update student by ID
app.put("/students/:id", async (req, res) => {
  try {
    const { name, email, program, age } = req.body;
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, program, age },
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Error updating student" });
  }
});

// DELETE: Remove student by ID
app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted", student });
  } catch (err) {
    res.status(500).json({ error: "Error deleting student" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
