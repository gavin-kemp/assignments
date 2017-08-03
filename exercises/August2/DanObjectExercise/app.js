let theirAge = document.getElementById("age-input");
let userFirst = document.getElementById("first-name-input");
let userLast = document.getElementById("last-name-input");
let myButton = document.getElementById("btn");


function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
}



myButton.addEventListener("click", function(){
	
	let ageIn = theirAge.value;
	let firstIn = userFirst.value;
	let lastIn = userLast.value;
	
	let rick = new Person(firstIn, lastIn, ageIn);
	
	document.getElementById("outputAge").innerHTML = "Age: " + rick.age;
	document.getElementById("outputFirst").innerHTML = "First name: " + rick.firstName;
	document.getElementById("outputLast").innerHTML = "Last name: " + rick.lastName;
	
})