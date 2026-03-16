const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/add-home",adminController.getAddHome);

router.post("/add-home",adminController.postAddHome);

router.get("/admin-home-list",adminController.getAdminHomes);

router.get("/delete-home/:id",adminController.deleteHome);

router.get("/edit-home/:id",adminController.getEditHome);

router.post("/edit-home",adminController.postEditHome);

module.exports = router;