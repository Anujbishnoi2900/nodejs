// dotenv ko import kar rahe hain taaki .env file ke variables use kar sake
require("dotenv").config();

const express = require("express");
const path = require("path");

// MongoDB connection function import kar rahe hain
const { mongoConnect } = require("./config/db");

// Routes import kar rahe hain
const adminRoutes = require("./routes/adminRoutes");
const storeRoutes = require("./routes/storeRoutes");

const app = express();

// EJS template engine set kar rahe hain (views render karne ke liye)
app.set("view engine", "ejs");

// Views folder ka path set kar rahe hain
app.set("views", path.join(__dirname, "views"));

// Public folder ko static bana rahe hain (CSS, images serve karne ke liye)
app.use(express.static(path.join(__dirname, "public")));

// Form data (req.body) read karne ke liye middleware
app.use(express.urlencoded({ extended: true }));

// Admin routes (/admin se start honge)
app.use("/admin", adminRoutes);

// Store routes (normal user ke liye)
app.use(storeRoutes);


// 🔥 MongoDB connect hone ke baad hi server start hoga
mongoConnect(() => {

  // Server start kar rahe hain
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });

});