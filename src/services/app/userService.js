const userModel = require("../../models/userModel")

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

module.exports = {loginApp}