var favoriteFoods = [
	{
		type: "Water",
		price: "free",
		portion: "glass",
		getPrice: function(){return this.type + " is " + this.price}
	},
	
	{
		type: "Pizza",
		price: "2.50",
		portion: "slice",
		getPrice: function(){return this.type + " is $" + this.price + " a " + this.portion}
	},
	
	{
		type: "Sourdough bread",
		price: "5.00",
		portion: "loaf",
		getPrice: function(){return this.type + " is $" + this.price + " a " + this.portion}
	},
	
	{
		type: "Fries",
		price: "3.00",
		portion: "per serving",
		getPrice: function(){return this.type + " is $" + this.price + " " + this.portion}
		
	},
	
	{
	  
	  type: "Chips",
	  price: "1.50",
	  portion: "per bag",
	  getPrice: function(){return this.type + " is $" + this.price + " " + this.portion}
	  
	}
	
	
]

console.log(favoriteFoods[4].getPrice());