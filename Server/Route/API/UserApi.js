var express = require('express');
var router = express.Router();
const UserController = require('../../Components/User/UserController');

// 192.168.1.53
// http://42.116.118.69:3000/api/user/getUser
router.get('/getUser', (req, res, next) => {
    // try {
    //     console.log('eeeeeeeeeeeeeee');
    //     // const users = await UserController.getAllUser();
    //     // return res.status(200).json({result: true, users: users});
    // } catch (error) {
    //     // return res.status(500).json({result: false, users: null});
    // }
    console.log('ddd');
}); 

module.exports = router