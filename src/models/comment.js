const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    commentBody: {
      type: String,
      required: [true, "Comment Body is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
