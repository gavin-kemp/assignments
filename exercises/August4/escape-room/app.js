//https://coursework.vschool.io/escape-room/

var readline = require("readline-sync");
var action = "";
var hasKey = false;

function startgame() {
	action = readline.question("\n\nYou wake alone in a room. In front of you is a door, and to your right there is a hole in the wall. What do you do? \n\nOpen the door. \nLook inside the hole. \n\n");

}
//Display options: Look for key(new message that appears after trying to open the door), look in the hole in the wall, put hand in hole in the wall.
//If user ever chooses "look in the hole in the wall" it will display console message saying: "It's too dark to see inside."
//If they put their hand in they die.
//After trying to open the door a new option will appear: "Look for key". If you select this you will find key. Then if you try to open the door it will ask: "Use key to open door?" It will display messages: yes or no. If yes you win the game, if no it will display other messages.

startgame();

if (action === "Open the door") {
	openDoor(hasKey);
}

if (action === "Look inside the hole") {
	youDied();
}

if (action === "Look for key") {
	findKey(hasKey);
	action = readline.question("What do you do? \n\nOpen the door. \nReach inside the hole. \n\n")

	if (action = "Open the door") {

		openDoor(hasKey);
	} else if (action = "Look inside the hole") {

		youDied();
	}
}


function youDied() {
	console.log("\n\nYou look inside the hole and now you're dead.\n\n-Game Over-\n\n");
}


function openDoor(hasKey) {

	if (hasKey === true) {
		console.log("\n\nThe door opens.\n\n-You Win-\n\n")
	} else {
		action = readline.question("\nYou try to open the door but it wont' budge. What do you do?\n\nLook for key.\nReach inside the hole.\n\n")
	}
}


function findKey(hasKey) {

	console.log("\nYou have found the key.\n\n");
	hasKey = true;

}