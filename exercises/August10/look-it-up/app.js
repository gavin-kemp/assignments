//https://coursework.vschool.io/look-it-up/

var readlineSync = require('readline-sync');

var dictionary = {

	example: "word here",
	another: "here is a word"

};

function newWord() {

	var userWord = readlineSync.question("Enter your new word: ");

	for (var property in dictionary) {
		//		console.log('property: ' + property);
		if (userWord.toLowerCase() === property.toLowerCase()) {

			userWord = readlineSync.question("Word is already in dictionary. Please enter another:\n")
		}
	}

	var userDefinition = readlineSync.question("Enter your word's definition: ");

	dictionary[userWord] = userDefinition;

	console.log(dictionary);

	userPrompt();
}

function userPrompt() {

	var userRequest = readlineSync.question("Would you like to enter a new word and definition? Enter 'Yes' or 'No' If you would like to search for a word enter: 'Search' \n");

	if (userRequest === "Yes") {

		newWord();
	} 
	else if (userRequest === 'Search') {

		userSearch();

	}
	return;
}


function userSearch() {

	var searchWord = readlineSync.question("What word would you like to search for?\n");

	console.log("\nWord: " + searchWord);
	console.log("Definition: " + dictionary[searchWord] + "\n");

	userPrompt();

}


userPrompt();