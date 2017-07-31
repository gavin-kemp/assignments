//You have just been called into a technical interview at some large, evil corporation. They want you to remove all the duplicate letters from a string. But you decide to only partially comply with their wishes. You create one string that has no duplicate letters, and another with all the letters that were removed because they were duplicates.


//Problem solving

//https://stackoverflow.com/questions/18008025/remove-duplicate-item-from-array-javascript

var duplicateString = "bookkeeper larry";

function noDuplicates(str){
  
  var duplicate = "";
  var unique = "";
  
  for (var i = 0; i < str.length; i++){
    //Have to compare each character to the ones in duplicate.
    
    if (unique.indexOf(str[i]) >= 0){
      
      duplicate += str[i];
      
    }
    else {
      
      unique += str[i];
      
    }
    
  }
  
  return console.log("Duplicates: " + duplicate + " Uniques: " + unique);
  
}

noDuplicates(duplicateString);