const express = require("express");
const router = express.Router();
const {
  postSignin,
  signIn,
} = require("../../controllers/web/signInController");

router.get("/signin", signIn);

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
