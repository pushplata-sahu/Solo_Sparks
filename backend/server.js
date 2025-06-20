require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth'); // Login/Signup Routes
const SubmitForm = require('./models/submitform'); // Submit Form Model

const app = express();
const PORT = 5000;

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected to Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes); // handles /api/signup and /api/login

// Submit Form Route
app.post("/api/submit", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const newForm = new SubmitForm({ name, phone, email, password });
    await newForm.save();
    res.status(201).json({ message: "Form submitted & saved successfully!" });
  } catch (err) {
    console.error("❌ Error in /api/submit:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
