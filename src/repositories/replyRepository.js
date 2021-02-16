class ReplyRepository {
  constructor(model) {
    this.model = model;
  }

  async create(requestBody) {
    const Reply = this.model;
    try {
      const reply = new Reply(requestBody);
      return await reply.save();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    const Reply = this.model;
    try {
      return await Reply.findById(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ReplyRepository;
