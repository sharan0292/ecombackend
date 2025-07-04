const express = require("express");

const { register, login, logout } = require("../controllers/authControllers");
 //register user
const authRoutes = express.Router();
//login user
authRoutes.post("/register", register);
//logout user
authRoutes.post("/login", login);

authRoutes.post("/logout", logout)


module.exports = authRoutes;



