import 'dotenv/config'

const base = "http://localhost:3000";

import { jest, expect, test, describe } from "@jest/globals";
import supertest from "supertest";

import { app } from "../app.js";

describe("Api E2E Test Suite", () => {

  test("GET / - should return an array", async () => {
    const response = await supertest(app).get("/");

    const data = JSON.parse(response.text)
    console.log(data);

    expect(data).toBeInstanceOf(Object)
  });

  test.todo("POST / - should save an item and return ok");

});
