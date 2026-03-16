const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/adminRoutes");
const storeRoutes = require("./routes/storeRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use(storeRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});