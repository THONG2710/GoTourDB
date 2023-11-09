const express = require("express");
const router = express.Router();
const  toursController  = require("../../controllers/web/toursController");
const { checkTokenWeb } = require("../../middleware/authen");
const {
  uploadFile,
  uploadFileToFirebase,
  deleteFileFromFirebase
} = require("../../middleware/uploadFile");


//table Tours
// localhost:3000/tours?page=1
router.get("/tours", [checkTokenWeb], async (req, res) => {
  try {
    let page = req.query.page || 1;
    const { tours, numberOfPages } = await toursController.getAllTours(page);

    res.render("tours.ejs", { tours, numberOfPages, page });
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
router.delete("/tours/deleteonfirebase/:folder/:fileName", [checkTokenWeb], async (req, res) => {
  try {
    const { folder,fileName } = req.params;
      // console.log('>>>>>>>>>>>>>>>>>>>>',folder,fileName);
    const result = await deleteFileFromFirebase(folder,fileName);
    // console.log(result);
    res.json(result);
  } catch (error) {
    return error;
  }
});


// add Tour
router.get("/addtour", [checkTokenWeb], (req,res) => {
  res.render("addtour.ejs");
  });

// post add Tour
router.post("/addtour", [checkTokenWeb,uploadFile.single("images")], async (req, res) => {
  try {
    let { body, file } = req;
    // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", body, file);
    const images = await uploadFileToFirebase(file,'imagesTour'); // truyen vao file va ten folder tren firebase
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
});
// hien ra screen edit Tour by id
router.get("/edittour/:id", [checkTokenWeb], async (req, res) => {
try {
    const {id} = req.params;
     const tour = await toursController.getTourById(id);
    // console.log(">>>>>>>>>>>>>>>>log", tour);
    res.render("edittour.ejs", { tour });

} catch (error) {
  
}
});

module.exports = router;
