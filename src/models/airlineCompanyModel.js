const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const airlineCompanySchema = new Schema({
    _id: { type: ObjectId },
    name: { type: String },
    logo : { type: String },
});

module.exports = mongoose.model('airlinecompany', airlineCompanySchema);