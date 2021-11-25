const {line_item, product} = require('../models');

class lineItemController{
    static async getLineItem(req,res) {
        try {
            const result = await line_item.findAll({
                include: [product],
                order: [["id", "ASC"]],
            });
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }
}

module.exports = lineItemController;