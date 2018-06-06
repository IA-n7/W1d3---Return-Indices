function returnIndices (str) {
	var indices = {};
	var input = str.split("");

	for (var i = 0; i < input.length; i++) {
		var tempKey = input[i];
		indices[tempKey] = " ";
	}

	for (var i = 0; i < input.length; i++) {

		if (input[i] == " ") {
		} else {
			var tempKey = input[i];
			indices[tempKey] += i.toString();
			indices[tempKey] += " "		
		}
	}
	return indices;
}


console.log(returnIndices("hjbgawhjbg"));

