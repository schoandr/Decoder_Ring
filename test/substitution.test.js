const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");
const alphabet ="xoyqmcgrukswaflnthdjpzibev"
const input = "thinkful"

describe("substitution", () => {
    it("should return any character that isn't a lowercase letter ", () => {
        const actual = substitution(input, alphabet, encode = true)
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces throughout the encoding process", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev", true)
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        const actual = substitution("THINKFUL", alphabet, true)
        const expected = "jrufscpw"
        expect(actual).to.equal(expected)
    })
    it("should return false if the alphabet parameter/argument is less than 26 characters", () => {
        const actual = substitution(input, "zyxwvutsrqponmlkjihgfed", true)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if any character in the alphabet parameter/argument isn't unique", () => {
        const actual = substitution(input, "aabbccddeeffeegghhiijjkkll", true)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should decode the message is encode is false", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
})