const shoppingRoute = require('express').Router()
const shoppingController = require('../controller/shoppingCartController');
<<<<<<< HEAD

shoppingRoute.get('/',shoppingController.getCart);
shoppingRoute.post('/add', shoppingController.addCart);
shoppingRoute.get('/edit/:id', shoppingController.editPage);
shoppingRoute.put('/edit/:id', shoppingController.editCart);
shoppingRoute.delete('/delete/:id', shoppingController.deleteCart);
=======
const {authentication} = require('../middlewares/auth')

shoppingRoute.get('/', authentication, shoppingController.getCart);
shoppingRoute.post('/add', authentication, shoppingController.addCart);
shoppingRoute.get('/edit/:id', shoppingController.editPage);
shoppingRoute.put('/edit/:id', authentication, shoppingController.editCart);
shoppingRoute.delete('/delete/:id', authentication, shoppingController.deleteCart);
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b

module.exports = shoppingRoute;
