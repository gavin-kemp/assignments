var shopper = {
    
    name: 'Steve' ,
    age: '51' ,
    member: true ,
    groceryCart: ['Apples', 'Bread', 'Milk', 'Yogurt'] ,
    
    isSenior: function() {
      
      if(this.age >= 65){
        
        var discount = '20%';
        
      }
      else {
        
        var discount = '0%';
        return discount;
      }
    
}


};
    

console.log("Shopper's name: " + shopper.name);
console.log("Shopper's age: " + shopper.age);
console.log("Shopper is member? " + shopper.member);
console.log("Shopper's second item: " + shopper.groceryCart[1]);
console.log("Shopper discount: " + shopper.isSenior());