const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postSchema = new Schema({
    _id: { type: ObjectId },
    user: { type: String }, 
    tour: { type: String }, 
    time: { type: String },
    caption: { type: String },
    images: { type: String },
    favorites: { type: Number },
});

module.exports = mongoose.model('posts', postSchema);   