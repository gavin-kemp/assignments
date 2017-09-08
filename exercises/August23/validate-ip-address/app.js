// https://coursework.vschool.io/validate-ip-address/

let ipAddress = "172.16.254.1";

let invalidIP = "Invalid IP Address";
let validIP = "Valid IP Address";

function checkIP(str){
  
  let array = str.split(".");

  if (array.length < 4 || array.length > 4){
    return invalidIP;
  }
  
  let newArray = [];

  for (var i = 0; i < array.length; i++){
    newArray.push(array[i]);
    console.log(newArray[i]);
    
    parseInt(newArray[i]);
    
    if(newArray[i] <= 0 || newArray[i] >= 255){
      return invalidIP;
    }
  }
  return validIP;
}

checkIP(ipAddress);

module.exports = checkIP;