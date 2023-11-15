const tourService = require('../../services/app/tourService');

// get all tours
const getAllTourController = async () => {
    try {
        const tours = await tourService.getAllTour();
        return tours;
    } catch (error) {
        console.log('get all tour error: ', error);
    }
};

// get all content tour 
const getAllContentTourController = async () => {
    try {
        const contents = await tourService.getAllContentTour();
        return contents;
    } catch (error) {
        console.log('get all content tour error: ', error);
    }
};

// get all detail tour
const getAllDetailTourController = async () => {
    try {
        const details = await tourService.getAllDetailTour();
        return details;
    } catch (error) {
        console.log('get all detail tour controller error: ', error);
    }
};

// get tour by id
const getTourByIdController = async (id) => {
    try {
        const tour = await tourService.getTourById(id);
        console.log(tour);
        return tour;
    } catch (error) {
        console.log('get tour by id controller error: ', error);
    }
};  

// get schedule
const getTheTourScheduleController = async (idTourDetail) => {
    try {
        const schedule = await tourService.getTheTourSchedule(idTourDetail);
        return schedule;
    } catch (error) {
        console.log('get the tour schedule controller error: ' + error);
    }
}

module.exports = {getAllTourController, getAllContentTourController, getAllDetailTourController, getTourByIdController, getTheTourScheduleController};    