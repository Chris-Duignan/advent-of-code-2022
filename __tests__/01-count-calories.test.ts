import { sum, fetchInput, countCalories } from "../src/01-count-calories";

describe("test sum function", () => {
  it("sums an array of number", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});

describe("test read file function", () => {
  it("returns an array of arrays", () => {
    return fetchInput("../test-inputs/01-count-calories.txt").then((data) => {
      expect(typeof data).toBe("object");
      expect(typeof data[0]).toBe("object");
    });
  });
  it("returns an array containing arrays of numbers", () => {
    return fetchInput("../test-inputs/01-count-calories.txt").then((data) => {
      expect(data).toEqual([
        [1000, 2000, 3000],
        [4000],
        [5000, 6000],
        [7000, 8000, 9000],
        [10000],
      ]);
    });
  });
});

describe("test count calories function", () => {
  it("returns max calory count from array of arrays", () => {
    return countCalories("../test-inputs/01-count-calories.txt").then(
      (data) => {
        expect(data).toBe(24000);
      }
    );
  });
});
