const request = require("supertest");
const app = require("../../server");
const User = require("../../models/user");
const { userOneId, userOne, setupDatabase } = require("../fixtures/db");

beforeEach(setupDatabase);

test("Should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "michael johnson",
      email: "michaeljohnson@gmail.com",
      address: "Lagos Island",
      city: "Lagos",
      phone: "09078654323",
      password: "michaeljohnson123#",
    })
    .set("Accept", "application/json")
    .expect(201);

  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  expect(response.body).toMatchObject({
    user: {
      email: "michaeljohnson@gmail.com",
      name: "michael johnson",
      address: "Lagos Island",
      city: "Lagos",
      phone: "09078654323",
    },
  });
  expect(user.password).not.toBe("michaeljohnson123#");
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  expect(response.body).toHaveProperty("token");
});

test("Should not login non-existent user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: "kafayat@gmail.com",
      password: "ruxkou7890",
    })
    .expect(400);

  expect(response.body).toHaveProperty("error");
  expect(response.body).toHaveProperty("error", "Unable to login");
});
