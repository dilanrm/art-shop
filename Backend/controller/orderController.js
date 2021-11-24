const {order,  user} = require('../models');

class orderController {
    static async getOrder(req,res){
        try {
            const data = await order.findAll({
                include: [user],
                order: [["id", "ASC"]],
            });
            res.status(200).json(data);
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }

    static async addOrder(req,res){
        const {order_name,order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_status,order_userId} = req.body;
        try {
            const data = await order.create({
                order_name,order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_status,order_userId
            });
            res.status(200).json(data);
        }catch(e){
            res.json({msg: e.error});
        }
    }

    static async editPage(req,res){
        const id = req.params.id;
        try {
            const data = await order.findByPk(id);
            res.status(200).json(data)
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }

    static async editOrder(req,res){
        try {
            const id = +req.params.id;
            const {order_name,order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_status,order_userId} = req.body;
            const data = await order.update(
                {order_name,order_created_on,order_subtotal,order_discount,order_tax,order_total_due,order_total_qty,order_payt_trx_number,order_status,order_userId},
                {where: {id} }
            );
            res.status(200).json(data);
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }

    static async deleteOrder(req,res){
        try {
            const id = +req.params.id;
            const data = await order.destroy({where: {id} });
            res.status(200).json({msg: `Succes delete id ${id}`});
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }
}

module.exports = orderController;