import { describe, test, expect } from "@jest/globals";

import supertest from "supertest";

import { app } from "../app.js";

//const request = supertest("http://localhost:3000");

describe("Suite: App", () => {
  test("Deve responder na raiz", async () => {
    const res = await supertest(app).get("/");

    return expect(res.status).toBe(200);
  });
});
