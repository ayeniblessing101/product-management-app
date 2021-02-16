const UserController = require("../../controllers/userController");

describe("User Controller", () => {
  it("signup users", async () => {
    const di = {
      userRepository() {
        return;
      },
    };
    const userController = new UserController(di);
  });
});
