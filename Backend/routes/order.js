const orderRoute = require('express').Router()
const OrderController = require('../controller/orderController');
const orderController = require('../controller/orderController');
const {authentication} = require('../middlewares/auth');

<<<<<<< HEAD
orderRoute.get('/', orderController.getOrder);
orderRoute.post('/add', OrderController.addOrder);
=======
orderRoute.get('/', authentication, orderController.getOrder);
orderRoute.post('/add', authentication, orderController.addOrder);
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b
orderRoute.get('/edit/:id', orderController.editPage);
orderRoute.put('/edit/:id', authentication, orderController.editOrder);
orderRoute.delete('/delete/:id', authentication, orderController.deleteOrder);

module.exports = orderRoute;