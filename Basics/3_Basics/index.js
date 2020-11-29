//  Variable
let name = 'Ben';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are Case-sensitive

// Constant
const interestRate = 0.3;
console.log(interestRate);

// --------------------------------------
// -- PRIMITIVE TYPES --
let nickName = 'Ben'; //String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName; 
let firsName = undefined;
let selectedColor = null;

console.log(typeof age);
console.log(typeof nickName);
console.log(typeof isApproved);
console.log(typeof firsName);
console.log(typeof selectedColor);

// --------------------------------------
// -- REFERENCE TYPES --

// Object
let person = {
    name: 'Ben',
    age: 30
};

console.log(person);
console.log(typeof person);

// Dot Notation 
person.name = 'John';
console.log(person.name);

// Bracket Notation 
person['name'] = 'Mary';
console.log(person['name']);

// Use case of Bracket Notation 
let selection = 'name';
person[selection] = 'Mary'

// Array
let selectedColors = ['red','blue'];
console.log(selectedColors)
console.log(typeof selectedColors);
// Display First Element Array
console.log(selectedColors[0]);

// Add Element to array
selectedColors[2] = 'green';
console.log(selectedColors);

// Multi types on array
selectedColors[3] = 3;
console.log(selectedColors);

// Object properties
console.log(selectedColors.length);


// Function
function greet() {
    console.log('Hello World');
}

greet();

// Function with parameter
function greet(name) {
    console.log('Hello ' + name);
}
// With Argument
greet('Ben');

// Multiple parameters that Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith'); 

// Function calculating a value
function square (number) {
    return number * number;
}
let result = square(4);
console.log(result);
console.log(square(5));