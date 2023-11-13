const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const feedbackSchema = new Schema({
    _id: { type: ObjectId },
    content: { type: String }, 
    post: { type: String },
    user: { type: String },
});

module.exports = mongoose.model('feedback', feedbackSchema);   