const {line_item, product, shopping_cart} = require('../models');

class lineItemController{
    static getLineItem(req,res) {
        line_item.findAll()
        .then(data => {
            res.json(data)
        })
       .catch(err => {
           res.json(err)
       })
    }
}

module.exports = lineItemController;