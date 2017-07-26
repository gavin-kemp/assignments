//https://coursework.vschool.io/uptown-function-you-up/

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];



function printArray(lyricsArray){
    
      console.log(lyricsArray.join(" "));
    
}

printArray(lyrics);



function twoWords(newArray){
  
  for (var i=0; i < newArray.length; i++){
    
    if (i % 2 === 0) {
      
      var a = newArray[i+1];
      console.log(a);
      
    }
    
    else{
      
      var b = newArray[i-1];
      console.log(b);
      
    }
    
  }
  
}

console.log("\r\r Every other reversed: \r\r\r");

twoWords(lyrics);



function everyOtherFunction(lyricsArray){
  
  for (var i=0; i < lyricsArray.length; i+=2){
      
    console.log(lyricsArray[i]);
    
  }
}

console.log("\r\r Every other Array: \r\r\r");

everyOtherFunction(lyrics);



function reverseArray(lyricsArray){
  
    var reversedArray = lyricsArray.reverse();
    
    console.log(reversedArray.join(" "));
  
}

console.log("\r\r Reversed Array: \r\r\r");

reverseArray(lyrics);