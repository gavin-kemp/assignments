//https://coursework.vschool.io/parsing-json/

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

	if (xhr.readyState === 4 && xhr.status === 200) {

		var jsonData = xhr.responseText;
		console.log(jsonData);
		var data = JSON.parse(jsonData);
		console.log(data);
		var nameRat = data.objects[0].pokemon[0];
		var nameRan1 = data.objects[0].pokemon[22];
		var nameRan2 = data.objects[0].pokemon[7];

		var pokeArray = [];

		for (var k = 0; k < data.objects[0].pokemon.length; k++) {
			var newPokemon = data.objects[0].pokemon[k];
			pokeArray.push(newPokemon);

		}

		for (var i = 0; i < pokeArray.length; i++) {

			var display = document.getElementById("body").innerHTML += "<p>" + pokeArray[i].name + ": " + pokeArray[i].resource_uri + "</p>";
		}
	}
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();