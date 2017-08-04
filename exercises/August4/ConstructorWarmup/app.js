//Warmup part 1: "You're making a restaurant, so you need a menu. Make an array of three
// object literal items for dishes on your menu. Then make a constructor
// function and add 3 more items to your menu."

var menu1It = document.getElementById("menu1Item");
var menu1Pri = document.getElementById("menu1Price");
var menu1Desc = document.getElementById("menu1Description");

var menu2It = document.getElementById("menu2Item");
var menu2Pri = document.getElementById("menu2Price");
var menu2Desc = document.getElementById("menu2Description");

var menuItems = [
  
   {name: "Chicken Soup", price: 15, type: "Chicken"},
   {name: "Cheeseburger", price: 50, calories: 800},
   {name: "French Fry", price: 1, calories: 20}
   
];
  
  //constructor
  
function MenuItem(name, price, calorie) {
    
    this.name = name;
    this.price = price;
    this.calorie = calorie;
    
}
  
  //Add 3 more 
  
  var chips = new MenuItem("Chips", 100, 1000);
  var soup = new MenuItem("Soup", 1, 5000);
  var sundae = new MenuItem("Sundae", 5, 600);

  menuItems.push(chips, soup, sundae);
	
  console.log(menuItems);
  
  menu1It.innerHTML = menuItems[3].name;
  
  menu1Pri.innerHTML = "$" +  menuItems[3].price;
  
  menu1Desc.innerHTML = "Calories: " + menuItems[3].calorie;
  
  menu2It.innerHTML = menuItems[4].name;
  
  menu2Pri.innerHTML = "$" + menuItems[4].price;
  
  menu2Desc.innerHTML = "Calories: " + menuItems[4].calorie;

//add for loop append child something