import { forceThrow } from "./index";

test("forceThrow", () => {
  expect(() => forceThrow()).toThrowError();
});
