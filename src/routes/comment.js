const express = require("express");

const di = require("../../di-container");

const auth = require("../middleware/auth");
const CommentController = require("../controllers/commentController");

const commentController = new CommentController(di);

const { createComment } = commentController;

commentRouter = new express.Router();

commentRouter.post("/products/:id/comments", auth, createComment);

module.exports = commentRouter;
