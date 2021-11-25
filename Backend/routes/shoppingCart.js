const shoppingRoute = require('express').Router()
const shoppingController = require('../controller/shoppingCartController');

shoppingRoute.get('/',shoppingController.getCart);
shoppingRoute.post('/add', shoppingController.addCart);
shoppingRoute.get('/edit/:id', shoppingController.editPage);
shoppingRoute.put('/edit/:id', shoppingController.editCart);
shoppingRoute.delete('/delete/:id', shoppingController.deleteCart);

module.exports = shoppingRoute;
