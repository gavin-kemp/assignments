//https://coursework.vschool.io/exercise-functions/



//Write a function that accepts two numbers as parameters, and returns the sum.

function mySum (a, b) {
	return a + b;
}

mySum(300,200);



//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

var largestNumber = function(a, b, c) {
	
	if ((a > b) && (a > c)){
		return "Largest number is: " + a;
	}
	else if ((b > a) && (b > c)){
		return "Largest number is: " + b;
	}
	else if ((c > a) && (c > b)){
		return "Largest number is: " + c;
	}
	
}

largestNumber(1,2,3);



//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function isOddNumber(number){
	
	if (number % 2 === 0){
		
		return "Even.";
		
	}
	else{
		return "Odd.";
	}
	
}

isOddNumber(323);



//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

var stringFunction = function(string){
	
	if (string.length <= 20){
		return string.concat(string);
	}
	
	else {
	  
	 var length = string.length / 2;
		
		return string.slice(0,length);
	
}

}

stringFunction("iiiiiiiiiiiiiiiiiiiii");

function fibonacciSequence (number){
  
	  var sequence = [0,1];
	  
	for (var i = 2; i < number; i++){
	  sequence.push(sequence[i-1] + sequence[i-2]);
	}
	console.log(sequence);
  var sum = 0;
  for (var i = 0; i < sequence.length; i++){
    
    sum += sequence[i];
    
  }
  return sum;
}

console.log(fibonacciSequence(10));