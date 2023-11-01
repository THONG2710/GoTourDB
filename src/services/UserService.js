const e = require("express");
const userModel = require("../models/userModel");
const { log } = require("console");


// lấy danh sách người dùng trong database
const getAllUser = async (page, size) => {
  try {
   
   
    return await userModel.find();
  } catch (error) {
    console.log("Get all user error: " + error);
    throw error;
  }
};

module.exports = { getAllUser };
