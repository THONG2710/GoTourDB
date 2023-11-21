const userModel = require("../../models/userModel");
const bookTour = require('../../models/bookTourModel');
const bookTourModel = require("../../models/bookTourModel");
const postModel = require("../../models/postModel");

// đăng nhập vào app
const loginApp = async (email, password) => {
    try {
        const user = await userModel.findOne({email: email}).exec();
        if (user && user.password === password) {
            return user;        
        }
        return null;
    } catch (error) {
        console.log('login error: =======> ', error);
    }
}

// đăng kí tài khoản
const signUp = async (email, password) => {
    try {
        const user = await userModel.findOne({email: email}).exec();
        if (user ) {
            console.log(email + " already exists!!");
            return false;
        }
        const newUser = {_id: null, email, password, fullName: "", address: "", cccd: "", phoneNumber: "", score: 0, role: 0, gender: 0, avatar: ""};
        const nUser = new userModel(newUser);
        const cUser = await nUser.save();
        return cUser;
    } catch (error) {
        console.log('signUp error: =======> ', error);
    }
    return false
};

// lấy danh sách tour theo người dùng
const getTourByUser = async (id) => {
    try {
        const tours = await bookTourModel.find({user: id});
        if (tours) {
            return tours;
        }
        return null;
    } catch (error) {
        console.log('get tour by user error: ', error);
    }
};

// lấy người dùng thông qua id
const getUserById = async (id) => {
    try {
        const user = await userModel.findById(id);
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        console.log('get user by id error: ' + error);
    }
}

// lấy bài đăng theo người dùng
const getPostByIdUser = async (id) => {
    try {
        const post = await postModel.find({user: id});
        if (post.length > 0) {
            return post;
        }
        return null;
    } catch (error) {
        console.log('get post by id user error: ' + error);
    }
}
module.exports = {loginApp, signUp, getTourByUser, getUserById, getPostByIdUser}