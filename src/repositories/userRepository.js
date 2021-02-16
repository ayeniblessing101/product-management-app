class UserRepository {
  constructor(model) {
    this.model = model;
  }

  async create(requestBody) {
    const User = this.model;
    const user = new User(requestBody);
    try {
      const response = {};
      const result = await user.save();
      const token = await user.generateAuthToken();

      response["user"] = result;
      response["token"] = token;

      return response;
    } catch (error) {
      throw error;
    }
  }

  async authenticate(requestBody) {
    const User = this.model;
    try {
      const response = {};

      const user = await User.findByCredentials(
        requestBody.email,
        requestBody.password
      );

      const token = await user.generateAuthToken();

      response["token"] = token;

      return response;
    } catch (error) {
      throw error;
    }
  }

  async findUserByEmail(email) {
    try {
      const user = await this.model.User.findOne({ email });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
