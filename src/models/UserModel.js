const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: { type: ObjectId },
    userName: { type: String },
    password: { type: String },
    fullname: { type: String },
    gender: { type: Number },
    email: { type: String },
    address: { type: String },
    cccd: { type: String},
    phoneNumer: { type: String },
    score: { type: Number },
});

module.exports = mongoose.model('User', userSchema);