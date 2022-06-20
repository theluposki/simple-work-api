import { describe, test, expect } from "@jest/globals";

import supertest from "supertest";

const request = supertest("http://localhost:3000");

describe("Suite: Server", () => {
  test("Deve responder na porta 3000", async () => {
    const res = await request.get("/");
    return expect(res.status).toBe(200);
  });
});
