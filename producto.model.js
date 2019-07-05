var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true  
    },
    minimo:{
        type: Number,
        required: true  
    },
    maximo:{
        type: Number,
        required: true  
    },
    cost: {
        type: Number,
        required: true
    }
});