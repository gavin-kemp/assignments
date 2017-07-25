var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();

console.log(vegetables);

fruit.shift();

console.log(fruit);

var indexOfOrange = fruit.indexOf("orange");

console.log("Index of orange is: " + fruit.indexOf("orange"));

fruit.push(indexOfOrange);

console.log(fruit);

var vegArrLength = vegetables.length;

console.log("Vegetable length: " + vegetables.length);

vegetables.push(vegArrLength);

console.log(vegetables);

var food = fruit.concat(vegetables);

console.log(food);

food.splice(4, 2);

console.log("Spliced Array: " + food);

console.log("Reversed Array: " + food.reverse());

var reversedArray = food.reverse();

var arrayToString = reversedArray.join(", ");

console.log("Array as string: " + arrayToString);