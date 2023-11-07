const express = require("express");
const router = express.Router();
const {
  getAllTours,
  addTour,
  deleteTour,
  postAddTour,
} = require("../../controllers/web/toursController");
const { checkTokenWeb } = require("../../middleware/authen");
const uploadFile = require("../../middleware/uploadFile");
//table Tours
// localhost:3000/tours?page=1
router.get("/tours",[checkTokenWeb],  async (req, res) => {
  try {
    let page = req.query.page || 1;
    const { tours, numberOfPages } = await getAllTours(page);

    res.render("tours.ejs", { tours, numberOfPages, page });
  } catch (error) {
    return error;
  }
});

//delete Tour by id
// localhost:3000/tours/delete/:id
router.post("/tours/delete/:id",[checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTour(id);
    res.json(result);
  } catch (error) {
    return error;
  }
});

// add Tour
router.get("/addtour",[checkTokenWeb], addTour);

// post add Tour
router.post("/addtour", [checkTokenWeb,uploadFile.single("images")], async (req, res) => {
  try {
    let { body, file } = req;
    if (file) {
      file = `/img/${file.filename}`;
      body = { ...body, images: file };
    }
    if (body.images != undefined) {
      const {
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
      } = body;
      const result = await postAddTour(
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
      if (result) {
        return res.redirect("/tours");
      } else {
        return res.redirect("/addtour");
      }
    } else{
      const images = body.images;
      console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", images);
      return res.render("addtour.ejs",{images});

    }
  } catch (error) {
    return error;
  }
});

module.exports = router;
