const express = require("express");
const router = express.Router();
const { tours } = require("../../controllers/web/toursController");
//table Tours
router.get("/tours", tours);

module.exports = router;
