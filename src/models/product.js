const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Product location is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Product Image is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
  {
    toObject: {
      virtuals: true,
    },
  }
);

productSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "productId",
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
