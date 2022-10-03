const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

//create
router.post('/add-new-product', async (req, res) => {
    const {_id, title, desc, price, category, date, img, rating } = req.body;
    const newProduct = {};
    if (_id) newProduct._id = _id
    if (title) newProduct.title = title;
    if (desc) newProduct.desc = desc;
    if (price) newProduct.price = price;
    if (category) newProduct.category = category;
    if (date) newProduct.date = date;
    if (img) newProduct.img = img;
    if (rating) newProduct.rating = rating;
    try {
        let product = await Product.findOne({_id: _id});
        if (product) {
            //update
            product = await Product.findByIdAndUpdate(
                {_id : req.body._id},
                {$set: newProduct},
                {new: true}
                )
            return res.json(newProduct)
        }
        // create
        product = new Product(newProduct);
        await product.save();
        res.json(product);
    } catch (err) {
        console.log(err);
    }
})

//read
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.log(err);
    }
})
// get product by id
router.get('/:product_id', async (req, res) => {
    try {
        const product = await Product.findOne({product: req.params.product_id});
        if (!product) return res.status(400).json({msg: 'This product does not exist'})
        res.json(product);
    } catch (err) {
        console.log(err);
    }
})

//delete
router.delete('/:product_id', async (req, res) => {
    try {
        const product = await Product.findOneAndRemove({product: req.params.product_id});
        res.json({msg: 'Product deleted'});
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;