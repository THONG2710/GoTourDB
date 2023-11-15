const express = require("express");
const router = express.Router();
const tourController = require('../../controllers/app/tourController');

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

// http://localhost:3000/api/tour/getAllContentTour
router.get('/getAllContentTour', async (req, res, next) => {
    try {
        const contents = await tourController.getAllContentTourController();
        return res.status(200).json({ result: true, contents: contents });
    } catch (error) {
        return res.status(500).json({result: false, contents: null});
    }
});

// http://localhost:3000/api/tour/getAllTourDetail
router.get('/getAllTourDetail', async (req, res, next) => {
    try {
        const details = await tourController.getAllDetailTourController();
        return res.status(200).json({result: false, details: details});
    } catch (error) {
        return res.status(500).json({result: false, details: null});
    }
});

// http://localhost:3000/api/tour/getTourById?id=
router.get('/getTourById', async (req, res, next) => {
    try {
        const {id} = req.query;
        const tour = await tourController.getTourByIdController(id);
        if (tour) {
            return res.status(200).json({result: true, tour: tour});
        }
        return res.status(500).json({result: false, tour: null});
    } catch (error) {
        return res.status(500).json({result: false, tour: null});
    }
});

// http://localhost:3000/api/tour/getSchedule?id=
router.get('/getSchedule', async (req, res, next) => {
    try {
        const {id} = req.query;
        const schedule = await tourController.getTheTourScheduleController(id);
        if (schedule) {
            return res.status(200).json({result: true, schedule: schedule});
        }
        return res.status(500).json({result: false, schedule: schedule});
    } catch (error) {
        return res.status(500).json({result: false, schedule: schedule});
    }
});

module.exports = router;
