const express = require("express");
const tourController = require('../../controllers/app/tourController');
const router = express.Router();

// http://localhost:3000/api/tour/getAllTours
router.get('/getAllTours', async (req, res, next) => {
    try {
        const tours = await tourController.getAllTourController();
        console.log(tours);
        return res.status(200).json({ result: true, tours: tours });
    } catch (error) {
        return res.status(500).json({result: false, tours: null});
    }
});

module.exports = router;
