//https://coursework.vschool.io/03-string-manipulation/

var readline = require("readline-sync")

var userInputOne = readline.question("Enter your name:\n");

var userInputTwo = readline.question("Enter a word:\n");

console.log("Uppercase: " + userInputOne.toUpperCase());

console.log("String length: " + userInputOne.length);

var stringConcat = userInputOne.concat(userInputTwo);

console.log("Strings concatenated: " + stringConcat);

var longMessage = readline.question("Enter a message longer than 20 characters:\n");

while (longMessage.length < 20){
	
	longMessage = readline.question("Enter a message longer than 20 characters:\n");
	
}

var longMessageSplit = longMessage[]

for (var i = 0; i < longMessage.length; i++){
	
		console.log()
	
}