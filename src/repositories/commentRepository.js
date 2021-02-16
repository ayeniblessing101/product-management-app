class CommentRepository {
  constructor(model) {
    this.model = model;
  }

  async create(requestBody) {
    const Comment = this.model;
    try {
      const comment = new Comment(requestBody);
      return await comment.save();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    const Comment = this.model;
    try {
      return await Comment.findById(id).populate("userId");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CommentRepository;
