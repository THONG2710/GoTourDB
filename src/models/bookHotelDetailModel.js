const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookHotelDetailSchema = new Schema({
    _id: { type: ObjectId },
    hotel: { type: String }, 
    lengthOfStay: { type: Number },
    numberOfRooms: { type: Number },
    checkInDate: { type: Number },
    checkOutDate: { type: Number },
    room: { type: String },
    bookHotel: { type: String },
});

module.exports = mongoose.model('bookhoteldetails', bookHotelDetailSchema);   