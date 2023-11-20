const airlinesService = require("../../services/web/airlinesService");

// get all airlines
const getAllAirlines = async (page) => {
  try {
    const airlines = await airlinesService.getAllAirlines(page);
    const numberOfPages = await airlinesService.getAllAirlinesPage();
    return { airlines, numberOfPages };
  } catch (error) {
    return error;
  }
};
// delete airline
const deleteAirline = async (id) => {
  try {
    return await airlinesService.deleteAirline(id);
  } catch (error) {
    return false;
  }
};
// post add airline
const postAddAirline = async (
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
    return await airlinesService.addAirline(
      from,
      to,
      time,
      airlineCompany,
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

// get airline by id
const getAirlineById = async (id) => {
  try {
    return await airlinesService.getAirlineById(id);
  } catch (error) {
    return false;
  }
};
// post edit airlinem
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
    return await airlinesService.postEditAirline(
      id,
      from,
        to,
        time,
        airlineCompany,
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
  getAllAirlines,
  deleteAirline,
  postAddAirline,
  getAirlineById,
  postEditAirline,
};
