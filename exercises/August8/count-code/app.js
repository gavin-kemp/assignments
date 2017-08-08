//https://coursework.vschool.io/count-code/

var newString = "aaacodebbbcobecoxecooe"

function codeCount(newString){
	
var count = 0;

for (var i = 0; i < newString.length; i++){
	
    	if(newString[i] === "c" && newString[i + 1] === "o" && newString[i + 3] === "e"){
    		count++;
    }
}

console.log(count);
	
}

codeCount(newString);