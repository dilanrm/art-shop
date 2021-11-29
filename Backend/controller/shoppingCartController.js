const {shopping_cart, user} = require('../models');

class shoppingController{
    static async getCart(req,res) {
        try {
            let {id} = req.userData
            const result = await shopping_cart.findAll({
                where: {
                    userId: id
                },
                include: [user],
                order: [["id", "ASC"]]
            });
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async addCart(req,res) {
        const {createdOn,status} = req.body;
        try {
            let {id} = req.userData
            const result = await shopping_cart.create({
                createdOn,status,userId: id
            });
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async editPage(req,res){
        const id = req.params.id;
        try {
            const result = await shopping_cart.findByPk(id);
            res.status(200).json(result);
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async editCart(req,res) {
        try {
            const id = +req.params.id;
            const {createdOn,status,userId} = req.body;
            const result = await shopping_cart.update({
                createdOn,status,userId
            }, {where: {id} });
            res.status(200).json(result);
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async deleteCart(req,res) {
        try {
            const id = +req.params.id;
            const result = await shopping_cart.destroy({where: {id} });
            res.status(400).json(result);
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }
}

module.exports = shoppingController;