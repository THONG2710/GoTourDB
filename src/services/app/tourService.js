const { Module } = require('module');
const tourModel = require('../../models/tourModel');

// get all tours
const getAllTour = async () => {
    try {
        const tours = await tourModel.find();
        if (tours.length > 0) {
            return tours;
        }
        return null
    } catch (error) {
        console.log('get all tour error: ', error);
    }
}

module.exports = {getAllTour};