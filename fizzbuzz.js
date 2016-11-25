for(var i = 1;i<101;i++){
	console.log(i + " : " + fizzBuzz(i));
}

function fizzBuzz(number){
	if(i%3 == 0) if(i%5 == 0) return "FizzBuzz";
	else return "Fizz";
	if(i%5 == 0) return "Buzz";
	return "";
}