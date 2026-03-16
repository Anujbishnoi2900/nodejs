const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");

const app = express();

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", productRoutes);

// server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});