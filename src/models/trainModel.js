const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const trainSchema = new Schema({
    _id: { type: ObjectId },
    from: { type: String },
    to: { type: String },
    price: { type: Number },
    departureTime: { type: String },
    endTime: { type: String},
    time: { type: String },
    isOneWayTicket: { type: Boolean },
});

module.exports = mongoose.model('train', trainSchema);