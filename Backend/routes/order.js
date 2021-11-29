const orderRoute = require('express').Router()
const orderController = require('../controller/orderController');
const {authentication} = require('../middlewares/auth');

orderRoute.get('/', authentication, orderController.getOrder);
orderRoute.post('/add', authentication, orderController.addOrder);
orderRoute.get('/edit/:id', orderController.editPage);
orderRoute.put('/edit/:id', authentication, orderController.editOrder);
orderRoute.delete('/delete/:id', authentication, orderController.deleteOrder);

module.exports = orderRoute;