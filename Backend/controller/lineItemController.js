const { line_item , product, shopping_cart} = require('../models');

class lineItemController {
    static async getLineItem(req,res) {
        try {
            const result = await line_item.findAll({
                include: [product,shopping_cart],
                order: [["id", "ASC"]]
            })
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err
            })
        }
    }

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
}

module.exports = lineItemController;