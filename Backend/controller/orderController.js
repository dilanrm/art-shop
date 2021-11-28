const {order, user} = require('../models');

class OrderController{
    static async getOrder(req,res) {
        try {
            let {id} = req.userData
            const result = await order.findAll({
                where: {
                    userId: id
                },
                include: [user],
                order: [["id", "ASC"]]
            })
            res.status(200).json(result)
        }catch(e) {
            res.status(400).json({
                message: e.error
            })
        }
    }

    static async addOrder(req,res){
        const {name,createdOn,subtotal,discount,tax,total,total_qty,payt_trx_number,email,status} = req.body;
        try {
            const {id} = req.userData
            const result = await order.create({
                name,
                createdOn,
                subtotal,
                discount,
                tax,
                total,
                total_qty,
                payt_trx_number,
                email,
                status,
                userId: id
            });
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({
                message: err.error
            })
        } 
    }

    static async editPage(req,res) {
        try {
            const id = req.params.id;
            const result = await order.findByPk(id);
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async editOrder(req,res) {
        try {
            const id = +req.params.id;
            const {name,createdOn,subtotal,discount,tax,total,total_qty,payt_trx_number,email,status,userId} = req.body;
            const result = await order.update({
                name,createdOn,subtotal,discount,tax,total,total_qty,payt_trx_number,email,status,userId
            }, {where: {id} });
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async deleteOrder(req,res) {
        try {
            const id = +req.params.id;
            const result = await order.destroy({where: {id} });
            res.status(200).json({message: `Success deleted id ${id}`})

        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }
}

module.exports = OrderController;