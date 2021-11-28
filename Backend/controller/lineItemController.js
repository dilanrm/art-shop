<<<<<<< HEAD
const {line_item, product, shopping_cart} = require('../models');

class lineItemController{
=======
const { line_item , product, shopping_cart} = require('../models');

class lineItemController {
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b
    static async getLineItem(req,res) {
        try {
            const result = await line_item.findAll({
                include: [product,shopping_cart],
<<<<<<< HEAD
                order: [["id", "ASC"]],
            });
=======
                order: [["id", "ASC"]]
            })
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err
            })
        }
    }
<<<<<<< HEAD
=======

    static async addLineItem(req,res) {
        const {qty,status,productId,shoppingCartId} = req.body;
        try {
            const result = await line_item.create({
                qty,status,productId,shoppingCartId 
            });
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async editLineItem(req,res) {
        try {
            const id = +req.params.id;
            const {qty,status,productId,shoppingCartId} = req.body;
            const result = await line_item.update({
                qty,status,productId,shoppingCartId
            }, {where: {id} });
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async deleteItemLine(req,res) {
        try {
            const id = +req.params.id;
            const result = await line_item.destroy({
                where: {id}
            });
            res.status(200).json(result)
        }catch(err) {
            res.status.json({
                message: err.error
            })
        }
    }
>>>>>>> a16eb5a708b17ed20c6405aa2a4f595d502e197b
}

module.exports = lineItemController;