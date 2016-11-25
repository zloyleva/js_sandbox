for(var i = 1;i <= 8; i++){
	if(i%2 == 0) line(" #");
	else line("# ");
}

function line(item){
	var string = "";
	for (var i = 0; i < 8; i++) {
		string += item;
	}
	console.log(string);
}