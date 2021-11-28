const lineItemRoute = require('express').Router()
const lineItemController = require('../controller/lineItemController');

lineItemRoute.get('/', lineItemController.getLineItem);
<<<<<<< HEAD

=======
lineItemRoute.post('/add', lineItemController.addLineItem);
lineItemRoute.put('/edit/:id', lineItemController.editLineItem);
lineItemRoute.delete('/delete/:id', lineItemController.deleteItemLine);
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b

module.exports = lineItemRoute;