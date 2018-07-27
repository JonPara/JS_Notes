var johnScore = 89 + 120 + 103;
var mikeScore = 116 + 94 + 123;
console.log(johnScore, mikeScore)

var johnAverage = johnScore / 3;
var mikeAverage = mikeScore / 3;

if (johnAverage < mikeAverage){
	console.log("John wins the game with " + mikeScore + " points!");
} else {
	console.log("Mike wins the game with " + johnScore + " points!")
}


