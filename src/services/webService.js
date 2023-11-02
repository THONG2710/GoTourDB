const userModel = require("../models/userModel");
const hotelModel = require("../models/hotelModel");
const tourModel = require("../models/tourModel");
       

const signIn = async (email, password) => {
  try {
    const user = await userModel.findOne({ email: email });
    // console.log(user);
    if (user && user.password === password) {
      return true;
    }
  } catch (error) {
    console.log("Sign in error: " + error);
    throw error;
  }
  return false;
};
const getAllUsers = async () => {
  try {
    return await userModel.find();
  } catch (error) {
    return error
  }
};
const getAllHotels = async () => {
  try {
    return await hotelModel.find();
  } catch (error) {
    return error;
  }
};
const getAllTours = async () => {
    try {
        return await tourModel.find();
    } catch (error) {
        return error;
    }
    }
module.exports = { signIn, getAllUsers, getAllHotels,getAllTours };
