const express = require("express");
const router = express.Router();
const userController = require("../../controllers/app/userController");

// http://localhost:3000/api/user/login
router.post("/login", async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await userController.login(email, password);
    console.log(email, password);
    return res.status(200).json({ result: true, user: user });
  } catch (error) {
    return res.status(500).json({result: false, user: null});
  }
});

// http://localhost:3000/api/user/signUp  
router.post('/signUp', async (req, res, next) => {
  try {
      const { email, password } = req.body;
      const user = await userController.SignUp(email, password);
      console.log(user);
      if (user) {
          return res.status(200).json({ result: true, user: user });
      }
      return res.status(400).json({ result: false, user: null });
  } catch (error) {
      // console.log(error);
      return res.status(500).json({ result: false, message: 'Lỗi hệ thống' });
  }
});


module.exports = router;
