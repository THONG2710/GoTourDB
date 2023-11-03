const express = require("express");
const router = express.Router();
const { hotels } = require("../../controllers/web/hotelsController");
const { checkTokenWeb } = require("../../middleware/authen");

//table Hotels
router.get("/hotels",[checkTokenWeb], hotels);

module.exports = router;