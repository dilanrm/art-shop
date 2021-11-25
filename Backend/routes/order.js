const orderRoute = require('express').Router()
const OrderController = require('../controller/orderController');
const orderController = require('../controller/orderController');

orderRoute.get('/', orderController.getOrder);
orderRoute.post('/add', OrderController.addOrder);
orderRoute.get('/edit/:id', orderController.editPage);
orderRoute.put('/edit/:id', orderController.editOrder);
orderRoute.delete('/delete/:id', orderController.deleteOrder);

module.exports = orderRoute;