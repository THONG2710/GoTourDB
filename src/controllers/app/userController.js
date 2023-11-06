const UserService = require('../../services/app/userService');

const login = async (email, password) => {
    return await UserService.loginApp(email, password);
}

module.exports = {login}