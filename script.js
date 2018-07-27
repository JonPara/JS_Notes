
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