const airlineModel = require("../../models/airlineModel");
const { deleteFileFromFirebase } = require("../../middleware/uploadFile");
const { default: mongoose } = require("mongoose");

// lấy 10 airline 1 trang
const getAllAirlines = async (page) => {
  try {
    const airlines = await airlineModel
      .find()
      .limit(10)
      .skip((page - 1) * 10);
    return airlines;
  } catch (error) {
    return error;
  }
};
// lấy số trang
const getAllAirlinesPage = async () => {
  try {
    const result = await airlineModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};
// xóa airline
const deleteAirline = async (id) => {
  try {
    await airlineModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};
// thêm airline
const addAirline = async (
  from,
  to,
  time,
  airlineCompany,
  price,
  departureTime,
  endTime,
  isOneWayTicket
) => {
  try {
    const newAirline = {
      from,
      to,
      time,
      airlineCompany,
      price,
      departureTime,
      endTime,
      isOneWayTicket,
      _id: new mongoose.Types.ObjectId(),
    };
    const airline = new airlineModel(newAirline);
    await airline.save();
    return true;
  } catch (error) {
    console.log("add airline error: ", error);
    return false;
  }
};
// lấy airline theo id
const getAirlineById = async (id) => {
  try {
    const airline = await airlineModel.findById(id);
    return airline;
  } catch (error) {
    console.log("get airline by id error: ", error);
    return false;
  }
};
// edit airline
const postEditAirline = async (
  id,
  from,
  to,
  time,
  airlineCompany,
  price,
  departureTime,
  endTime,
  isOneWayTicket
) => {
  try {
    const airline = await airlineModel.findById(id);
    if (airline) {
      airline.from = from ? from : airline.from;
      airline.to = to ? to : airline.to;
      airline.time = time ? time : airline.time;
      airline.airlineCompany = airlineCompany
        ? airlineCompany
        : airline.airlineCompany;
      airline.price = price ? price : airline.price;
      airline.departureTime = departureTime
        ? departureTime
        : airline.departureTime;
      airline.endTime = endTime ? endTime : airline.endTime;
      airline.isOneWayTicket = isOneWayTicket
        ? isOneWayTicket
        : airline.isOneWayTicket;

      await airline.save();
      return true;
    }
  } catch (error) {
    console.log("edit airline error: ", error);
    return false;
  }
};

module.exports = {
  getAllAirlines,
  getAllAirlinesPage,
  deleteAirline,
  addAirline,
  getAirlineById,
  postEditAirline,
};
