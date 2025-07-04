const cartModel = require("../models/cart");
const Product = require("../models/product");
const addToCart = async (req, res,next) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user._id;
const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        let cart = await Cart.findOne({ userID: userId });
        if (!cart) {
            cart = new Cart({ 
                userId,
                products: [
                    {
                        productId: product._id,
                        quantity: quantity || 1,
                    },
                ],
                totalPrice: product.price*(quantity||1),
        }

            });
        }else{
            const prodIndex = cart.products.findIndex(
                (item)=>item.productId.toString()===
                productId
            );
            if(prodIndex >-1){
                cart.products[prodIndex].quantity+=
                quantity || 1;
            }else{
                cart.products.push({productId,quantity:quantity||1});
            }
            cart.totalPrice=await calculateTotalPrice(cart.products);
        }
        cart.totalPrice = await calculateTotalPrice
        (cart.products);
    }
    await cart.save();
    res.status(200).json({success:true,cart});
    catch(error){
        console.error("Error adding to cart:",error);
        res.status(500).json({
            message:"Error adding to cart",
        });
    }
            
        };
        