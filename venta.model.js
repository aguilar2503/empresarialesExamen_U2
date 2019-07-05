var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    folio: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    },
    cantidad: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }

});