const trainsService = require("../../services/web/trainsService");

// get all trains
const getAllTrains = async (page) => {
  try {
    const trains = await trainsService.getAllTrains(page);
    const numberOfPages = await trainsService.getAllTrainsPage();
    return { trains, numberOfPages };
  } catch (error) {
    return error;
  }
};
// delete train
const deleteTrain = async (id) => {
  try {
    return await trainsService.deleteTrain(id);
  } catch (error) {
    return false;
  }
};
// post add train
const postAddTrain = async (
  from,
  to,
  time,
  price,
  departureTime,
  endTime,
  isOneWayTicket
) => {
  try {
    return await trainsService.addTrain(
      from,
      to,
      time,
      price,
      departureTime,
      endTime,
      isOneWayTicket
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};

// get train by id
const getTrainById = async (id) => {
  try {
    return await trainsService.getTrainById(id);
  } catch (error) {
    return false;
  }
};
// post edit trainm
const postEditTrain = async (
  id,
  from,
  to,
  time,
  trainCompany,
  price,
  departureTime,
  endTime,
  isOneWayTicket
) => {
  try {
    return await trainsService.postEditTrain(
      id,
      from,
      to,
      time,
      trainCompany,
      price,
      departureTime,
      endTime,
      isOneWayTicket
    );
  } catch (error) {
    return false;
  }
};
module.exports = {
  getAllTrains,
  deleteTrain,
  postAddTrain,
  getTrainById,
  postEditTrain,
};
