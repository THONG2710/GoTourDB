const webService = require("../../services/web/toursService");

// get all tours
const getAllTours = async( page) => {
  try {
    const tours = await webService.getAllTours(page);
    const numberOfPages = await webService.getAllToursPage();
    return { tours, numberOfPages };
  } catch (error) {
    return error;
  }
    
  };

  // delete tour
  const deleteTour = async (id) => {
    try {
      const result = await webService.deleteTour(id);
      return result
    } catch (error) {
      return false;
    }
   
  };
// add tour
  const addTour = async (req, res) => {
    res.render("addtour.ejs");
  };
  // post add tour
  const postAddTour = async (req, res) => {
    const { name, description, price, image } = req.body;
    const tour = await webService.addTour(name, description, price, image);
    res.redirect("/tours");
  }
module.exports = {
    getAllTours,
    addTour,
    postAddTour,
    deleteTour,
};
  