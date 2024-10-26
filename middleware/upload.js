const path = require("node:path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.env.STATIC_FOLDER, "images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

function fileFilter(req, file, cb) {
  //   file.mimetype 'image/png' 'image/gif' 'image/jpeg'

  const MIMETYPE_REG_EXP = /^image\/(gif|png|jpeg)$/;

  cb(null, MIMETYPE_REG_EXP.test(file.mimetype));
}

const upload = multer({ storage, fileFilter });

module.exports.uploadUserPhoto = upload.single("userPhoto");
