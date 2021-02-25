import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  })

  it("Should be albe to create a new user", async () => {
    const response = await request(app).post("/users")
    .send({
      name: "Edson",
      email: "edson@email.com"
    });

    expect(response.status).toBe(201);
  })
})