const tourModel = require("../../models/tourModel");
const getAllTours = async () => {
    try {
      return await tourModel.find();
    } catch (error) {
      return error;
    }
  };
  module.exports = { getAllTours };