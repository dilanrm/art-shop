const productImgRoute = require('express').Router()
const productController = require('../controller/productController');
const productImgController = require('../controller/productImgController');

productImgRoute.get('/', productImgController.getProductImg);
productImgRoute.post('/add/:id', productImgController.addProductImg);
productImgRoute.get('/edit/:id', productController.editPage);
productImgRoute.put('/edit/:id', productImgController.editProductImg);
productImgRoute.delete('/delete/:id', productImgController.deleteProductImg);

module.exports = productImgRoute;