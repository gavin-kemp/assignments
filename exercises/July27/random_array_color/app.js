//create array has four colors. in js when somebody clicks the button have it run a random. every time you click a button it'll change the text/background color

//.indexof

var colorArray = ["Red", "Yellow", "Blue", "Green"];



function randomColor() {

 var randomNumber = Math.floor(Math.random() * 4) + 1
 
 return randomNumber;

}

btn1.addEventListener("click", randomColor())