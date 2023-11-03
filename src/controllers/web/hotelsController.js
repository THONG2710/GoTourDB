const webService = require("../../services/web/hotelsService");
const hotels = async (req, res) => {
    const hotels = await webService.getAllHotels();
    res.render("hotels.ejs", { hotels });
  };

module.exports = {
    hotels,
};