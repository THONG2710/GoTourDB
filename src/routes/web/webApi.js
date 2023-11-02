const express = require("express");
const router = express.Router();
const {
  index,
  signin,
  signup,
  postSignin,
  hotels,
  tours
} = require("../../controllers/webController");

// router.Method("/path", callbackFunction);
router.get("/signin", signin);
router.get("/signup", signup);
//table người dùng
router.get("/", index);
//table Hotels
router.get("/hotels", hotels);
//table Tours   
router.get("/tours", tours);

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const result = await postSignin(email, password);
  if (result) {
    console.log("Sign in successfully!");
    res.redirect("/");
  } else {
    console.log("Sign in failed!");
    res.redirect("/signin");
  }
});


module.exports = router;
