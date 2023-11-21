const express = require("express");
const router = express.Router();
const airlineController = require('../../controllers/app/airlineController');

// http://localhost:3000/api/airline/getAllAirlineTicket
router.get('/getAllAirlineTicket', async (req, res) => {
    try {
        const tickets = await airlineController.getAllAirlineTicketController();
        if (tickets) {
            return res.status(200).json({result: true, tickets: tickets});
        }
        return res.status(404).json({result: false, tickets: null});
    } catch (error) {
        return res.status(404).json({result: false, tickets: null});
    }
});

// http://localhost:3000/api/airline/getAllAirlineCompany
router.get('/getAllAirlineCompany', async (req, res) => {
    try {
        const companies = await airlineController.getAllAirlineCompanyController();
        if (companies) {
            return res.status(200).json({result: true, companies: companies });
        }
        return res.status(404).json({result: false, companies: null });
    } catch (error) {
        return res.status(404).json({result: false, companies: null});
    }
});

// http://localhost:3000/api/airline/getAirlineCompanyById?id=
router.get('/getAirlineCompanyById', async (req, res) => {
    try {
        const {id} = req.query;
        const company = await airlineController.getAirlineCompanyByIdController(id);
        if (company) {
            return res.status(200).json({result: true, company: company });
        }
        return res.status(404).json({result: false, company: null});
    } catch (error) {
        return res.status(404).json({result: false, company: null});
    }
});

module.exports = router;