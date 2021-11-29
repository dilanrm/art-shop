let multer = require("multer");
let fileUpload = require("../middlewares/upload");
const { product_image, product } = require("../models");

class productImgController {
  static async getProductImg(req, res) {
    try {
      const result = await product_image.findAll({
        include: [product],
        order: [["id", "ASC"]],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
        message: err.error,
      });
    }
  }

  static addProductImg(req, res) {
    // const {filename,filesize,filetype,primary,productId} = req.body;
    let upload = multer({
      storage: fileUpload.files.storage("prod"),
      limits: { fileSize: 20000000 },
      fileFilter: fileUpload.files.allowedFile,
    }).single("prodImg");
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        res.json({ message: err });
      } else if (err) {
        res.json({ message: err });
      } else {
        // res.status(200).json({ message: "success" });
        try {
        const { filename, size } = req.file;
        const id = +req.params.id;

          const result = await product_image.create({
          filename,
          filesize: size,
          filetype: filename.split(".").pop(),
          primary: true,
          productId: id,
        });
          res.status(200).json(result);
        } catch (err) {
          res.status(400).json(err);
        }
      }
    //   console.log(req.file.filename.split('.').pop());
    });
  }

  static async editPage(req, res) {
    const id = req.params.id;
    try {
      const result = await product_image.findByPk(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
        message: err.error,
      });
    }
  }

  static async editProductImg(req, res) {
    try {
      const id = +req.params.id;
      const { filename, filesize, filetype, primary, productId } = req.body;
      const result = await product_image.update(
        {
          filename,
          filesize,
          filetype,
          primary,
          productId,
        },
        { where: { id } }
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
        message: err.error,
      });
    }
  }

  static async deleteProductImg(req, res) {
    try {
      const id = +req.params.id;
      const result = await product_image.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({
        message: err.error,
      });
    }
  }
}

module.exports = productImgController;