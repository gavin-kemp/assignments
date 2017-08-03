// We have a loud talking parrot. Write a function where the 'hour' parameter is the current hour in the range 0..23, and the 'talking' parameter is a boolean indicating if the parrot is currently talking. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

function parrot(hour, talking) {
  
  if(typeof time !== 'number' || hour > 23 || hour < 0){
    return "Please enter an hour between 0 and 23."
  }
  
  if (typeof talking !== "boolean"){
    return "'talking' must be a boolean."
  }
	
  if (talking === true && (hour < 7 || hour > 20)){
    return true;
  } else {
    return false;
  }
}

parrot(7, true);