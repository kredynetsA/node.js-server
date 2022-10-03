const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    title: String,
    desc: String,
    img: String,
    price: String,
    rating: String,
    category: String,
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', ProductSchema);