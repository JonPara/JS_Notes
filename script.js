
console.log("Hello World!!!")

var firstName = "John";
console.log(firstName)

var lastName = "Smith"
var age = 25

var fullAge = true;

console.log(fullAge)

// This variable is undefined until assigned a value
var job; 
console.log(job) 

var realJob = "Teacher"
console.log(realJob)

console.log(firstName + " " + lastName)

// Cleaner way of defining variables
var job, isMarried;
job = 'teacher'
isMarried = true


console.log(firstName + " " + age + " years old " + job + '. Is he married? ' + isMarried)

// Ability to mutate variables
age = "Twenty-Eight"
job = "driver"

// Alert creates alert box on web page
alert(firstName + ' is a ' + age + ' year old ' + job)

// Prompt can give you input box
prompt('What is his last name?')
console.log(firstName + " " + lastName)

/**************************
* Basic Operators
*/

var year, yearJohn, yearMark;
year = 2018;
yearJohn = year - 25;
yearMark = year - 33;

console.log(yearJohn);
console.log(yearMark);

console.log(year + 2)
console.log(year * 2)
console.log(year / 10)

// Logical Operators

var johnOlder = yearJohn > yearMark;
console.log(johnOlder)

// typeOf Operators

console.log(typeof johnOlder);
console.log(typeof yearJohn);

var fullAge = 18;

var isFullAge = year - yearJohn >= fullAge // true
console.log(isFullAge)

var ageJohn = year - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2
console.log(average)

var x, y;
x = y = (3 + 5) * 4 - 6; 
console.log(x, y)


/**************************
*/
var firstName = 'John';
var civilStatus = 'single'

// If-Else Statements
if (civilStatus === 'single') {
	console.log(firstName + ' is single!')
} else{
	console.log(firstName + ' will be single soon!')
}

// Boolean Logic 
var firstName = 'John'
var age = 29

if (age < 13){
	console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) { 
	console.log(firstName + " is a teenager");
} else if (age > 20 && age < 30){
  	console.log(firstName + " is a young man.");
}  else {
	console.log(firstName + " is a man");
}

/**************************
*/

// Ternary Operator and Switch Statements

var firstName = 'John';
var age = 31;

age >= 18 ? console.log(firstName + " drinks beer.")
: console.log(firstName + " drinks juice.");

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)


// Without Ternary Operator
// if (age >= 18) {
// 	var drink = 'beer';
// } else { 
// 	var drink = 'juice';
// }

// Switch Statement
var job = 'teacher';

switch (job){
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code');
		break;
	case 'driver':
		console.log(firstName + ' drives an Uber in Lisbon');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites');
		break;
	default:
		console.log(firstName + ' does something else');
}	


switch(true){
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man.');
	default:
		console.log(firstName + ' is a man');

}

// Truthy and Falsy values and equality operators

// Falsy Values: Undefined, null, 0, " ", NaN
// Truthy Values: Not falsy values

var height = 0;

if (height || height === 0) { // Only one of these has to be true 
	console.log('Variable is defined');
} else {
	console.log('Variable has not been defined');
}


// Equality operators
if (height === '23'){
	console.log('The == operator does type coercion!');

}

// Coding Challenge 2

var johnScore = 89 + 120 + 103;
var mikeScore = 116 + 94 + 123;
console.log(johnScore, mikeScore)

var johnAverage = johnScore / 3;
var mikeAverage = mikeScore / 3;

if (johnAverage < mikeAverage){
	console.log("John wins the game!");
} else {
	console.log("Mike wins the game!")
}

