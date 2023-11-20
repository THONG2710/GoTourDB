const express = require("express");
const router = express.Router();
const toursController = require("../../controllers/web/toursController");
const { checkTokenWeb } = require("../../middleware/authen");
const {
  uploadFile,
  uploadFileToFirebase,
  deleteFileFromFirebase,
} = require("../../middleware/uploadFile");

//table Tours
// localhost:3000/tours?page=1
router.get("/tours", [checkTokenWeb], async (req, res) => {
  try {
    let page = req.query.page || 1;
    const { tours, numberOfPages } = await toursController.getAllTours(page);
    // console.log(">>>>>>>>>>>>>>>>log", tours);
    res.render("tour/tours.ejs", { tours, numberOfPages, page });
  } catch (error) {
    return error;
  }
});

//delete Tour by id
// localhost:3000/tours/delete/:id
router.delete("/tours/delete/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await toursController.deleteTour(id);
    res.json(result);
  } catch (error) {
    return error;
  }
});
//delete img Tour tren firebase
router.delete(
  "/tours/deleteonfirebase/:fileName",
  [checkTokenWeb],
  async (req, res) => {
    try {
      const { fileName } = req.params;
      // console.log('>>>>>>>>>>>>>>>>>>>>',folder,fileName);
      const result = await deleteFileFromFirebase("imagesTour", fileName);
      // console.log(result);
      res.json(result);
    } catch (error) {
      return error;
    }
  }
);

// add Tour
router.get("/addtour", [checkTokenWeb], async (req, res) => {
  try {
    const typeOfTour = await toursController.getTypeOfTour();
    //  console.log(">>>>>>>>>>>>>>>>log", typeOfTour);
    res.render("tour/addtour.ejs", { typeOfTour });
  } catch (error) {
    return error;
  }
});

// post add Tour
router.post(
  "/addtour",
  [checkTokenWeb, uploadFile.single("images")],
  async (req, res) => {
    try {
      let { body, file } = req;
      // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", body, file);
      const images = file ? await uploadFileToFirebase("imagesTour", file) : ""; // truyen vao file va ten folder tren firebase
      // console.log(">>>>>>>>>>>>>>>>logimg>>>>>>>>>>>>>>>", images);
      const {
        tourName,
        departureDay,
        endDate,
        numberOfDays,
        numberOfNights,
        numberOfReservations,
        schedule,
        typeOfTour,
        departureLocation,
        describe,
        price,
      } = body;
      const result = await toursController.postAddTour(
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
      // console.log(">>>>>>>>>>>>>>>>log", body);
      // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", result);
      res.json(result);
      // if (result) {
      //   return res.redirect("/tours");
      // } else {
      //   return res.redirect("/addtour");
      // }
    } catch (error) {
      return error;
    }
  }
);
// hien ra screen edit Tour by id
router.get("/edittour/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await toursController.getTourById(id);
    // console.log(">>>>>>>>>>>>>>>>log", tour);
    const typeOfTour = await toursController.getTypeOfTour();

    // typeOfTour = typeOfTour.map(item => {
    //   item.selected = false;
    //   if (item.typeName === tour.typeOfTour) {
    //     type.selected = true;
    //   }
    //   return item;
    // });
    // console.log(">>>>>>>>>>>>>>>>log", typeOfTour);
    res.render("tour/edittour.ejs", { tour, typeOfTour });
  } catch (error) {
    return error;
  }
});
// post edit Tour by id
router.post(
  "/edittour/:id",
  [checkTokenWeb, uploadFile.single("images")],
  async (req, res) => {
    try {
      let { body, file } = req;
      let { id } = req.params;

      // console.log(">>>>>>>>>>>>>>>>log", body, file);
      const images =file ? await uploadFileToFirebase("imagesTour", file) : null; // truyen vao file va ten folder tren firebase
  
      
      console.log(">>>>>>>>>>>>>>>>log images <><<<", images);

      const {
        tourName,
        departureDay,
        endDate,
        numberOfDays,
        numberOfNights,
        numberOfReservations,
        schedule,
        typeOfTour,
        departureLocation,
        describe,
        price,
      } = body;
      // console.log(">>>>>>>>>>>>>>>>log", body);[]
      const result = await toursController.postEditTour(
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

      res.json(result);
    } catch (error) {
      return error;
    }
  }
);

module.exports = router;
