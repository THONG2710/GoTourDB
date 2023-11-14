const express = require("express");
const router = express.Router();
const getAllHotels = require('../../controllers/app/hotelController');

// http://localhost:3000/api/hotel/getAllHotels
router.get('/getAllHotels', async (req, res, next) => {
    try {
        const hotels = await getAllHotels.getAllHotelController();
        return res.status(200).json({ result: true, hotels: hotels });
    } catch (error) {
        return res.status(500).json({result: false, hotels: null});
    }
});

module.exports = router;