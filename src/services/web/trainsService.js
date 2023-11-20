const trainModel = require("../../models/trainModel");
const { default: mongoose } = require("mongoose");

// lấy 10 train 1 trang
const getAllTrains = async (page) => {
  try {
    const trains = await trainModel
      .find()
      .limit(10)
      .skip((page - 1) * 10);
    return trains;
  } catch (error) {
    return error;
  }
};
// lấy số trang
const getAllTrainsPage = async () => {
  try {
    const result = await trainModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};
// xóa train
const deleteTrain = async (id) => {
  try {
    await trainModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};
// thêm train
const addTrain = async (
  from,
  to,
  time,
  price,
  departureTime,
  endTime,
  isOneWayTicket
) => {
  try {
    const newTrain = {
      from,
      to,
      time,
      price,
      departureTime,
      endTime,
      isOneWayTicket,
      _id: new mongoose.Types.ObjectId(),
    };
    const train = new trainModel(newTrain);
    await train.save();
    return true;
  } catch (error) {
    console.log("add train error: ", error);
    return false;
  }
};
// lấy train theo id
const getTrainById = async (id) => {
  try {
    const train = await trainModel.findById(id);
    return train;
  } catch (error) {
    console.log("get train by id error: ", error);
    return false;
  }
};
// edit train
const postEditTrain = async (
  id,
  from,
  to,
  time,
  price,
  departureTime,
  endTime,
  isOneWayTicket
) => {
  try {
    const train = await trainModel.findById(id);
    if (train) {
      train.from = from ? from : train.from;
      train.to = to ? to : train.to;
      train.time = time ? time : train.time;
      train.price = price ? price : train.price;
      train.departureTime = departureTime
        ? departureTime
        : train.departureTime;
      train.endTime = endTime ? endTime : train.endTime;
      train.isOneWayTicket = isOneWayTicket
        ? isOneWayTicket
        : train.isOneWayTicket;

      await train.save();
      return true;
    }
  } catch (error) {
    console.log("edit train error: ", error);
    return false;
  }
};

module.exports = {
  getAllTrains,
  getAllTrainsPage,
  deleteTrain,
  addTrain,
  getTrainById,
  postEditTrain,
};
