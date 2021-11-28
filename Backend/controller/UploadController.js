let multer = require("multer");
let fileUpload = require("../middlewares/upload");
const { user, product } = require("../models");

class UploadController {
  static userImg(req, res) {
    //   const { id } = req.userData;
    const id = +req.params.id;

    let upload = multer({
      storage: fileUpload.files.storage("user"),
      limits: { fileSize: 20000000 },
      fileFilter: fileUpload.files.allowedFile,
    }).single("avatar");
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        res.json({ message: err });
      } else if (err) {
        res.json({ message: err });
      } else {
        try {
          const result = await user.update(
            {
              avatar: `http://localhost:3000/static/files/${req.file.fileName}`,
            },
            { where: { id } }
          );

          res.status(200).json(result);
        } catch (err) {
          res.status(500).json(err);
        }
        // res
        //   .status(200)
        //   .json({ message: "success", destination: req.file.filename });
      }
    });
    console.log(req.userData);
  }

  static prodImg(req, res) {
    
  }
}

module.exports = UploadController;
