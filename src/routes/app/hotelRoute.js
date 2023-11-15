const express = require("express");
const router = express.Router();
const hotelController = require('../../controllers/app/hotelController');

// http://localhost:3000/api/hotel/getAllHotels
router.get('/getAllHotels', async (req, res, next) => {
    try {
        const hotels = await hotelController.getAllHotelController();
        return res.status(200).json({ result: true, hotels: hotels });
    } catch (error) {
        return res.status(500).json({result: false, hotels: null});
    }
});

// http://localhost:3000/api/hotel/getAllServiceHotel
router.get('/getAllServiceHotel', async (req, res, next) => {
    try {
        const services = await hotelController.getAllServiceHotelController();
        return res.status(200).json({ result: true, services: services });
    } catch (error) {
        return res.status(500).json({result: false, services: null});
    }
});

module.exports = router;