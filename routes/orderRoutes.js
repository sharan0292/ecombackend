const express = require("express");
const { isAuth } = require("../middlewares/authMiddllewares");
const { createRazorpayOrder, verifyPayment, razorpayWebhook } = require("../controllers/orderController");

const orderRoutes = express.Router();

// Create Razorpay order (requires user to be logged in)
orderRoutes.post("/create-razorpay-order", isAuth, createRazorpayOrder);

// Verify payment (requires user to be logged in)
orderRoutes.post("/verify-payment", isAuth, verifyPayment);

// Razorpay webhook (no auth, called by Razorpay)
orderRoutes.post("/webhook", razorpayWebhook);

module.exports = orderRoutes;