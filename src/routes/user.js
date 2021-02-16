const express = require("express");

const di = require("../../di-container");

const UserController = require("../controllers/userController");

const userController = new UserController(di);

const userRouter = new express.Router();

const { signup, login } = userController;

userRouter.post("/users", signup);
userRouter.post("/users/login", login);

module.exports = userRouter;
