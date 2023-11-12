const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookTourSchema = new Schema({
    _id: { type: ObjectId },
    date: { type: String },
    user: { type: String },
    totalAmout: { type: Number },
});

module.exports = mongoose.model('booktours', bookTourSchema);