var monitor = {
    
    color : "Black",
    brand : "Asus",
    refreshRate :"60hz",
    ports : {hasHDMI: true, hasVGA: true, hasDVID: true},
    monitorResolution : "1920x1080",
    specifications : function(){return this.refreshRate + " " + this.monitorResolution;}
    
};

var desk = {
    
    isRealWood : "unknown",
    height : 3,
    width : 3.5,
    baseColor : "Grey",
    costsMoney : true,
    measurements : function(){return this.height + " " + this.width;}
    

};

var projector = {
    
    onCeiling: false,
    color: "White",
    
};
    
var myComputer = {
    
    year: 2015,
    color: "silver",
    mechanicalKeyboard: false,
    monitorResolution: "2560x1600",
    hasGPU: false,
    isGoodComputer : function(){
      
      if (this.hasGPU === true && this.mechanicalKeyboard === true) {
        
        return ("Yes.");
        
      }
      
      else {
      
        return("No.");
        
      }
      
    }
    
};

var roomLights = {
    
    amount: 6,
    ceiling: true,
    floor: false,
    lightsOn: true,
    
}

myComputer.isGoodComputer();