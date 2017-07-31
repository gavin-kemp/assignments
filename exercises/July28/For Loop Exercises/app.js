//https://coursework.vschool.io/exercise-loops/



//Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.

function stringFunction (string) {
	
	for (var i = 0; i < string.length; i++){
		
		var splitstring = string.split("");
		
		console.log(splitstring[i]);
	}
	
}

stringFunction("string");



//Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

function stringCharacter(string, character) {

	var stringArray = string.split("");

	for (var i = 0; i < string.length; i++) {

		if (stringArray[i] === character) {

			console.log(character + " is at index: " + i);
		} else {
			console.log(character + " was not found in " + string);
		}
	}
}

stringCharacter("string", "n");

//Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.

function findNumber(numberArray) {
	
	for(var i = 0; i < numberArray.length; i++){
	  
	  if (numberArray[i] === 42){
	    
	    return "42 has been found at: " + i;
	  }
	  else{
	    
	    console.log("42 has not been found.");
	  }
	  
	}
	
}

var numArray = [7, 4, 2, 100,42, 78, 2412, 23, 42];

findNumber(numArray);

//Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.max()

//Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.max()

var numArray = [7, 1024, 242, 23, 53, 5, 60, 9, 90, 157];

function smallestNumber(numberArray) {

    var lowestSoFar = numberArray[0];

	for (var i = 0; i < numberArray.length; i++) {

    if (numberArray[i] < lowestSoFar){
      
      lowestSoFar = numberArray[i];
      
    }


  }
  
  console.log(lowestSoFar);
}

smallestNumber(numArray);

