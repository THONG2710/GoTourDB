const index = (req, res) => {
    res.render("index.ejs");
  };
  const signin = (req, res) => {
    res.render('signin.ejs')
  };
  const signup = (req, res) => {
    res.render("signup.ejs");
  };
  module.exports = {
    index,
    signin,
    signup
  };
  