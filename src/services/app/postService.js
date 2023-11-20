const postModel = require('../../models/postModel');

const getAllPost = async () => {
    try {
        const posts = await postModel.find();
        if (posts.length > 0) {
            return posts;
        }
        return null;
    } catch (error) {
        console.log('get all post error: ' + error);
    }
}

module.exports = {getAllPost};