//https://coursework.vschool.io/matching-words/

const repeatWords = require("../app.js");
const chai = require("chai");
const assert = chai.assert;


let test = {
	
	noRepeats: "no repeats here",
	allRepeats: "test test test test",
	mix: "this this is an an test example test"
}


describe("fill empty array with duplicates of words", () => {
		it("should return three words", () => {
			assert.deepEqual(repeatWords(test.noRepeats), [])
		})
		it("should return one word", () => {
			assert.deepEqual(repeatWords(test.allRepeats), [])
		})
		it("should return 5 words", () => {
			assert.deepEqual(repeatWords(test.mix), [])
		})
	
	
});