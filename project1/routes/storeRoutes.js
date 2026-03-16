const express = require("express");
const router = express.Router();

const storeController = require("../controllers/storeController");

router.get("/",storeController.getHomeList);

router.get("/home/:id",storeController.getHomeDetail);

module.exports = router;