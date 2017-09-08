const chai = require('chai');
const assert = chai.assert;
const checkIP = require('../app.js');

let test = {
    testOne: "172.16.254.1",
    testTwo: "194.0.98.278.425",
    testThree: "255.-1.13.23",
    testFour: "152.198.123.10",
    testFive: "255.255.255"
}

describe("Should return Valid IP Address or Invalid IP Address", () => {
    it("Should return Valid IP Address", () => {
        assert.equal(checkIP(test.testOne), "Valid IP Address")
    })
    it("Should return Invalid IP Address", () => {
        assert.equal(checkIP(test.testTwo), "Invalid IP Address")
    })
    it("Should return Invalid IP Address", () => {
        assert.equal(checkIP(test.testThree), "Invalid IP Address")
    })
    it("Should return Valid IP Address", () => {
        assert.equal(checkIP(test.testFour), "Valid IP Address")
    })
    it("Should return Invalid IP Address", () => {
        assert.equal(checkIP(test.testFive), "Invalid IP Address")
    })
})