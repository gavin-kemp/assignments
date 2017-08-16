//use const when importing because you won't ever want to write over it.

const camelCase = require("../app.js");
const chai = require("chai");
const assert = chai.assert;

let test = {
		spaces: "test example",
		hyphens: "test-example",
		underscores: "test_example",
		multiple: "test_test_another"
}

describe("camel case exercise", () => {
		it("should return a string with camelCase replacing spaces", () => {
			assert.equal(camelCase(test.spaces), "testExample");
		})
		it("should return a string with camelCase replacing hyphens", () => {
			assert.equal(camelCase(test.hyphens), "testExample");
		})
		it("should return a string with camelCase replacing underscores", () => {
			assert.equal(camelCase(test.hyphens), "testExample");
		})
		it("should return a string with camelCase (multiple)", () => {
			assert.equal(camelCase(test.multiple), "testTestAnother");
		})
})