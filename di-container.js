const firebase = require("firebase");
const cloudinary = require("cloudinary").v2;

const User = require("./src/models/user");
const Product = require("./src/models/product");
const Comment = require("./src/models/comment");
const Reply = require("./src/models/reply");

const UserRepository = require("./src/repositories/userRepository");
const ProductRepository = require("./src/repositories/productRepository");
const CommentRepository = require("./src/repositories/commentRepository");
const ReplyRepository = require("./src/repositories/replyRepository");

const sendSMS = require("./src/utils/sendSMS");
const decodeBuffer = require("./src/utils/decodeBufferFile");
const uploadFile = require("./src/utils/fileUpload");

const dataUri = require("./src/middleware/decodeBuffer");

const firebaseDb = firebase.firestore();

const credentials = {
  apiKey: process.env.SMS_API_KEY,
  username: process.env.SMS_USERNAME,
};

const Africastalking = require("africastalking")(credentials);

const di = {
  get userRepository() {
    return new UserRepository(User);
  },
  get productRepository() {
    return new ProductRepository(Product, firebaseDb);
  },
  get commentRepository() {
    return new CommentRepository(Comment);
  },
  get replyRepository() {
    return new ReplyRepository(Reply);
  },
  sendSms: (data) => {
    return sendSMS(Africastalking, data);
  },
  decodeABufferFile: (request) => {
    return decodeBuffer(dataUri, request);
  },
  uploadFileToCloud: (file) => {
    return uploadFile(cloudinary.uploader, file);
  },
};

module.exports = di;
