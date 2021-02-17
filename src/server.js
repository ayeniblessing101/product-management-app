require("dotenv").config();

const express = require("express");

const firebase = require("firebase");

require("./db/mongoose");

require("./cloudinaryConfig");

const firebaseConfig = require("./db/firebaseConfig");
firebase.initializeApp(firebaseConfig);

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const commentRouter = require("./routes/comment");
const replyRouter = require("./routes/reply");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(commentRouter);
app.use(replyRouter);

module.exports = app;
