const express = require("express");

const { register, login, logout, verifyUser } = require("../controllers/authControllers");
 //register user
const authRoutes = express.Router();
//login user
authRoutes.post("/register", register);
//logout user
authRoutes.post("/login", login);

authRoutes.post("/logout", logout)
// Verify user route
authRoutes.get("/verify", verifyUser);

module.exports = authRoutes;



