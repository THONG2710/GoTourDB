const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const voucherSchema = new Schema({
    _id: { type: ObjectId },
    voucherCode: { type: String }, 
});

module.exports = mongoose.model('voucher', voucherSchema);   