import { convertInput, countScore, countScoreTwo, fetchInput } from "../src/02-rock-paper-scissors";

describe("test fetch input", () => {
  it("returns a string", () => {
    expect(fetchInput("../test-inputs/02-rock-paper-scissors.txt")).toEqual(
      "A Y\nB X\nC Z"
    );
  });
});

describe("Convert Input", () => {
  it("returns an array of number arrays", () => {
    expect(
      convertInput(fetchInput("../test-inputs/02-rock-paper-scissors.txt"))
    ).toEqual([
      [0, 1],
      [1, 0],
      [2, 2],
    ]);
  });
});

describe("count score", () => {
    it("returns a number", () => {
        expect(typeof countScore(convertInput(fetchInput("../test-inputs/02-rock-paper-scissors.txt")))).toBe("number")
    })
})

describe("count score two", () => {
  it("returns a number", () => {
      expect(typeof countScoreTwo(convertInput(fetchInput("../test-inputs/02-rock-paper-scissors.txt")))).toBe("number")
      expect(countScoreTwo(convertInput(fetchInput("../test-inputs/02-rock-paper-scissors.txt")))).toBe(12)
  })
})
