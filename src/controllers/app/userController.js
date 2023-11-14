const UserService = require('../../services/app/userService');

const login = async (email, password) => {
    return await UserService.loginApp(email, password);
}

const SignUp =  async (email, password) => {
    return await UserService.signUp(email, password);
}

module.exports = {login, SignUp}