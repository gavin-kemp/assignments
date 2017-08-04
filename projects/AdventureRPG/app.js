var readline = require("readline-sync");

var name = readline.question("Hello adventurer, enter your name: ");

while (name === ""){
	
	name = readline.question("Enter your character's name: ")
}

//object boss

//object containing playerCLass and weapons stats

var playerClass = readline.question("Choose your class: \n Archer, Mage, Swordsman \n \n");

//if (playerclass = "x") then give option of weapon "x" or spell "x". Spell and weapon for each?