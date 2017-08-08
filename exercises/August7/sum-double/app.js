//https://coursework.vschool.io/sum-double-warm-up/

// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.

function twoNumbers(num1, num2){
	
	if (num1 === num2){
		return (num1 + num2) * 2;
	} else {

		return num1 + num2;
	}
}

twoNumbers(1,1);