const multer = require("multer");

const uploads = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      cb(new Error("File must be an image"));
    }
    cb(undefined, true);
  },
});

module.exports = uploads;
