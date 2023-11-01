const UserService = require("../services/UserService");

const getAllUser = async (page, size) => {
  try {
    return await UserService.getAllUser();
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllUser };
