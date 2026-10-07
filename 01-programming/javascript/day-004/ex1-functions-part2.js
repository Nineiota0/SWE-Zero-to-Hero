// ============================================================
// SWE Rebuild — Day 4
// Functions Part 2
//
// Topics:
// - Arrow functions
// - Scope
// - Callbacks
// ============================================================


// ============================================================
// PART A — Arrow Functions
// ============================================================


// ------------------------------------------------------------
// A1 — Convert a function
// ------------------------------------------------------------

// Given:
//
// function multiply(a, b)
// {
//     return a * b;
// }
//
// Rewrite it as an arrow function named:
//
// multiply
//
// Use the version with { } and an explicit return.


// CODE HERE:

const multiply = (a, b) =>
{
    return a * b;
}

// Test:

console.log(multiply(4, 5)); // expected: 20
console.log(multiply(3, 7)); // expected: 21




// ------------------------------------------------------------
// A2 — Concise Arrow Function
// ------------------------------------------------------------

// Create an arrow function:
//
// square
//
// It accepts one number and RETURNS that number squared.
//
// REQUIREMENT:
//
// Write it using the concise one-line arrow syntax:
//
// const something = (...) => ...;


// CODE HERE:


const square = (a) => a * a;

// Test:

console.log(square(5));  // expected: 25
console.log(square(10)); // expected: 100




// ------------------------------------------------------------
// A3 — Bring back yesterday's function
// ------------------------------------------------------------

// Yesterday we created:
//
// qualifiesForFreeShipping
//
// Parameters:
//
// orderTotal
// isPremiumMember
// country
//
// Return true when:
//
// country is "US"
//
// AND
//
// orderTotal is at least 50
// OR the customer is a premium member.
//
// Rewrite it as a concise arrow function.
//
// Pay attention to your parentheses.


// CODE HERE:

const qualifiesForFreeShipping = (orderTotal, isPremiumMember, country) => country === "US" && (orderTotal >= 50 || isPremiumMember);

// Tests:

console.log(qualifiesForFreeShipping(75, false, "US"));     // true
console.log(qualifiesForFreeShipping(25, true, "US"));      // true
console.log(qualifiesForFreeShipping(25, false, "US"));     // false
console.log(qualifiesForFreeShipping(100, true, "Canada")); // false
console.log(qualifiesForFreeShipping(50, false, "US"));     // true

// multiply       -> refers to the function itself as a value
// multiply()     -> calls the function with no arguments
// multiply(5, 3) -> calls the function with arguments 5 and 3

console.log();

// ============================================================
// PART B — Scope
// ============================================================


// ------------------------------------------------------------
// B1 — Function Scope Experiment
// ------------------------------------------------------------

// IMPORTANT:
// Predict BEFORE running.
//
// Do not fix the code initially.


function createMessage()
{
    const message = "Hello from inside the function";

    console.log(message);
}

createMessage();


// Prediction:
//
// Will this next line work?
// YES or NO:
//
// Prediction: Yes, createMessage(); will work since message is in the scope of the function CreatMessage

// console.log(message);


// Run the program.
//
// If you receive an error:
//
// 1. Read the error.
// 2. Identify the line. Line 156
// 3. Write down the TYPE of error.
//
// Error type: ReferenceError, line 156
//
//
// After observing the error, COMMENT OUT:
//
// console.log(message);
//
// so the rest of the file can run.



// ------------------------------------------------------------
// B2 — Outside → Inside
// ------------------------------------------------------------

const appName = "SWE Rebuild";

function printAppName()
{
    // WITHOUT creating another appName variable,
    // print appName from inside this function.

    // CODE HERE:
    console.log(appName)

}

printAppName();


// Question:
//
// Based on B1 and B2:
//
// Can a function access a variable created OUTSIDE it?
//
// Answer: Yes a function can access a variable created outside of it
//
// Can code outside the function access a variable created
// INSIDE it?
//
// Answer: No, code outside the function cannot access a variable inside of a function due to its scope




// ------------------------------------------------------------
// B3 — Block Scope
// ------------------------------------------------------------

// You already use blocks:
//
// if (...) {
//     ...
// }
//
// for (...) {
//     ...
// }
//
// Functions aren't the only place scope matters.
//
// Predict BEFORE running.


if (true)
{
    const insideBlock = "You found me";
    let anotherInsideBlock = 100;

    console.log(insideBlock);
    console.log(anotherInsideBlock);
}


// Prediction:
//
// Will these work outside the block?
//
// console.log(insideBlock);
// console.log(anotherInsideBlock);
//
// Prediction: No these will not work outside the block since they are called outside the variables scope


// Uncomment them, run the program, observe the error,
// then comment them back out.

// console.log(insideBlock);
// console.log(anotherInsideBlock);




// ------------------------------------------------------------
// B4 — Same name, different scope
// ------------------------------------------------------------

const username = "Global Brian";

function showUsername()
{
    const username = "Local Brian";

    console.log(username);
}

showUsername();
console.log(username);


// BEFORE RUNNING:
//
// Predict the TWO lines that will print:
//
// 1. Local Brian
// 2. Global Brian


// Run it.
//
// Did changing/creating the inner `username` change the
// outer `username`?
//
// Answer: No changing the inner username does not change the outer username.
// This is because they are declared in two different scopes. One in the function
// the other outside of it. 

console.log();

// ============================================================
// PART C — Callbacks
// ============================================================


// ------------------------------------------------------------
// C1 — Function as an argument
// ------------------------------------------------------------

function sayHello()
{
    console.log("Hello!");
}

function runSomething(fn)
{
    console.log("About to run the function...");

    fn();

    console.log("Finished running the function.");
}


// Instructions:
//
// Call runSomething and pass `sayHello` into it.
//
// IMPORTANT:
//
// Think carefully about:
//
// sayHello
//
// versus:
//
// sayHello()
//
// We want to PASS the function to runSomething,
// not execute it ourselves before passing it.


// CODE HERE:

runSomething(sayHello)

// Expected order:
//
// About to run the function...
// Hello!
// Finished running the function.

console.log()
// ------------------------------------------------------------
// C2 — Try another callback
// ------------------------------------------------------------

// Create:
//
// sayGoodbye
//
// It should print:
//
// Goodbye!
//
// Then pass sayGoodbye to:
//
// runSomething


// CODE HERE:

function sayGoodbye()
{
    console.log("Goodbye")
}

runSomething(sayGoodbye)

// ============================================================
// PART D — Callback With Data
// ============================================================

// A callback can also receive arguments.
//
// Study this function:
//
// processNumber accepts:
//
// number
// callback
//
// It calls:
//
// callback(number)
//
// Don't change processNumber yet.


function processNumber(number, callback)
{
    console.log("Processing:", number);

    callback(number);
}

console.log()
// ------------------------------------------------------------
// D1
// ------------------------------------------------------------

// Create a function:
//
// printDouble
//
// Parameter:
//
// number
//
// It should print:
//
// number * 2
//
// Then:
//
// pass printDouble as the callback to processNumber.
//
// Use:
//
// 5
//
// as the number.


// CODE HERE:

function printDouble(number)
{
    console.log(number * 2)
}

processNumber(5, printDouble)

// Expected:
//
// Processing: 5
// 10
console.log()
// ------------------------------------------------------------
// D2
// ------------------------------------------------------------

// Create:
//
// printSquare
//
// It should accept a number and print its square.
//
// Then use the SAME processNumber function with:
//
// number = 6
// callback = printSquare


// CODE HERE:

function printSquare(number)
{
    console.log(number * number)
}

processNumber(6, printSquare)

// Notice:
//
// processNumber itself did NOT need to change.
//
// We changed the behavior by giving it a different function.



console.log()
// ============================================================
// PART E — Callback Challenge
// ============================================================

// Build:
//
// calculate
//
// Parameters:
//
// a
// b
// operation
//
// calculate should RETURN:
//
// operation(a, b)
//
// IMPORTANT:
//
// calculate itself should NOT know whether it is doing:
//
// addition
// subtraction
// multiplication
//
// That behavior comes from the function passed into it.


// CODE HERE:


function calculate(a, b, operation)
{
    return operation(a, b);
}

// ------------------------------------------------------------
// Operations
// ------------------------------------------------------------

// Create THREE functions:
//
// add
// subtract
// mult (changed due to previous function being called multiply as well)
//
// Each accepts:
//
// a
// b
//
// Each RETURNS the appropriate result.
//
// You may use regular functions OR arrow functions.


// CODE HERE:

function add (a, b)
{
    return a + b;
}

const subtract = (a, b) => a - b;

const mult = (a, b) =>
{
    return a * b;
}

// ------------------------------------------------------------
// Tests
// ------------------------------------------------------------

// These should work WITHOUT changing calculate:
//
// console.log(calculate(10, 5, add));       // 15
// console.log(calculate(10, 5, subtract));  // 5
// console.log(calculate(10, 5, mult));  // 50


// Uncomment after implementing:

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, mult));




// ============================================================
// ONE IMPORTANT CALLBACK QUESTION
// ============================================================

// Explain the difference between:
//
// calculate(10, 5, add)
//
// and:
//
// calculate(10, 5, add())
//
// Specifically:
//
// What are we passing in each case?
//
// Don't worry if you're unsure. This distinction is one of
// the main things I want to evaluate from today's work.
//
// Answer: In calculate(10, 5, add), we are using callback. Specifically on the add function
// we are  passing the function itself which would add 10 and 5 together
// purely based on the description of the function.
// For calculate(10, 5, add()), we are calling add function itself not as a value hence the add().
// this in turn would pass no value itself since there are no params in add() being called.




// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent