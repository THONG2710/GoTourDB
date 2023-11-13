const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const billAirlineTicketSchema = new Schema({
    _id: { type: ObjectId },
    user: { type: String }, 
    date: { type: Number },
    totalAmout: { type: Number },
});

module.exports = mongoose.model('billairlinetickets', billAirlineTicketSchema);   