const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
// 
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use("/auth", authRoutes);

app.use("/cart", cartRoutes);

app.use("/products", productRoutes);

app.use("/orders", orderRoutes);

app.get("/",(req,res) =>{
res.status(200).json({
  success:"true",
  message:"server is running",
  

});
});
app.use("/products", productRoutes)
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
