const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/storeController");

// public route
router.get("/", getAllProducts);

module.exports = router;