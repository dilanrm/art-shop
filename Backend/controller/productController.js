const {product,  user} = require('../models');

class productController {
    static async getProduct(req,res){
        try {
            const data = await product.findAll({
                include: [user],
                order: [["id", "ASC"]],
            });
            res.status(200).json(data);
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }

    static async addProduct(req,res){
        const {name,description,price,stock,category,sold,rating,view,userId} = req.body;
        try {
            const data = await product.create({
                name,description,price,stock,category,sold,rating,view,userId
            });
            res.status(200).json({msg: "Success add"});
        }catch(e){
            res.json({msg: e.error});
        }
    }

    static async editPage(req,res){
        const id = req.params.id;
        try {
            const data = await product.findByPk(id);
            res.status(200).json(data)
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }

    static async editProduct(req,res){
        try {
            const id = +req.params.id;
            const {name,description,price,stock,category,sold,rating,view,userId} = req.body;
            const data = await product.update(
                {name,description,price,stock,category,sold,rating,view,userId},
                {where: {id} }
            );
            res.status(200).json({msg: "Edit Success"});
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }

    static async deleteProduct(req,res){
        try {
            const id = +req.params.id;
            const data = await product.destroy({where: {id} });
            res.status(200).json({msg: `Succes delete id ${id}`});
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }
}

module.exports = productController;