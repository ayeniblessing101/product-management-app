class UserController {
  constructor(di) {
    this.di = di;
  }

  signup = async (req, res) => {
    try {
      const response = await this.di.userRepository.create(req.body);
      res.status(201).send(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };

  login = async (req, res) => {
    try {
      const response = await this.di.userRepository.authenticate(req.body);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

module.exports = UserController;
