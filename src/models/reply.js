const mongoose = require("mongoose");

const replySchema = new mongoose.Schema(
  {
    replyBody: {
      type: String,
      required: [true, "Reply Body is required"],
      trim: true,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;
