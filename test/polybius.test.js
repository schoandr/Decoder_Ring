// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

const input = "thinkful"

describe("polybius", () => {
    it("should return a string", () => {
        const actual = polybius(input)
        expect(actual).to.be.a("string")
    })
    it("should return false if the string to be decoded is odd", () => {
        const actual = polybius("111", false)
        const expected = false
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces when encoding the input", () => {
        const actual = polybius("Hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        const actual = polybius("THINKFUL")
        const expected = polybius("thinkful")
        expect(actual).to.equal(expected)
    })
    it("should encode both 'i' & 'j' to '42'", () => {
        const actual = polybius("ij")
        const expected = "4242"
    })
    it("should decode '42' to '(i/j)'", () => {
        const actual = polybius("42", false)
        const expected = "(i/j)"
    })
})