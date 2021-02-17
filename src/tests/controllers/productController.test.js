const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../../server");
const { userOneId, userOne } = require("../fixtures/db");

let jwtToken;
let id;

beforeEach(setupDatabase);

beforeAll((done) => {
  request(app)
    .post("/users/login")
    .send({ email: userOne.email, password: userOne.password })
    .end((err, res) => {
      if (res) {
        jwtToken = res.body.token;
      }
      done();
    });
});

test("Should throw an error using bad requests", async () => {
  await request(app)
    .post("/products")
    .set("Authorization", `Bearer ${jwtToken}`)
    .send({ description: "Pray for Nigeria" })
    .expect(400);
});

test("Should get all products", async () => {
  const response = await request(app)
    .get("/products")
    .set("Authorization", `Bearer ${jwtToken}`)

    .expect(200);
  expect(response.body.length).toEqual(3);
});
