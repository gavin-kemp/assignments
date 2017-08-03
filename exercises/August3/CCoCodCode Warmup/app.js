function layerString(str) {

	var temp = "";
	var layered = [];
	for (var i = 0; i < str.length; i++){
		temp += str[i];
		layered.push(temp);
		console.log(temp);
		console.log(layered);
		
	}
	return layered.join("");
}

layerString("Code");