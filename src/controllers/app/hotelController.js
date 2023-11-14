const hotelService = require('../../services/app/hotelService');

// get all hotel 
const getAllHotelController = async () => {
    try {
        const hotels = await hotelService.getAllHotel();
        console.log(hotels);
        return hotels;
    } catch (error) {
        console.log('get all hotel controller error: ' + error);
    }
}

module.exports = {getAllHotelController};