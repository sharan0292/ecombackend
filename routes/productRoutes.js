const express = require("express");
const{
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");
const validateProduct=require("../utils/validateProduct");
const productRoutes = express.Router();

productRoutes.post("/",validateProduct, createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProductById);
productRoutes.put("/:id",validateProduct, updateProduct);
productRoutes.delete("/:id", deleteProduct);

module.exports = productRoutes;



