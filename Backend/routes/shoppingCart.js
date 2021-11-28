const shoppingRoute = require('express').Router()
const shoppingController = require('../controller/shoppingCartController');
const {authentication} = require('../middlewares/auth')

shoppingRoute.get('/', authentication, shoppingController.getCart);
shoppingRoute.post('/add', authentication, shoppingController.addCart);
shoppingRoute.get('/edit/:id', shoppingController.editPage);
shoppingRoute.put('/edit/:id', authentication, shoppingController.editCart);
shoppingRoute.delete('/delete/:id', authentication, shoppingController.deleteCart);

module.exports = shoppingRoute;
