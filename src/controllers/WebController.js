const webService = require("../services/webService");

const index = async (req, res) => {
  const users = await webService.getAllUsers();
  console.log(users);
  res.render("index.ejs", { users });
};
const signin = (req, res) => {
  res.render("signin.ejs");
};
const signup = (req, res) => {
  res.render("signup.ejs");
};
const hotels = async (req, res) => {
  const hotels = await webService.getAllHotels();
  res.render("hotels.ejs", { hotels });
};
const tours = async(req, res) => {
    const tours = await webService.getAllTours();
  res.render("tours.ejs", { tours });
};

const postSignin = async (email, password) => {
  return await webService.signIn(email, password);
};

module.exports = {
  index,
  signin,
  signup,
  postSignin,
  hotels,
  tours
};
