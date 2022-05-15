// Write your tests for task 2 in this file. Plan out what you need to import/require.

import request from "supertest";
import app from "../app.js";

test("Sends a get request and response with the structure {success: true, payload: users}.", async function () {
  await request(app)
    .get("/users")
    .expect("Content-Type", /json/)
    .expect(200)
    .expect(function (res) {
      const expected = { success: true, payload: expect.any(Array) };
      const actual = res.body;

      expect(actual).toStrictEqual(expected);

      actual.payload.forEach((item) => {
        expect(item).toStrictEqual({
          id: expect.any(Number),
          username: expect.any(String),
        });
      });
    });
});
