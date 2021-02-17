const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Product = require("../../models/product");
const Comment = require("../../models/comment");
const Reply = require("../../models/reply");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "mike",
  email: "mike@gmail.com",
  password: "56what!!!",
  address: "Thomas bode Avenue",
  city: "lagos",
  phone: "08064476683",
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: "jess",
  email: "jess@gmail.com",
  password: "88communityroad",
  address: "Yaba, Community Estate",
  city: "Akoka",
  phone: "08067869590",
};

const productOneId = new mongoose.Types.ObjectId();
const productOne = {
  _id: productOneId,
  name: "Study Golang Book",
  location: "lagos",
  image:
    "http://res.cloudinary.com/dgn8f5ffu/image/upload/v1613489410/gcixskzcgjuknomtutt6.jpg",
  userId: userOneId,
};

const productTwoId = new mongoose.Types.ObjectId();
const productTwo = {
  _id: productTwoId,
  name: "Second Product",
  location: "lagos",
  image:
    "http://res.cloudinary.com/dgn8f5ffu/image/upload/v1613489333/l356cyqvyyukvgtjyh7p.jpg",
  userId: userOneId,
};

const productThreeId = new mongoose.Types.ObjectId();
const productThree = {
  _id: productThreeId,
  name: "Third Product",
  location: "Ogudu",
  image:
    "http://res.cloudinary.com/dgn8f5ffu/image/upload/v1613489410/gcixskzcgjuknomtutt6.jpg",
  userId: userTwoId,
};

const commentOneId = new mongoose.Types.ObjectId();
const commentOne = {
  _id: commentOneId,
  commentBody: "Beautiful",
  productId: productTwoId,
  userId: userOneId,
};

const commentTwoId = new mongoose.Types.ObjectId();
const commentTwo = {
  _id: commentTwoId,
  commentBody: "I love it",
  productId: productOneId,
  userId: userOneId,
};

const replyOne = {
  _id: new mongoose.Types.ObjectId(),
  replyBody: "I concur",
  commentId: commentOneId,
};

const setupDatabase = async () => {
  await User.deleteMany();
  await Product.deleteMany();
  await Comment.deleteMany();
  await Reply.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Product(productOne).save();
  await new Product(productTwo).save();
  await new Product(productThree).save();
  await new Comment(commentOne).save();
  await new Comment(commentTwo).save();
  await new Reply(replyOne).save();
};

module.exports = {
  userOneId,
  userOne,
  userTwo,
  productOne,
  productTwo,
  productThree,
  commentOne,
  commentTwo,
  replyOne,
  setupDatabase,
};
