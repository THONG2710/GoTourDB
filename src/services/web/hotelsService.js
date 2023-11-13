const hotelModel = require("../../models/hotelModel");
const { deleteFileFromFirebase } = require("../../middleware/uploadFile");
const { default: mongoose } = require("mongoose");


// lấy 10 hotel 1 trang
const getAllHotels = async (page) => {
  try {
    const hotels = await hotelModel
      .find()
      .limit(10)
      .skip((page - 1) * 10);
    return hotels;
  } catch (error) {
    return error;
  }
};
// lấy số trang
const getAllHotelsPage = async () => {
  try {
    const result = await hotelModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};
// xóa hotel
const deleteHotel = async (id) => {
  try {
    await hotelModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};
// thêm hotel
const addHotel = async (hotelName, address, images, star, price) => {
  try {
    const newHotel = {
      hotelName,
      address,
      images,
      star,
      price,
      _id: new mongoose.Types.ObjectId(),
    };
    const hotel = new hotelModel(newHotel);
    await hotel.save();
    return true;
  } catch (error) {
    console.log("add hotel error: ", error);
    return false;
  }
};
// lấy hotel theo id
const getHotelById = async (id) => {
  try {
    const hotel = await hotelModel.findById(id);
    return hotel;
  } catch (error) {
    console.log("get hotel by id error: ", error);
    return false;
  }
};
// edit hotel
const postEditHotel = async (id, hotelName, address, images, star, price) => {
  try {
    const hotel = await hotelModel.findById(id);
    if (hotel) {
      hotel.hotelName = hotelName ? hotelName : hotel.hotelName;
      hotel.address = address ? address : hotel.address;
      // xoa img cu tren firebase
      if (images && hotel?.images) {
        // xu ly link images tren firebase roi  xoa file tren firebase
        const path = new URL(hotel.images).pathname.slice(1);
        const fileName = path.split("%2F")[1];
        const result = await deleteFileFromFirebase("imagesHotel", fileName); // xoa file tren firebase
        if (result) {
          hotel.images = images;
        }
      } else {
        hotel.images = images ? images : hotel.images;
      }
      hotel.star = star ? star : hotel.star;
      hotel.price = price ? price : hotel.price;
      await hotel.save();
      return true;
    }
  } catch (error) {
    console.log("edit hotel error: ", error);
    return false;
  }
};

module.exports = {
  getAllHotels,
  getAllHotelsPage,
  deleteHotel,
  addHotel,
  getHotelById,
  postEditHotel,
};
