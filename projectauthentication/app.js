require("dotenv").config();

console.log("ENV CHECK:", process.env.MONGO_URI);

// const { connectDB } = require("./config/db");
const express = require("express");
const path = require("path");

// ✅ destructuring import (important change)
const { connectDB } = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const storeRoutes = require("./routes/storeRoutes");

const app = express();

// connect database
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.join(__dirname, "public")));

// view engine
app.set("view engine", "ejs");

// routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/", storeRoutes);

// start server
app.listen(process.env.PORT, () => {
  console.log("Server running...");
});