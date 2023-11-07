const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tourSchema = new Schema({
    _id: { type: ObjectId },
    tourName: { type: String },
    departureDay: { type: String },
    endDate: { type: String },
    numberOfDays: { type: String },
    numberOfNights: { type: String },
    numberOfReservations: { type: String },
    schedule: { type: String },
    images: { type: String },
    typeOfTour: { type: String },
    numberOfSeatsBooked: { type: String },
    departureLocation: { type: String },
    describe: { type: String },
    price: { type: String},
    favorites: { type: String },
    
});

module.exports = mongoose.model('tour', tourSchema);