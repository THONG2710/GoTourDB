const trainModel = require('../../models/trainModel');

// lấy tất cả vé tàu 
const getAllTrainTicket = async () => {
    try {
        const tickets = await trainModel.find();
        if (tickets.length > 0) {
            return tickets;
        }
        return null;
    } catch (error) {
        console.log('get all train tickets error: ' + error);
    }
};

module.exports = {getAllTrainTicket}