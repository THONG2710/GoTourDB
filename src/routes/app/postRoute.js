const express = require("express");
const router = express.Router();
const postController = require('../../controllers/app/postController');

// http://localhost:3000/api/post/getAllPost
router.get('/getAllPost', async (req, res, next) => {
    try {
        const posts = await postController.getAllPostController();
        if (posts) {
            return res.status(200).json({result: true, posts: posts});
        }
        return res.status(404).json({result: false, posts: null});
    } catch (error) {
        return res.status(404).json({result: false, posts: null})
    }
});


module.exports = router;