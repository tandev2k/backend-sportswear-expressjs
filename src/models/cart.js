const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    cartItems: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
        },
        quantity: { type: Number, default: 1 }
    }]
}, { timestamps: true });


module.exports = mongoose.model('Cart', cartSchema);