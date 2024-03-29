const lineItemRoute = require('express').Router()
const lineItemController = require('../controller/lineItemController');

lineItemRoute.get('/', lineItemController.getLineItem);
lineItemRoute.post('/add', lineItemController.addLineItem);
lineItemRoute.put('/edit/:id', lineItemController.editLineItem);
lineItemRoute.delete('/delete/:id', lineItemController.deleteItemLine);

module.exports = lineItemRoute;