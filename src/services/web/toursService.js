const tourModel = require("../../models/tourModel");

// lấy 10 tour 1 trang
const getAllTours = async (page) => {
  try {
    const tours = await tourModel
      .find()
      .limit(10)
      .skip((page - 1) * 10);
    return tours;
  } catch (error) {
    return error;
  }
};
// lấy số trang
const getAllToursPage = async () => {
  try {
    const result = await tourModel.countDocuments();
    const numberOfPages = Math.ceil(result / 10);
    return numberOfPages;
  } catch (error) {
    return error;
  }
};
// xóa tour
const deleteTour = async (id) => {
  try {
    await tourModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    return false;
  }
};
// thêm tour
const addTour = async (name, description, price, image) => {
  try {
    return await tourModel.create({ name, description, price, image });
  } catch (error) {
    return false;
  }
};

const basePaginator = (list = [], currentPage = 1) => {
  const total = list.length;
  const limit = 10;

  currentPage = (currentPage - 1) * (limit + 1);

  return {
    current_page: currentPage,
    total: total,
    next_page: currentPage + 1,
  };
};

module.exports = { getAllTours, addTour, deleteTour, getAllToursPage };
