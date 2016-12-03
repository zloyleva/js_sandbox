function abcString(aInd, cont, callback){
	var abc = "";
	for (var i = 0; i < cont; i++) {
		abc += callback(aInd, i) + " ";
	}
	return abc;
}

// To show me the ABC
document.write(abcString(97, 26, function(ind, index){return String.fromCharCode(ind + index);}) + "<br/>");

// To show me numbers 0-9
document.write(abcString(0, 10, function(ind, index){return ind + index;}));