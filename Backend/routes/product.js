const productRoute = require('express').Router()
const productController = require('../controller/productController');

productRoute.get('/', productController.getProduct);
productRoute.post('/add', productController.addProduct)
productRoute.get('/edit/:id', productController.editPage);
productRoute.put('/edit/:id', productController.editProduct);
productRoute.delete('/delete/:id', productController.deleteProduct);

module.exports = productRoute;