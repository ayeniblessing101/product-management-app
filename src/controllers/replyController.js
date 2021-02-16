class ReplyController {
  constructor(di) {
    this.di = di;
  }

  createReply = async (req, res) => {
    try {
      const comment = await this.di.commentRepository.findById(req.params.id);

      if (!comment) {
        return res.status(404).send({ error: "Comment not found." });
      }

      const data = {
        replyBody: req.body.replyBody,
        commentId: req.params.id,
        userId: req.user._id,
      };

      const smsData = {
        to: comment.userId.phone,
        message: req.body.replyBody,
      };

      await this.di.sendSms(smsData);
      await this.di.replyRepository.create(data);

      res.status(201).send({ message: "Reply created successfully" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

module.exports = ReplyController;
