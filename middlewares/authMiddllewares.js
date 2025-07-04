const jwt=require("jsonwebtoken");
const user = require("../models/user"); 
const e = require("cors");
const isAuth = async (req, res, next) => {
try{
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await user.findById(decoded.userId).select("-password");
    
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    next();
  }catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({ message: "Unauthorized", error: error.message });
  }
}
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }else {
    return res.status(403).json({ message: "Access denied, Admins privalleges" });
  }
}
module.exports = {
    isAuth,
    isAdmin
    }; 
    
