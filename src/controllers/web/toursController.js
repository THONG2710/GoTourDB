const webService = require("../../services/web/toursService");
const tours = async (req, res) => {
    const tours = await webService.getAllTours();
    res.render("tours.ejs", { tours });
  };

module.exports = {
    tours,
};
  