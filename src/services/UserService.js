const e = require("express");
const UserModel = require("../models/userModel");

// lấy danh sách người dùng trong database
const getAllUser = async (page, size) => {
  try {
    return await UserModel.find();
  } catch (error) {
    console.log("Get all user error: " + error);
    throw error;
  }
};

module.exports = { getAllUser };
