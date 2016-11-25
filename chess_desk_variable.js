var num = prompt("Text chess desk size: ")

if (!isNaN(num)){
	for(var i = 1;i <= num; i++){
		if(i%2 == 0) line(" #");
		else line("# ");
	}

	function line(item){
		var string = "";
		for (var i = 0; i < num; i++) {
			string += item;
		}
		console.log(string);
	}
}else alert("You text not a number!");
