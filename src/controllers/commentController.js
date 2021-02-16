class CommentController {
  constructor(di) {
    this.di = di;
  }

  createComment = async (req, res) => {
    try {
      const product = await this.di.productRepository.findById(req.params.id);

      if (!product) {
        return res.status(404).send({ error: "Product not found." });
      }

      const data = {
        commentBody: req.body.commentBody,
        userId: req.user._id,
        productId: req.params.id,
      };
      const comment = await this.di.commentRepository.create(data);
      res
        .status(201)
        .send({ message: "Comment created successfully", comment });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

module.exports = CommentController;
