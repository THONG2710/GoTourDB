const express = require("express");
const router = express.Router();
const airlinesController = require("../../controllers/web/airlinesController");
const { checkTokenWeb } = require("../../middleware/authen");
const {
  uploadFile,
  uploadFileToFirebase,
  deleteFileFromFirebase,
} = require("../../middleware/uploadFile");

//table Airlines
router.get("/airlines", [checkTokenWeb], async (req, res) => {
  try {
    let page = req.query.page || 1;
    const { airlines, numberOfPages } = await airlinesController.getAllAirlines(
      page
    );
    // console.log(">>>>>>>>>>>>>>>>log", airlines);
    res.render("airline/airlines.ejs", { airlines, numberOfPages, page });
  } catch (error) {
    return error;
  }
});
//delete airline by id
// localhost:3000/airlines/delete/:id
router.delete("/airlines/delete/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await airlinesController.deleteAirline(id);
    res.json(result);
  } catch (error) {
    return error;
  }
});

// add Airline
router.get("/addairline", [checkTokenWeb], (req, res) => {
  res.render("airline/addairline.ejs");
});

// post add Airline
router.post(
  "/addairline",
  [checkTokenWeb],
  async (req, res) => {
    try {
      let { body } = req;
      // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", req.body);
      const {
        from,
        to,
        time,
        airlineCompany,
        price,
        departureTime,
        endTime,
        isOneWayTicket,
      } = body;

      const result = await airlinesController.postAddAirline(
        from,
        to,
        time,
        airlineCompany,
        price,
        departureTime,
        endTime,
        isOneWayTicket
      );
      // console.log(">>>>>>>>>>>>>>>>log", body);
      // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", result);
      res.json(result);
      // if (result) {
      //   return res.redirect("/airlines");
      // } else {
      //   return res.redirect("/addairline");
      // }
    } catch (error) {
      return error;
    }
  }
);
// hien ra screen edit Airline by id
router.get("/editairline/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const airline = await airlinesController.getAirlineById(id);
    // console.log(">>>>>>>>>>>>>>>>log", airline);
    res.render("airline/editairline.ejs", { airline });
  } catch (error) {
    return error;
  }
});
// post edit Airline by id
router.post("/editairline/:id", [checkTokenWeb], async (req, res) => {
  try {
    let { body } = req;
    let { id } = req.params;

    const {
      from,
      to,
      time,
      airlineCompany,
      price,
      departureTime,
      endTime,
      isOneWayTicket,
    } = body;
    const result = await airlinesController.postEditAirline(
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

    res.json(result);
  } catch (error) {
    return error;
  }
});

module.exports = router;
