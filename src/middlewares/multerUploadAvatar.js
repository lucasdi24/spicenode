const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/uploads/usersAvatars'))
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${req.body.userEmail}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

module.exports = multer({ storage: storage })