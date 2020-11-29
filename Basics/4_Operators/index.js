// Operators


// Arithmetics Operators
let x = 10;
let y = 3
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment (++) 
console.log(++x); // Increment by 1 then print to console
console.log(x++); //Print to the console and then add 1
console.log(x);

// Decrement (--)
console.log(--x); //Decrement by 1 then print to console
console.log(x--); // Print to console then minus 1
console.log(x); 

// -----------------------------------------------------
// Assignment Operators
x = x + 5;
x += 5;

x = x * 3;
x *= 3;

// Comparison Operators

// Relational
console.log(x >= 0); //Output Boolean
console.log(x < 1); 

// Equality
// Strict Equality (Type + Value)
console.log(1 === 1); //3 times = 
console.log(1 !== 1); //1 ! and 2 == 
console.log('1' === 1); 

// Lose Equality
console.log(1 == 1); //True
console.log('1' == 1); //True
console.log(true == 1); //True


// -----------------------------------------------------
// Ternary Operator

// If a customer has more than 100 porints,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


// -----------------------------------------------------
// Logical Operator

// AND (&&)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// OR (||)
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);



// Non Boolean Logical operator

// Falsy (false)
// undefined, null, 0, false, '', NaN
// Anything that is not Falsy -> Truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor)


// -----------------------------------------------------
// Bitwise Operator
// 1 = 00000001
// 2 = 00000010

console.log(1 | 2); // Bitwise OR
// Result = 00000011

console.log(1 & 2); // Bitwise AND
// Result = 00000000

// Access Control System
// Read, Write, Execute
// 00000100
// 00000110
// 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0
myPermission = myPermission | readPermission | writePermission

let message = (myPermission & readPermission) ? 'yes' : 'no'
console.log('Permission: ', message)

// -----------------------------------------------------
// Precedence Operator
let num = 2 + 3 * 4;
console.log(num);


// -----------------------------------------------------
// Exercise

let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

let c = a;
a = b;
b=c;

console.log(a);
console.log(b);