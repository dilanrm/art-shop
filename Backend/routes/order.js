const orderRoute = require('express').Router()
const orderController = require('../controller/orderController');

orderRoute.get('/', orderController.getOrder);
orderRoute.post('/add', orderController.addOrder)
orderRoute.get('/edit/:id', orderController.editPage);
orderRoute.put('/edit/:id', orderController.editOrder);
orderRoute.delete('/delete/:id', orderController.deleteOrder);

module.exports = orderRoute;