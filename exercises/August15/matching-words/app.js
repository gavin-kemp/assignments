var paragraph = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas.";

let repeatWords = function (str) {
	let graph = {};
	let output = [];
	let arr = str.split(" ");

	for (let i = 0; i < arr.length; i++) {
		if (graph[arr[i]]) {
			graph[arr[i]] = arr[i];
		}
	} else if (graph[arr[i]]) {
		output.push(arr[i]);
	}

	return output;
}


repeatWords(paragraph);


module.exports = repeatWords;

//loop through array
//when it comes to a space compare current word to the last