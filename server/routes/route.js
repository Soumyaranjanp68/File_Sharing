const router = require("express").Router();
const { uploadImage ,downloadImage } = require ('../controller/image-controller.js');
const upload = require('../middlewares/middleware.js');


router.post('/upload',upload.single("file"),uploadImage);
router.get('/file/:fileId', downloadImage);





module.exports = router;