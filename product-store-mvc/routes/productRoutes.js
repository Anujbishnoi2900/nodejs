const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// all products
router.get("/", productController.getProducts);

// single product
router.get("/product/:id", productController.getSingleProduct);

module.exports = router;