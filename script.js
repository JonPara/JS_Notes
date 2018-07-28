
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

// if (johnAverage < mikeAverage){
// 	console.log("John wins the game!");
// } else if {
// 	console.log("Mike wins the game!")
//  else {
// 	console.log("It's a tie!")
// }


// Functions 

function calculateAge(birthYear){
	return 2018 - birthYear;
} 

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirment = 65 - age;

	if (retirment > 0) {
	console.log(firstName + " retires in " + retirment + " years.");
}	else {
	console.log(firstName + " is already retired.")
	}
}

yearsUntilRetirement(1990, 'John')
yearsUntilRetirement(1969, 'Mike')
yearsUntilRetirement(1948, 'Jane')

// Function Statements and Expressions

// Function Declaration
// function whatDoYouDo(job, firstName){}

// Function Expression
var whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives a cab in Lisbon';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
		return firstName + ' does something else';  
	}
}

console.log((whatDoYouDo('teacher', 'John')))
console.log((whatDoYouDo('designer', 'Jane')))
console.log((whatDoYouDo('retired', 'Mark')))


// Arrays

var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names)
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Mary'; // Index 4 will be empty
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); //Push adds an element
john.pop() // Pop removes an element
john.shift() // Moves element
console.log(john)

console.log(john.indexOf(23))

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'
console.log(isDesigner)

//Coding Challenge


function tipCalculator(bill){
	var percentage;
	if (bill < 50){
		percentage = .20;
	} else if (bill >= 50 && bill < 200){
		percentage = .15;
	}	else{
		percentage = .10
	}
	return percentage * bill;
}

console.log(tipCalculator(1300));

// var bills = [124,48,268]
// var tips = [tipCalculator(bills[0])
// 			tipCalculator(bills[1])
// 			tipCalculator(bills[2])];
// console.log(tips);


// Objects & Properties

// Object literal

var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'];
console.log(john[x]);

// New Objective Syntax

var jane = new Object()
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane)

// Methods

var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function(birthYear){
		return 2018 - birthYear
	}
};


console.log(john.calcAge(1990))

// Coding Challenge 4

var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}