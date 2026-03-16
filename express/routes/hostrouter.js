
const express = require("express");
const hostrouter = express.Router();
const path =require("path");
hostrouter.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname,"../",'views','home.html'));
});

hostrouter.post("/home", (req, res) => {
  console.log(req.body);
  res.send("<h1>Success</h1>");
});

module.exports = hostrouter;