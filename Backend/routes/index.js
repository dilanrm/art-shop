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
const shoppingRoute = require('./shoppingCart');
router.use('/carts', shoppingRoute);
const productImgRoute = require('./productImg');
router.use('/product-images', productImgRoute);
const lineItemRoute = require('./lineItem');
router.use('/line-items', lineItemRoute);

module.exports = router;