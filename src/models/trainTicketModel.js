const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const trainTicketSchema = new Schema({
    _id: { type: ObjectId },
    from: { type: String }, 
    to: { type: String },
    time: { type: Number },
    price: { type: Number },
    departureTime: { type: Number },
    endTime: { type: Number },
    isOneWayTicket: { type: Boolean },
});

module.exports = mongoose.model('traintickets', trainTicketSchema);   