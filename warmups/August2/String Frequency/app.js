//https://coursework.vschool.io/letter-frequency/

// Separate characters in the string
// Count how many of each character there are
// Push re

var phrase = 'slimy smelly solution';
var frequency = {};



function stringFrequency(str) {

	for (var i = 0; i < str.length; i++) {

		frequency[str[i]] = frequency[str[i]] + 1 || 1;

	}

	console.log(frequency);

}

stringFrequency(phrase);

function noDuplicateString(object) {

	var stringNoDuplicates = "";

	for (property in object) {

		stringNoDuplicates += property;
	}
	console.log(stringNoDuplicates);
}

noDuplicateString(frequency);

function sortObject(object) {

	var newArray = [];

	for (property in object) {

		newArray.push(property + ":" + object[property]);

	}
	console.log(newArray);
}

sortObject(frequency);