const express = require("express");

const di = require("../../di-container");

const auth = require("../middleware/auth");
const ReplyController = require("../controllers/replyController");

const replyController = new ReplyController(di);

const { createReply } = replyController;

replyRouter = new express.Router();

replyRouter.post("/comments/:id/replies", auth, createReply);

module.exports = replyRouter;
