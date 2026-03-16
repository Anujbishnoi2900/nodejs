
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send(`
        <h1>Welcome to this app</h1>
        <a href="/home">Home</a>
    `);
});

module.exports = userRouter;