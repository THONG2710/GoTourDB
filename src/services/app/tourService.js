const { Module } = require('module');
const tourModel = require('../../models/tourModel');
const contentTourModel = require('../../models/contentTourModel');
const tourDetailModel = require('../../models/tourDetailModel');

// lấy tất cả tour
const getAllTour = async () => {
    try {
        const tours = await tourModel.find();
        if (tours.length > 0) {
            return tours;
        }
        return null
    } catch (error) {
        console.log('get all tour error: ', error);
    }
};

// lấy tất cả nội dung của một tour
const getAllContentTour = async () => {
    try {
        const contents = await contentTourModel.find();
        if (contents.length > 0) {
            return contents;
        }
        return null;
    } catch (error) {
        console.log('get all content tour error: ', error);
    }
};

// lấy tất cả chi tiết của tour
const getAllDetailTour = async () => {
    try {
        const details = await tourDetailModel.find();
        if (details.length > 0) {
            return details;
        };
        return null;
    } catch (error) {
        console.log('get all detail tour error: ' + error);
    }
};

// lấy tour theo id 
const getTourById = async (id) => {
    try {
        const tour = await tourModel.findById(id);
        if (tour) {
            return tour;
        }
        return null;
    } catch (error) {
        console.log('get tour by id error: ' + error);
    }
};

// lấy lịch trình của một tour
const getTheTourSchedule = async (idTourDetail) => {
    try {
        const contents = await contentTourModel.find({tourDetail: idTourDetail}).exec();
        if (contents.length > 0) {
            return contents;
        }
        return null;
    } catch (error) {
        console.log('get the tour schedule error: ' + error);
    }
};

module.exports = {getAllTour, getAllContentTour, getAllDetailTour, getTourById, getTheTourSchedule};