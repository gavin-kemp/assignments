//https://coursework.vschool.io/warmup-anti-caps/

function antiCaps(str) {

	for (var i = 0; i < str.length; i++) {

		if (str.charAt(i) === str.charAt(i).toUpperCase()) {

			console.log(str.charAt(i).toLowerCase());

		} else {

			console.log(str.charAt(i).toUpperCase());

		}


	}

}

antiCaps("whAt")