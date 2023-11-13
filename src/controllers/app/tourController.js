const tourService = require('../../services/app/tourService');

// get all tours
const getAllTourController = async () => {
    try {
        const tours = await tourService.getAllTour();
        return tours;
    } catch (error) {
        console.log('get all tour error: ', error);
    }
}

module.exports = {getAllTourController};    