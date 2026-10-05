// ============================================================
// SWE Rebuild — Day 3
// Part 2: Function Fundamentals
//
// Topics:
// - Function declarations
// - Parameters
// - Return values
// ============================================================


// ============================================================
// PART A — Your First JavaScript Function
// ============================================================

// In C++, you might write:
//
// void greet() {
//     cout << "Hello!";
// }
//
// JavaScript doesn't require you to declare a return type.
//
// Basic syntax:
//
// function functionName() {
//     // code
// }


// ------------------------------------------------------------
// Exercise A
// ------------------------------------------------------------

// Instructions:
//
// Create a function named:
//
// greet
//
// When called, it should print:
//
// "Hello from JavaScript!"
//
// IMPORTANT:
//
// After defining the function, call it THREE times.
//
// Run the program and observe what happens.


// CODE HERE:

function greet()
{
    console.log("Hello from JavaScript!")
}
greet();
greet();
greet();

// ============================================================
// PART B — Parameters
// ============================================================

// Functions become much more useful when we can give them data.
//
// Example:
//
// function example(value) {
//     console.log(value);
// }
//
// `value` is a parameter.
//
// When calling:
//
// example(10);
//
// `10` is an argument.

console.log()
// ------------------------------------------------------------
// Exercise B
// ------------------------------------------------------------

// Instructions:
//
// Create a function:
//
// greetUser
//
// It should accept ONE parameter:
//
// name
//
// Calling:
//
// greetUser("Brian");
//
// should print:
//
// Hello, Brian!
//
// Call your function with THREE different names.


// CODE HERE:

function greetUser(name)
{
    console.log("Hello, " + name + "!")
}

greetUser("Harry");
greetUser("Peter");
greetUser("MJ");

console.log()
// ============================================================
// PART C — Multiple Parameters
// ============================================================

// Instructions:
//
// Create a function named:
//
// calculateRectangleArea
//
// It should accept:
//
// width
// height
//
// Calculate:
//
// width * height
//
// For now, PRINT the result inside the function.
//
// Test it with:
//
// calculateRectangleArea(5, 10);
// calculateRectangleArea(3, 7);
// calculateRectangleArea(8, 8);


// CODE HERE:

function calculateRectangleArea(width, height)
{
    console.log(width * height)
}

calculateRectangleArea(5, 10);
calculateRectangleArea(3, 7);
calculateRectangleArea(8, 8);

console.log()
// ============================================================
// PART D — return
// ============================================================

// Printing a result and RETURNING a result are different.
//
// Consider:
//
// function example() {
//     console.log(5);
// }
//
// versus:
//
// function example() {
//     return 5;
// }
//
// In the first version, the function performs an output.
//
// In the second version, the function gives a VALUE back
// to whoever called it.
//
// This distinction is extremely important.


// ------------------------------------------------------------
// Exercise D1
// ------------------------------------------------------------

// Instructions:
//
// Create:
//
// add
//
// It accepts:
//
// a
// b
//
// Instead of console.log() inside the function,
// RETURN their sum.
//
// Then use:
//
// const result = add(10, 20);
//
// Print `result` OUTSIDE the function.


// CODE HERE:

function add(a, b)
{
    return a + b;
}

const result = add(10, 20);
console.log(result)

console.log()
// ------------------------------------------------------------
// Exercise D2
// ------------------------------------------------------------

// Instructions:
//
// Rewrite your rectangle-area idea as:
//
// getRectangleArea
//
// This time:
//
// DO NOT console.log() inside the function.
//
// RETURN the area.
//
// Then:
//
// 1. Call the function.
// 2. Store its returned value in a variable.
// 3. Print that variable.

// CODE HERE:

function getRectangleArea(width, height)
{
    return width * height;
}

const area = getRectangleArea(8, 10);
console.log(area)

// ============================================================
// PART E — Why return matters
// ============================================================

// Here's your small challenge.
//
// Create:
//
// isAdult
//
// Parameter:
//
// age
//
// The function should RETURN:
//
// true
//
// if age is at least 18.
//
// Otherwise it should RETURN:
//
// false.
//
// Do NOT print inside the function.

// CODE HERE:

function isAdult(age)
{
    return age >= 18;
}

// ------------------------------------------------------------
// Use the returned value
// ------------------------------------------------------------

// Call isAdult() with an age of your choice.
//
// Store the result.
//
// THEN use that returned boolean in an if/else statement:
//
// If true:
// "Access granted"
//
// Otherwise:
// "Access denied"
//
// Notice:
//
// One function CALCULATES something.
//
// Another part of the program DECIDES what to do with it.


// CODE HERE:

let isharryanAdult = isAdult(43)
isharryanAdult = isAdult(10)

if (isharryanAdult)
{
    console.log("Access granted")
}
else
{
    console.log("Access denied")
}

console.log()
// ============================================================
// MINI CHALLENGE
// ============================================================

// Yesterday you wrote logic like:
//
// const username = "...";
// const password = "...";
// const isActive = true;
//
// if (username && password && isActive) {
//     ...
// }
//
// Let's make that logic reusable.
//
// Create:
//
// canLogin
//
// Parameters:
//
// username
// password
// isActive
//
// RETURN true if:
//
// username is truthy
// AND
// password is truthy
// AND
// isActive is truthy
//
// Otherwise return false.
//
// IMPORTANT:
//
// canLogin should NOT print:
//
// "Login successful"
//
// or:
//
// "Login failed"
//
// Its responsibility is ONLY to determine whether login
// is allowed.


// CODE HERE:

function canLogin(username, password, isActive)
{
    if (username && password && isActive)
    {
        return true;
    }
    return false;
}

// ------------------------------------------------------------
// Test your function
// ------------------------------------------------------------

// Use canLogin() with AT LEAST these cases:
//
// "NineIota", "password123", true
//
// "", "password123", true
//
// "NineIota", "", true
//
// "NineIota", "password123", false
//
// Print the returned result for each test.


// CODE HERE:

console.log(canLogin("NineIota", "password123", true));   // Prints: true
console.log(canLogin("", "password123", true));            // Prints: false
console.log(canLogin("NineIota", "", true));             // Prints: false
console.log(canLogin("NineIota", "password123", false));   // Prints: false

// ============================================================
// ONE IMPORTANT QUESTION
// ============================================================

// This is the only reflection question for this lesson.
//
// Explain the difference between:
//
// console.log(value)
//
// and:
//
// return value
//
// Don't worry about perfect terminology.
// Explain what you currently think the difference is.
//
// Answer: console.log() performs a function in this case it prints out something 
// return on the other hand gives back a value to whoever called it




// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent