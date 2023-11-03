const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../../controllers/web/usersController");

//table Users
router.get("/", getAllUsers);

module.exports = router;
