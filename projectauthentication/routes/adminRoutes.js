const express = require("express");
const router = express.Router();

const { adminPage } = require("../controllers/adminController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

// protected + role check
router.get("/", protect, isAdmin, adminPage);

module.exports = router;