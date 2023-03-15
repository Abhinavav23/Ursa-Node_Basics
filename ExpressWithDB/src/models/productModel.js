const {Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 10,
        minLength: [4, 'please pass a valid name for product'],
        trim: true,
        uppercase: true,
        // lowercase: true
    },
    category: {
        type: String,
        enum: ["mobile", "clothing", "appliances"]
    },
    price: {
        type: Number,
        required: true,
        cast: false,
        min: 10000,
        max: 70000
    },
    inStock: Boolean
}, {versionKey: false})

const Product = model('product', productSchema);

module.exports = Product