const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const billDetailTrainTicketSchema = new Schema({
    _id: { type: ObjectId },
    trainTicket: { type: String }, 
    numberOfTickets: { type: Number },
    seat: { type: String },
    bill: { type: String },
});

module.exports = mongoose.model('billdetailtraintickets', billDetailTrainTicketSchema);   