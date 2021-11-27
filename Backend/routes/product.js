const productRoute = require('express').Router()
const productController = require('../controller/productController');
const {authentication} = require('../middlewares/auth');

productRoute.get('/', authentication, productController.getProduct);
productRoute.post('/add', authentication, productController.addProduct)
productRoute.get('/edit/:id', productController.editPage);
productRoute.put('/edit/:id', authentication, productController.editProduct);
productRoute.delete('/delete/:id', authentication, productController.deleteProduct);

module.exports = productRoute;