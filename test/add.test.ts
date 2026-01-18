import test from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/middlewares/validate.js";

test("add function should return the sum of two numbers", () => {
  const result = add(2, 3);
  const expectedResult = 5;
  assert.strictEqual(result, expectedResult);
});
