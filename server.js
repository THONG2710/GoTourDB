var MongoClient = require("mongodb").MongoClient;
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");

// import các model
require("./src/models/UserModel");

// dành cho api
const userApi = require("./Server/Route/API/UserApi");
// dành cho cpnel

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "iloveyou", // bí mật
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// mongodb+srv://5506nguyenthong:ijEM80PiRB14o3p0@cluster0.nejvfjm.mongodb.net/GoTour?retryWrites=true&w=majority
// password: ijEM80PiRB14o3p0
var url =
  "mongodb+srv://thong:123@cluster0.nejvfjm.mongodb.net/GoTour?retryWrites=true&w=majority";
// kết nối database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Đã kết nối với database"))
  .catch((err) => console.log(">>>>>>>>> DB Error: ", err));

// const server = app.listen(0, () => {
//   const port = server.address().port;
//   console.log('server listening on port ' + port);
// })

// dành cho api
app.use("/api/user", userApi); // http://localhost:3000/api/user
// dành cho cpnel

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
