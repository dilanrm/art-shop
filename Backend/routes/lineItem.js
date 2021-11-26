const lineItemRoute = require('express').Router()
const lineItemController = require('../controller/lineItemController');

lineItemRoute.get('/', lineItemController.getLineItem);


module.exports = lineItemRoute;