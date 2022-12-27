const {product_image, product} = require('../models');

class productImgController{
    static async getProductImg(req,res) {
        try {
            const result = await product_image.findAll({
                include: [product],
                order: [["id", "ASC"]],
            });
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async addProductImg(req,res){
        const {filename,filesize,filetype,primary,productId} = req.body;
        try {
            const result = await product_image.create({
                filename,filesize,filetype,primary,productId 
            });
            res.status(200).json(result)
        }catch(err) {
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async editPage(req,res) {
        const id = req.params.id;
        try {
            const result = await product_image.findByPk(id);
            res.status(200).json(result)
        }catch(err){
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async editProductImg(req,res){
        try {
            const id = +req.params.id;
            const {filename,filesize,filetype,primary,productId} = req.body;
            const result = await product_image.update({
                filename,filesize,filetype,primary,productId
            }, {where: {id} });
            res.status(200).json(result);
        }catch(err){
            res.status(400).json({
                message: err.error
            })
        }
    }

    static async deleteProductImg(req,res){
        try {
            const id = +req.params.id;
            const result = await product_image.destroy({where: {id} });
            res.status(200).json(result)
        }catch(err){
            res.status(400).json({
                message: err.error
            })
        }
    }
}

module.exports = productImgController;