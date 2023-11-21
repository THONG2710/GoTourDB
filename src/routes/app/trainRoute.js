const express = require('express');
const router = express.Router();
const trainController = require('../../controllers/app/trainController');

// http://localhost:3000/api/train/getAllTrainTicket
router.get('/getAllTrainTicket', async (req, res) => {
    try {
        const tickets = await trainController.getAllTrainTicketController();
        if (tickets) {
            return res.status(200).json({result: false, tickets: tickets});
        }
        res.status(404).json({result: false, tickets: null});
    } catch (error) {
        return res.status(404).json({result: false, tickets: null});
    }
});

module.exports = router;