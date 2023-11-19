const userModel = require("../../models/userModel");
const bookTour = require('../../models/bookTourModel');
const bookTourModel = require("../../models/bookTourModel");

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

module.exports = {loginApp, signUp, getTourByUser}