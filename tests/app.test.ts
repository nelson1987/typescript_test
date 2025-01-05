import { sum } from "../src/app";

describe("Suite", () => {
  it("should throw Oops", () => {
    expect(() => sum(1, 5)).toThrow("Oops");
  });
});
