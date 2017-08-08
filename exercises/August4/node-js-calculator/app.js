//https://coursework.vschool.io/javascript-calculator/

var readline = require("readline-sync")

var userQuit = "";

while (userQuit !== "quit") {

	var numberOne = readline.question("\n\nPlease enter a number:\n");

	var numberTwo = readline.question("\nPlease enter a second number: \n");

	var operator = readline.question("\nEnter '+', '-', '*', or '/'\n\n");

	var parsedOne = Number(numberOne);

	var parsedTwo = Number(numberTwo);


	if (operator === '+') {
		addFunction(parsedOne, parsedTwo);
	} else if (operator === '-') {
		subtractFunction(parsedOne, parsedTwo);
	} else if (operator === '*') {
		mulitplyFunction(parsedOne, parsedTwo);
	} else if (operator === '/') {
		divideFunction(parsedOne, parsedTwo);
	}


	function addFunction(num1, num2) {

		console.log("\nYour number is: " + (num1 + num2));

	}


	function subtractFunction(num1, num2) {

		console.log("\nYour number is: " + (num1 - num2));

	}


	function mulitplyFunction(num1, num2) {

		console.log("\nYour number is: " + (num1 * num2));

	}


	function divideFunction(num1, num2) {

		console.log("\nYour number is: " + (num1 / num2));

	}
	
	var userQuit = readline.question("Enter 'quit' to quit. Or 'continue' to continue.\n")

}