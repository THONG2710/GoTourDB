const webService = require("../../services/web/toursService");

// get all tours
const getAllTours = async (page) => {
  try {
    const tours = await webService.getAllTours(page);
    const numberOfPages = await webService.getAllToursPage();
    return { tours, numberOfPages };
  } catch (error) {
    return error;
  }
};

// delete tour
const deleteTour = async (id) => {
  try {
    return await webService.deleteTour(id);
  } catch (error) {
    return false;
  }
};
// add tour
const addTour = async (req, res) => {
  res.render("addtour.ejs");
};
// post add tour
const postAddTour = async (
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
    return await webService.addTour(
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
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};
module.exports = {
  getAllTours,
  addTour,
  postAddTour,
  deleteTour,
};
