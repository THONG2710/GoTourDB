const MongoClient = require("mongodb").MongoClient;
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// dành cho api
const appRoute = require("./src/routes/app/indexRouter");
const userRoute = require("./src/routes/app/usersRouter");
const tourRoute = require("./src/routes/app/tourRouter");
// dành cho cpnel
const {
  signInRouter,
  usersRouter,
  hotelsRouter,
  toursRouter,

} = require("./src/routes/web/indexRouter");
const { addtour } = require("./src/controllers/web/toursController");
var app = express();

// view engine setup
app.set("views", path.join("./src", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join("./src", "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const secret = process.env.SECRET ?? "secret"; 
app.use(
  session({
    secret: secret, // bí mật
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
 
);

app.use(cors());

var url =
  "mongodb+srv://linh:linh@cluster0.nejvfjm.mongodb.net/GoTour?retryWrites=true&w=majority";
// kết nối database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Đã kết nối với database"))
  .catch((err) => console.log(">>>>>>>>> DB Error: ", err));

// dành cho api
app.use("/api/user", userRoute); // http://localhost:3000/user  
app.use("/api/tour", tourRoute); // 
// dành cho cpnel
app.use(
  signInRouter, // http://localhost:3000/signin
  usersRouter, // http://localhost:3000/
  hotelsRouter, // http://localhost:3000/hotels
  toursRouter, // http://localhost:3000/tours

);

app.listen(port, hostname, async () => {
  console.log(`Server is running on port ${port} ${hostname}`);
});
