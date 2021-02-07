const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../../public/img/products/'));
    },
    filename: (req, file, callback) => {
        //console.log(file);
        // https://www.npmjs.com/package/uuidv4
        callback(null, 'product-' + Date.now() + path.extname(file.originalname));
    }
});
const uploadFile = multer({ storage });

module.exports = uploadFile;