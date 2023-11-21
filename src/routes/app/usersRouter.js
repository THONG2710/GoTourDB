const express = require("express");
const router = express.Router();
const userController = require("../../controllers/app/userController");

// http://localhost:3000/api/user/login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userController.login(email, password);
    // console.log(email, password);
    return res.status(200).json({ result: true, user: user });
  } catch (error) {
    return res.status(500).json({ result: false, user: null });
  }
});

// http://localhost:3000/api/user/signUp
router.post("/signUp", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userController.SignUp(email, password);
    if (user) {
      console.log("sign up successful!!!");
      return res.status(200).json({ result: true, user: user });
    }
    return res.status(400).json({ result: false, user: null });
  } catch (error) {
    console.log("sign up error + " + error);
    return res.status(500).json({ result: false, message: "Lỗi hệ thống" });
  }
});

// http://localhost:3000/api/user/getTourByIdUser?id=
router.get("/getTourByIdUser", async (req, res, next) => {
  try {
    const { id } = req.query;
    const tours = await userController.getTourByUser(id);
    if (tours.length > 0) {
      return res.status(200).json({ result: true, tours: tours });
    }
    return res.status(400).json({ result: false, tours: null });
  } catch (error) {
    return res.status(500).json({ result: false, tours: null });
  }
});

// http://localhost:3000/api/user/getUserById?id=
router.get('/getUserById', async (req, res, next) => {
  try {
    const {id} = req.query;
    const user = await userController.getUserByIdController(id);
    if (user) {
      return res.status(200).json({result: true, user: user});
    }
    return res.status(404).json({result: false, user: null});
  } catch (error) {
    return res.status(500).json({result: false, user: null});
  }
});

// http://localhost:3000/api/user/getPostByIdUser?id=
router.get('/getPostByIdUser', async (req, res, next) => {
  try {
    const {id} = req.query;
    const posts = await userController.getPostByIdUserController(id);
    if (posts.length > 0) {
      return res.status(200).json({result: true, posts: posts});
    }
    return res.status(404).json({result: false, posts: null});
  } catch (error) {
    return res.status(500).json({result: false, posts: null});
  }
});

module.exports = router;
  