const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const newsSchema = new Schema({
    _id: { type: ObjectId },
    title: { type: String }, 
    content: { type: String }, 
    images: { type: String },
    linkAds: { type: String },
});

module.exports = mongoose.model('news', newsSchema);   