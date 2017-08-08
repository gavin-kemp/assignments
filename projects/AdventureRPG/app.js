var readline = require("readline-sync");

var name = readline.question("Hello adventurer, enter your name: ");

while (name === "") {

	name = readline.question("Enter your character's name: ")
}

//3 objects for enemies

//3 objects for classes

var playerClass = readline.question("Choose your class: \n Archer, Mage, Swordsman \n \n");

//a function to walk forward

console.log("Press 'w' to walk forward.");

function playerWalk(){
	
	randomEnemy = console.log(Math.floor((Math.random() * 3) + 1));
	
	if (randomEnemy === 1){
		
		console.log("You have encountered an enemy!");
		
	}
	
}

