const userModel = require("../../models/userModel")

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
        if (user ) return false;
        const newUser = {email, password };
        const nUser = new userModel(newUser);
        const cUser = await nUser.save();
        return cUser;
    } catch (error) {
        console.log('signUp error: =======> ', error);
    }
    return false
}

module.exports = {loginApp, signUp}