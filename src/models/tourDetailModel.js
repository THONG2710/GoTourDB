const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tourDetailSchema = new Schema({
    _id: { type: ObjectId },
    destinations: { type: String }, // điểm đến
    suitableObject: { type: String }, // đối tượng phù hợp
    transport: { type: String }, // phương tiện di chuyển
    content: { type: String }, 
    tourGuide: { type: String}, // hướng dẫn viên 
    hotel: { type: Array },
    describe: { type: String },
});

module.exports = mongoose.model('tourdetails', tourDetailSchema);