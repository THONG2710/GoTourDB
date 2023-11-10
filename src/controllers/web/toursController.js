const toursService = require("../../services/web/toursService");

// get all tours
const getAllTours = async (page) => {
  try {
    const tours = await toursService.getAllTours(page);
    const numberOfPages = await toursService.getAllToursPage();
    return { tours, numberOfPages };
  } catch (error) {
    return error;
  }
};

// delete tour
const deleteTour = async (id) => {
  try {
    return await toursService.deleteTour(id);
  } catch (error) {
    return false;
  }
};
// // delete img tour tren firebase
// const deleteOnFirebase = async (folder,fileName) => {
//   try {
//     return await toursService.deleteOnFirebase(folder,fileName);
//   } catch (error) {
//     return false;
//   }
// };

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
    return await toursService.addTour(
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

// get tour by id
const getTourById = async (id) => {
  try {
    return await toursService.getTourById(id);
  } catch (error) {
    return false;
  }
};
// post edit tourm
const postEditTour = async (
  id,
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
    return await toursService.postEditTour(
      id,
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
    return false;
  }
};

module.exports = {
  getAllTours,

  postAddTour,
  deleteTour,
  getTourById,
  postEditTour,
  // deleteOnFirebase,
};
