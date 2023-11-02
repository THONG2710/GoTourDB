const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const hotelSchema = new Schema({
    _id: { type: ObjectId },
    hotelName: { type: String },
    address: { type: String },
    star: { type: String },
    images: { type: String },
    price: { type: String},
    favorites: { type: String },
    
});

module.exports = mongoose.model('hotel', hotelSchema);