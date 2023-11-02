const MongoClient = require("mongodb").MongoClient;
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// dành cho api
const userApi = require("./src/routes/api/userApi");
// dành cho cpnel
const webApi = require("./src/routes/web/webApi");
var app = express();

// view engine setup
app.set("views", path.join("./src", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join("./src", "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT ?? 8888;
const hostname = process.env.HOSTNAME ?? "localhost";

app.use(
  session({
    secret: "iloveyou", // bí mật
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

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
app.use("/api", userApi); // http://localhost:3000/api/user

// dành cho cpnel
app.use("/", webApi); // http://localhost:3000/

app.listen(port, hostname, async () => {
  console.log(`Server is running on port ${port}`);
});
