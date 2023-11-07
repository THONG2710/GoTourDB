const express = require("express");
const router = express.Router();
const {
  getAllTours,
  addTour,
  deleteTour,
} = require("../../controllers/web/toursController");
//table Tours
router.get("/tours", async (req, res) => {
  try {
    let page = req.query.page || 1; 
    const {tours,numberOfPages} = await getAllTours(page);
   
 
    res.render("tours.ejs", { tours, numberOfPages,page});
   

  } catch (error) {
    return error;
  }
});

//delete Tour by id
// localhost:3000/tours/delete/:id
router.post("/tours/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteTour(id);
    // console.log(result);
  } catch (error) {
    return error;
  }
});

// add Tour
router.get("/addtour", addTour);

module.exports = router;
