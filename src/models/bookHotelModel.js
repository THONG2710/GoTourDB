const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookHotelSchema = new Schema({
    _id: { type: ObjectId },
    user: { type: String }, 
    date: { type: String },
    totalAmout: { type: Number },
});

module.exports = mongoose.model('bookhotels', bookHotelSchema);   