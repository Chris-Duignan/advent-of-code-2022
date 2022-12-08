import {
  convertInput,
  findDirToDelete,
  getFileSizes,
} from "../src/07-file-space";

describe("convert input", () => {
  it("returns an array when passed a string", () => {
    expect(typeof convertInput("../../test-inputs/07-file-space.txt")).toEqual(
      "object"
    );
  });
});

describe("sum fileSize", () => {
  it("returns an object with calculated fileSizes", () => {
    expect(
      getFileSizes(convertInput("../../test-inputs/07-file-space.txt"))
    ).toBe(95437);
  });
});

describe("find file to delete", () => {
  it("returns a number", () => {
    const dirSearch = findDirToDelete(
      convertInput("../../test-inputs/07-file-space.txt")
    );
    expect(dirSearch(convertInput("../../test-inputs/07-file-space.txt"))).toBe(24933642);
  });
});
