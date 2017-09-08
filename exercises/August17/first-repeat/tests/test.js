const chai = require('chai');
const assert = chai.assert;
const firstRepeat = require('../app.js');

let test = {
    firstTest: "abbbbc",
    secondTest: "aaaabcd",
    thirdTest: "aabbcddeefg",
    allRpts: "aaaaa"
}

describe("return the first letter that isn't repeated", () => {
    it("should return a as the first non repeated", () => {
        assert.equal(firstRepeat(test.firstTest), "a")
    })
    it("should return b as the first non repeated", () => {
        assert.equal(firstRepeat(test.secondTest), "b")
    })
    it("should return b as the first non repeat", () => {
        assert.equal(firstRepeat(test.thirdTest), "b")
    })
    it("should throw an error", () => {
        assert.throw(() => {firstRepeat(test.allRpts)}, "contains all repeats")
    })
})
