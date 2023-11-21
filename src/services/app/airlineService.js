const airlineModel = require('../../models/airlineModel');
const airlineCompanyModel = require('../../models/airlineCompanyModel'); 

// lấy tất cả vé máy bay
const getAllAirlineTickets = async () => {
    try {
        const tickets = await airlineModel.find();
        if (tickets.length > 0) {
            return tickets;
        }
        return null; 
    } catch (error) {
        console.log('get all airline tickets error: ' + error);      
    }
};

// lấy tất cả hãng hàng không
const getAirlineCompany = async () => {
    try {
        const companies = await airlineCompanyModel.find();
        if (companies.length > 0) {
            return companies;
        }
        return null; 
    } catch (error) {
        console.log('get airline company error: ' + error);
    }
};

// lấy hãng hàng không theo id
const getAirlineCompanyById = async (id) => {
    try {
        const company = await airlineCompanyModel.findById(id);
        if (company) {
            return company;
        }
        return null;
    } catch (error) {
        console.log('get airline company by id error: ' + error);
    }
}

module.exports = {getAllAirlineTickets, getAirlineCompany, getAirlineCompanyById};