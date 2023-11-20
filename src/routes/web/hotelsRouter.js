const express = require("express");
const router = express.Router();
const hotelsController = require("../../controllers/web/hotelsController");
const { checkTokenWeb } = require("../../middleware/authen");
const {
  uploadFile,
  uploadFileToFirebase,
  deleteFileFromFirebase,
} = require("../../middleware/uploadFile");

//table Hotels
router.get("/hotels", [checkTokenWeb], async (req, res) => {
  try {
    let page = req.query.page || 1;
    const { hotels, numberOfPages } = await hotelsController.getAllHotels(page);

    res.render("hotel/hotels.ejs", { hotels, numberOfPages, page });
  } catch (error) {
    return error;
  }
});
//delete hotel by id
// localhost:3000/hotels/delete/:id
router.delete("/hotels/delete/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await hotelsController.deleteHotel(id);
    res.json(result);
  } catch (error) {
    return error;
  }
});
//delete img Hotel tren firebase
router.delete(
  "/hotels/deleteonfirebase/:fileName",
  [checkTokenWeb],
  async (req, res) => {
    try {
      const { fileName } = req.params;
      // console.log('>>>>>>>>>>>>>>>>>>>>',folder,fileName);
      const result = await deleteFileFromFirebase("imagesHotel", fileName);
      // console.log(result);
      res.json(result);
    } catch (error) {
      return error;
    }
  }
);

// add Hotel
router.get("/addhotel", [checkTokenWeb], (req, res) => {
  res.render("hotel/addhotel.ejs");
});

// post add Hotel
router.post(
  "/addhotel",
  [checkTokenWeb, uploadFile.single("images")],
  async (req, res) => {
    try {
      let { body, file } = req;
      console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", body);
      const images = file ? await uploadFileToFirebase("imagesHotel", file) : "";// truyen vao file va ten folder tren firebase
      // console.log(">>>>>>>>>>>>>>>>logimg>>>>>>>>>>>>>>>", images);
      const { hotelName, address, star, price } = body;
      const result = await hotelsController.postAddHotel(
        hotelName,
        address,
        images,
        star,
        price
      );
      // console.log(">>>>>>>>>>>>>>>>log", body);
      // console.log(">>>>>>>>>>>>>>>>log>>>>>>>>>>>>>>>", result);
      res.json(result);
      // if (result) {
      //   return res.redirect("/hotels");
      // } else {
      //   return res.redirect("/addhotel");
      // }
    } catch (error) {
      return error;
    }
  }
);
// hien ra screen edit Hotel by id
router.get("/edithotel/:id", [checkTokenWeb], async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await hotelsController.getHotelById(id);
    // console.log(">>>>>>>>>>>>>>>>log", hotel);
    res.render("hotel/edithotel.ejs", { hotel });
  } catch (error) {
    return error;
  }
});
// post edit Hotel by id
router.post(
  "/edithotel/:id",
  [checkTokenWeb, uploadFile.single("images")],
  async (req, res) => {
    try {
      let { body, file } = req;
      let { id } = req.params;

      const images = file ? await uploadFileToFirebase("imagesHotel", file): null; // truyen vao file va ten folder tren firebase

      const { hotelName, address, star, price } = body;
      const result = await hotelsController.postEditHotel(
        id,
        hotelName,
        address,
        images,
        star,
        price
      );

      res.json(result);
    } catch (error) {
      return error;
    }
  }
);

module.exports = router;
