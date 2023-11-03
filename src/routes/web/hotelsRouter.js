const express = require("express");
const router = express.Router();
const { hotels } = require("../../controllers/web/hotelsController");

//table Hotels
router.get("/hotels", hotels);

module.exports = router;