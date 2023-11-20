const { Module } = require("module");
const tourModel = require("../../models/tourModel");
const contentTourModel = require("../../models/contentTourModel");
const tourDetailModel = require("../../models/tourDetailModel");
const bookTourModel = require("../../models/bookTourModel");

// lấy tất cả tour
const getAllTour = async () => {
  try {
    const tours = await tourModel.find();
    if (tours.length > 0) {
      return tours;
    }
    return null;
  } catch (error) {
    console.log("get all tour error: ", error);
  }
};

// lấy tất cả nội dung của một tour
const getAllContentTour = async () => {
  try {
    const contents = await contentTourModel.find();
    if (contents.length > 0) {
      return contents;
    }
    return null;
  } catch (error) {
    console.log("get all content tour error: ", error);
  }
};

// lấy chi tiết của một tour
const getDetailTourById = async (id) => {
  try {
    const detail = await tourDetailModel.find({tour: id});
    if (detail.length > 0) {
      return detail;
    }
    return null;
  } catch (error) {
    console.log('get detail tour by id failed: ' + error);
  }
};

// lấy tất cả chi tiết của tour
const getAllDetailTour = async () => {
  try {
    const details = await tourDetailModel.find();
    if (details.length > 0) {
      return details;
    }
    return null;
  } catch (error) {
    console.log("get all detail tour error: " + error);
  }
};

// lấy tour theo id
const getTourById = async (id) => {
  try {
    const tour = await tourModel.findById(id);
    if (tour) {
      return tour;
    }
    return null;
  } catch (error) {
    console.log("get tour by id error: " + error);
  }
};

// lấy lịch trình của một tour
const getTheTourSchedule = async (idTourDetail) => {
  try {
    const contents = await contentTourModel
      .find({ tourDetail: idTourDetail })
      .exec();
    if (contents.length > 0) {
      return contents;
    }
    return null;
  } catch (error) {
    console.log("get the tour schedule error: " + error);
  }
};

// lấy danh sách các tour đã đặt
const getBookTour = async () => {
  try {
    const booktours = await bookTourModel.find();
    if (booktours.length > 0) {
      return booktours;
    }
    return null;
  } catch (error) {
    console.log("get book tour error: " + error);
  }
};

// đặt tour
const bookTour = async (date, user, totalAmout, numberOfReservations, tour) => {
  try {
    console.log(date.toString());
    const booktour = {
      _id: null,
      date: date,
      user: user,
      tour: tour,
      numberOfReservations: numberOfReservations,
      totalAmout: totalAmout,
    };
    const newBookTour = new bookTourModel(booktour);
    const result = await newBookTour.save();
    return result;
  } catch (error) {
    console.log("book tour error: " + error);
  }
};

module.exports = {
  getAllTour,
  getAllContentTour,
  getAllDetailTour,
  getTourById,
  getTheTourSchedule,
  getBookTour,
  bookTour,
  getDetailTourById
};
