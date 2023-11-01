const express = require("express");
const router = express.Router();
const {index,signin,signup} = require("../../controllers/webController");

// router.Method("/path", callbackFunction);

router.get("/", index); 

router.get("/signin", signin);


router.get("/signup", signup) ;

  


module.exports = router;
