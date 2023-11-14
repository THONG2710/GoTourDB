const { Module } = require('module');
const hotelModel = require('../../models/hotelModel');

// get all hotel
const getAllHotel = async () => {
    try {
        const hotels = await hotelModel.find();
        if (hotels.length > 0) {
            return hotels;
        }
        // return null;
    } catch (error) {
        console.log('get all hotel error: ', error);
    }
}

module.exports = {getAllHotel};