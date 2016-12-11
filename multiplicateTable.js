	var d = document.getElementById("d");

	var cell = 10;
	var row = 10;

function createDOM(){
	d.innerHTML = "";//Clear
	var tabl = d.appendChild(document.createElement("table"));	
	for (var i = 1; i <= row; i++) {
		var tr = tabl.appendChild(document.createElement("tr"));
		for (var j = 1; j <= cell; j++) {
			var td = tr.appendChild(document.createElement("td"));
			td.appendChild(document.createTextNode(i*j));
		}
	}
	
}

