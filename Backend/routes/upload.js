const uploadRoute = require('express').Router()
const UploadController = require('../controller/UploadController');
const {authentication} = require('../middlewares/auth')

uploadRoute.post('/user/:id', authentication, UploadController.userImg);
uploadRoute.post('/prod/:id', authentication, UploadController.prodImg);

module.exports = uploadRoute;
