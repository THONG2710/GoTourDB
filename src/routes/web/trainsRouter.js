const express = require("express");
const router = express.Router();
const trainsController = require("../../controllers/web/trainsController");
const { checkTokenWeb } = require("../../middleware/authen");
const {
  uploadFile,
  uploadFileToFirebase,
  deleteFileFromFirebase,
} = require("../../middleware/uploadFile");

//table Trains
router.get("/trains", [checkTokenWeb], async (req, res) => {
  try {
    let page = req.query.page || 1;
    const { trains, numberOfPages } = await trainsController.getAllTrains(page);
    // console.log(">>>>>>>>>>>>>>>>log", trains);
    res.render("train/trains.ejs", { trains, numberOfPages, page });
  } catch (error) {
    return error;
  }
});
//delete train by id
// localhost:3000/trains/delete/:id
router.delete("/trains/delete/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await trainsController.deleteTrain(id);
    res.json(result);
  } catch (error) {
    return error;
  }
});


// add Train
router.get("/addtrain", [checkTokenWeb], (req, res) => {
  res.render("train/addtrain.ejs");
});

// post add Train
router.post(
  "/addtrain",
  [checkTokenWeb],
  async (req, res) => {
    try {
      let { body } = req;
      // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", body);
     
   
      const { from, to, time,price,departureTime,endTime,isOneWayTicket } = body;
      const result = await trainsController.postAddTrain(
        from,
        to,
        time,
        price,
        departureTime,
        endTime,
        isOneWayTicket
      );
      console.log(">>>>>>>>>>>>>>>>log", body);
      // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", result);
      res.json(result);
      // if (result) {
      //   return res.redirect("/trains");
      // } else {
      //   return res.redirect("/addtrain");
      // }
    } catch (error) {
      return error;
    }
  }
);
// hien ra screen edit Train by id
router.get("/edittrain/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const train = await trainsController.getTrainById(id);
    // console.log(">>>>>>>>>>>>>>>>log", train);
    res.render("train/edittrain.ejs", { train });
  } catch (error) {
    return error;
  }
});
// post edit Train by id
router.post(
  "/edittrain/:id",
  [checkTokenWeb],
  async (req, res) => {
    try {
      let { body } = req;
      let { id } = req.params;

     
      const {  from,
        to,
        time,
        price,
        departureTime,
        endTime,
        isOneWayTicket } = body;
      const result = await trainsController.postEditTrain(
        id,
        from,
        to,
        time,
        price,
        departureTime,
        endTime,
        isOneWayTicket
      );

      res.json(result);
    } catch (error) {
      return error;
    }
  }
);

module.exports = router;
