const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const trainSchema = new Schema({
    _id: { type: ObjectId },
    from: { type: String },
    to: { type: String },
    time: { type: String },
    price: { type: String },
    departureTime: { type: String },
    endTime: { type: String},
    isOneWayTicket: { type: String },
    
});

module.exports = mongoose.model('train', trainSchema);