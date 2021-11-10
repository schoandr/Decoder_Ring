const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("caesar", () => {
    it("should return an encode a string when given another string as an input, ignoring any character in input string that isn't a-z", () => {
        const expected = "bc de"
        const actual = caesar("ab cd", 1, true)
        expect(actual).to.eql(expected)
    })
    it("should return a decoded string when given another string as an input, and encode = false", () => {
        const expected = "yzab"
        const actual = caesar("zabc", 1, false)
        expect(actual).to.eql(expected)
    })
    it("should return false if shift is lower than -25, greater than 25, or equal to 0", () => {
        const expected = false
        const actual = caesar("washington", 30, true)
        expect(actual).to.eql(expected)
    })
    it("should ignore capital letters", () => {
        const expected = caesar("WASHINGTON", 3, true)
        const actual = caesar("washington", 3, true)
        expect(actual).to.eql(expected)
    })
    it("should wrap around if around to the front of the alphabet if shifted past 'z' to the right and past 'a' to the left", () => {
        const expected = "a"
        const actual = caesar("z", 1, true)
        expect(actual).to.eql(expected)
    })
})