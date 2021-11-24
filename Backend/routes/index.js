const router = require('express').Router();

router.get('/', (req,res) => {
    res.status(200).json({
        message: "Home Page"
    })
})

const userRoutes = require('./user');
router.use('/users', userRoutes);
const productRoute = require('./product');
router.use('/products', productRoute);
const orderRoute = require('./order');
router.use('/orders', orderRoute);

module.exports = router;