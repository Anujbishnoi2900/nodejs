const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/authController");

router.post("/signup", signup); // register
router.post("/login", login);   // login

module.exports = router;