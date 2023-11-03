
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/UserController");


// 192.168.1.53
// http://42.116.118.69:3000/api/user/getUser
router.get("/getuser", async (req, res, next) => {
  try {
    // console.log("eeeeeeeeeeeeeee");
    const users = await userController.getAllUser();

    return res.status(200).json({ result: true, users: users });
  } catch (error) {
    // return res.status(500).json({result: false, users: null});
  }
  // res.send("get user");
});

module.exports = router;
