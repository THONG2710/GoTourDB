const hotelModel = require("../../models/hotelModel");
const getAllHotels = async () => {
    try {
      return await hotelModel.find();
    } catch (error) {
      return error;
    }
  };
  module.exports = { getAllHotels };