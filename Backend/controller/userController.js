const { user } = require('../models')
const {decryptPwd} = require('../helpers/bcrypt')
const {tokenGenerator, tokenVerify} = require('../helpers/jwt');

class userController{
    static async getUser(req, res) {
        try {
            let users = await user.findAll({
                order: [["id", "ASC"]]
            })
            res.status(200).json(users)
        }catch(e) {
            res.status(500).json(e)
        }
    }

    static async register(req, res){
        try {
            const {name,email,password,birthdate,gender,avatar,type} = req.body;
            let result = await user.create({
                name,email,password,birthdate,gender,avatar,type
            })
            res.status(200).json(result);
        }catch(e){
            res.status(500).json(e)
        }
    }

    static async login(req, res){
        try {
            const {email,password} = req.body;
            let result = await user.findOne({
                where: {
                    email
                }
            })
            if(result){
                if(decryptPwd(password,result.password)){
                    let token = tokenGenerator(result)
                    // let decoded = tokenVerify(token)
                    res.status(200).json({
                        access_token: token

                    })
                }else{
                    res.status(404).json({
                        message: "Password is not correct"
                    })
                }
            }else {
                res.status(400).json({
                    message: "User not found"
                })
            }
            
        }catch(e){
            res.status(500).json(e)
        }
    }

    static async editPage(req,res){
        const id = req.params.id;
        try {
            const data = await user.findByPk(id);
            res.status(200).json(data);
        }catch(e){
            res.status(400).json(e);
        }
    }

    static async editUser(req,res){
        try {
            const id = +req.params.id;
            const {name,email,password,birthdate,gender,avatar,type} = req.body;
            const data = await user.update(
                {name,email,password,birthdate,gender,avatar,type},
                {where: {id} }
            );
            res.status(200).json(data);
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }

    static async deleteUser(req,res){
        try {
            const id = +req.params.id;
            const data = await user.destroy({where: {id} });
            res.status(200).json({msg: `Success delete id ${id}`});
        }catch(e){
            res.status(400).json({msg: e.error});
        }
    }
}

module.exports = userController;