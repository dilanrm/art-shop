const userRoute = require('express').Router()
const userController = require('../controller/userController');

userRoute.get('/', userController.getUser);
userRoute.post('/login', userController.login);
userRoute.post('/register', userController.register);
userRoute.get('/edit/:id', userController.editPage);
userRoute.put('/edit/:id', userController.editUser);
userRoute.delete('/delete/:id', userController.deleteUser);

module.exports = userRoute;