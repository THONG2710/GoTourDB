const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookTourDetailSchema = new Schema({
    _id: { type: ObjectId },
    tour: { type: String },
    numberOfReservations: { type: Number },
    departureDay: { type: String },
    row: { type: String },
    bookTour: { type: String },
});

module.exports = mongoose.model('booktourdetails', bookTourDetailSchema);