const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const serviceHotelSchema = new Schema({
    _id: { type: ObjectId },
    name: { type: String }, 
    image: { type: String },
    hotel: { type: String },
});

module.exports = mongoose.model('servicehotel', serviceHotelSchema);