const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const typeOfTourSchema = new Schema({
    _id: { type: ObjectId },
    typeName: { type: String }, 
    note: { type: String }, 
});

module.exports = mongoose.model('typeoftours', typeOfTourSchema);