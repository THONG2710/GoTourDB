const hotelsService = require("../../services/web/hotelsService");

// get all hotels
const getAllHotels = async (page) => {
  try {
    const hotels = await hotelsService.getAllHotels(page);
    const numberOfPages = await hotelsService.getAllHotelsPage();
    return { hotels, numberOfPages };
  } catch (error) {
    return error;
  }
};
// delete hotel
const deleteHotel = async (id) => {
  try {
    return await hotelsService.deleteHotel(id);
  } catch (error) {
    return false;
  }
};
// post add hotel
const postAddHotel = async (hotelName, address, images, star, price) => {
  try {
    return await hotelsService.addHotel(
      hotelName,
      address,
      images,
      star,
      price
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};

// get hotel by id
const getHotelById = async (id) => {
  try {
    return await hotelsService.getHotelById(id);
  } catch (error) {
    return false;
  }
};
// post edit hotelm
const postEditHotel = async (
  id,
        hotelName,
        address,
        images,
        star,
        price
) => {
  try {
    return await hotelsService.postEditHotel(
      id,
        hotelName,
        address,
        images,
        star,
        price
    );
  } catch (error) {
    return false;
  }
};
module.exports = {
  getAllHotels,
  deleteHotel,
  postAddHotel,
  getHotelById,
  postEditHotel,
};
