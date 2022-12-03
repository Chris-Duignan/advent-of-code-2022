import { convertInput, convertInputTask2, reduceRucksacks } from "../src/03-rucksack-reorganisation"
import { fetchInput } from "../src/utils/fetch-input";

describe("convert input", () => {
  it("returns an array", () => {
    expect(
      Array.isArray(
        convertInput(
          fetchInput("../../test-inputs/03-rucksack-reorganisation.txt")
        )
      )
    ).toBe(true);
  });
  it("returns an array of number arrays", () => {
    const result = convertInput(fetchInput("../../test-inputs/03-rucksack-reorganisation.txt"))
    expect(result).toHaveLength(6);
  })
});

describe("reduce rucksacks", () => {
  it("returns a number", () => {
    expect(typeof reduceRucksacks(convertInput(fetchInput("../../test-inputs/03-rucksack-reorganisation.txt")))).toBe("number")
  })
})

describe("convert input 2", () => {
  it("returns an array of string arrays", () => {
    expect(typeof convertInputTask2(fetchInput("../../test-inputs/03-rucksack-reorganisation.txt"))).toBe("object")
  })
})