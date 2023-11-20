const { Module } = require('module');
const hotelModel = require('../../models/hotelModel');
const serviceHotelModel = require('../../models/serviceHotelModel');

// get all hotel
const getAllHotel = async () => {
    try {
        const hotels = await hotelModel.find();
        if (hotels.length > 0) {
            console.log("get all hotel successfully !!!");
            return hotels;
        }
        return null;
    } catch (error) {
        console.log('get all hotel error: ', error);
    }
};

// get all services hotel
const getAllServiceHotel = async () => {
    try {
        const services = await serviceHotelModel.find();
        if (services.length > 0) {
            console.log('get all service hotel successfully !!');
            return services;
        }
        return null;
    } catch (error) {
        console.log('get all service hotel error: ', error);
    }
}

module.exports = {getAllHotel, getAllServiceHotel};