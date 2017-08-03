var readline = require("readline-sync");

var name = readline.question("Enter your character's name: ");

while (name === ""){
	
	name = readline.question("Enter your character's name: ")
}

var 