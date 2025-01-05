import { somar, sum } from "../src/app";

describe("Suite", () => {
  it("should pass", () => {
    expect(sum(1,1)).toBe(2);
  });
  it("should pass too", () => {
    expect(somar(1,1)).toBe(2);
  });
});
