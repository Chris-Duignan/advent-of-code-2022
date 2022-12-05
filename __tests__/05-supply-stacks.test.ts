import { fetchInput } from "../src/utils/fetch-input";
import { convertInput, partOne, stackSort} from "../src/05-supply-stacks"

describe("convert input", () => {
    it("returns an object", () => {
        expect(typeof convertInput(fetchInput("../../test-inputs/05-supply-stacks.txt"))).toBe("object")
    })
})

describe("stack sort", () => {
    it("returns the correct string", () => {
        expect(partOne(convertInput(fetchInput("../../test-inputs/05-supply-stacks.txt")))).toBe("CMZ")
    })
})