const { default: mongoose } = require("mongoose");
let tourModel = require("../../models/tourModel");

// lấy 10 tour 1 trang
const getAllTours = async (page) => {
  try {
    const tours = await tourModel
      .find()
      .limit(10)
      .skip((page - 1) * 10);
    return tours;
  } catch (error) {
    return error;
  }
};
// lấy số trang
const getAllToursPage = async () => {
  try {
    const result = await tourModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};
// xóa tour
const deleteTour = async (id) => {
  try {
    await tourModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};
// // xóa img tour tren firebase
// const deleteOnFirebase = async (folder,fileName) => {
//   try {

//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// thêm tour
const addTour = async (
  tourName,
  departureDay,
  endDate,
  numberOfDays,
  numberOfNights,
  numberOfReservations,
  schedule,
  images,
  typeOfTour,
  departureLocation,
  describe,
  price
) => {
  try {
    const newTour = {
      tourName,
      departureDay,
      endDate,
      numberOfDays,
      numberOfNights,
      numberOfReservations,
      schedule,
      images,
      typeOfTour,
      departureLocation,
      describe,
      price,
      _id: new mongoose.Types.ObjectId(),
    };
    const tour = new tourModel(newTour);
    await tour.save();
    return true;
  } catch (error) {
    console.log("add tour error: ", error);
    return false;
  }
};
// lấy tour theo id
const getTourById = async (id) => {
  try {
    const tour = await tourModel.findById(id);
    return tour;
  } catch (error) {
    console.log("get tour by id error: ", error);
    return false;
  }
};
module.exports = {
  getAllTours,
  addTour,
  deleteTour,
  getAllToursPage,
  getTourById,
  // deleteOnFirebase,
};
