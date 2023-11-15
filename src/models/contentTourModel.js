const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const contentTourSchema = new Schema({
    _id: { type: ObjectId },
    title: { type: String }, 
    content: { type: String },
    tourDetail: { type: String },
});

module.exports = mongoose.model('contenttour', contentTourSchema);