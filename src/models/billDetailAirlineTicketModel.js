const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const billDetailAirlineTicketSchema = new Schema({
    _id: { type: ObjectId },
    airlineTicket: { type: String }, 
    numberOfTickets: { type: Number },
    seat: { type: String },
    bill: { type: String },
});

module.exports = mongoose.model('billdetailairlinetickets', billDetailAirlineTicketSchema);   