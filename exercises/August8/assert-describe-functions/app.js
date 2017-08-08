var original = "1000";

var originalCheck = original;

var assert = function(actual, expected){
	if(actual != expected){
		
		throw {type: "Fail", details: {actual: actual, expected: expected}}
	} else {
		console.log("Success");
	}
};

var describe = function(message, testFunc){
	
	try {
		testFunc();
	} catch(err) {
		console.error("Failure", err);
	}
}

describe("Test group", function() {  
	assert(400, originalCheck);
  assert("Se string", "Some string");
  assert(1, 1);
});