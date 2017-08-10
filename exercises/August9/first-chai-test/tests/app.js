var assert = require('chai').assert
var testFunction = require('../js/function')

describe('Class', function(){
		it('Should be boolean', function() {
			
			var isTrue = true;
			var b = 200;
			
			
			assert.isBoolean(b, 'Is not a boolean');
			assert.isBoolean(isTrue, 'Is not a boolean');
		});
		it('Should be string', function(){
			var newString = "String";
			var notString = false;
			
			
				assert.isString(newString, 'not a string');
//			assert.isString(notString, 'not a string');
		});
		it('Should be a number', function(){
			var a = 10;
			
			
			assert.isNumber(testFunction(a), 'is not a number')
		});
	
});