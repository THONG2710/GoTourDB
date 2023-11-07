const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/img");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
      cb(null, true);
    } else {
      console.log("file not support");
        cb(null, false);
    }
  },
//   limits: {
//     fileSize: 1024 * 1024 * 2,
//   },
});
module.exports = upload;



// const multer = require('multer');

// const storage = multer.diskStorage({
    
//     destination: function (req, file, cb) {
//         cb(null, 'src/public/img/')
//     },
//     filename: function (req, file, cb) {
      
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
//     }
// });

// module.exports = multer({ storage: storage });
