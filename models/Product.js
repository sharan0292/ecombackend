const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    rating:{
        rate:{
            type:Number,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
    },
})
const Product = mongoose.model("Product", productSchema);
module.exports = Product;