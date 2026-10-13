// ============================================================
// SWE REBUILD — DAY 7
// Exercise 1: Destructuring
//
// Topics:
// - Object destructuring
// - Array destructuring
// - Renaming variables
// - Default values
// - Destructuring function parameters
// ============================================================


// ============================================================
// PART A — Object Destructuring
// ============================================================

// Given:

const developer = {
    name: "NineIota",
    age: 23,
    primaryLanguage: "C++",
    isLearningJavaScript: true
};

// A1. Extract the following properties using destructuring:
//
// name
// age
// primaryLanguage
//
// Requirements:
// - Use ONE destructuring declaration.
// - Do not use developer.name, developer.age, etc.
// - Print all three extracted values.

// CODE HERE:

const { name, age, primaryLanguage } = developer;

console.log(name)
console.log(age)
console.log(primaryLanguage)

console.log()

// ------------------------------------------------------------
// A2 — Renaming Variables
// ------------------------------------------------------------

// Given:

const player = {
    username: "Shadow",
    level: 25,
    health: 100
};

// Extract username into a NEW variable named playerName.
//
// Then print playerName.
//
// Requirement:
// Use destructuring with renaming.

// CODE HERE:

const { username: playerName } = player;

console.log(playerName)
console.log()

// ------------------------------------------------------------
// A3 — Default Values
// ------------------------------------------------------------

// Given:

const settings = {
    theme: "dark",
    notifications: true
};

// Extract:
//
// theme
// language
//
// If language is undefined or missing, use "English"
// as its default value.
//
// Print both variables.
//
// IMPORTANT:
// Do not modify the original settings object.

// CODE HERE:

const { theme, language = "English" } = settings

console.log(theme)
console.log(language)
console.log()

// ============================================================
// PART B — Array Destructuring
// ============================================================

// Given:

const scores = [85, 92, 78, 96, 88];

// B1. Extract the first TWO elements into variables:
//
// firstScore
// secondScore
//
// Print both.

// CODE HERE:

const [firstScore, secondScore] = scores;
console.log(firstScore)
console.log(secondScore)

console.log()

// ------------------------------------------------------------
// B2 — Skipping Elements
// ------------------------------------------------------------

// Given:

const coordinates = [10, 20, 30];

// Extract ONLY:
//
// the first element into x
// the third element into z
//
// Do not create a variable for the second element.
//
// Hint:
// Think about how commas separate array positions.

// CODE HERE:

const [x, , z] = coordinates;
console.log(x)
console.log(z)

console.log()

// ------------------------------------------------------------
// B3 — Swapping Values
// ------------------------------------------------------------

// Given:

let a = 5;
let b = 10;

// Swap the values of a and b using destructuring.
//
// Requirements:
// - Do not create a temporary variable.
// - Do not use arithmetic tricks.
//
// Expected:
// a = 10
// b = 5

// CODE HERE:

[a, b] = [b, a];
console.log(a)
console.log(b)

console.log()

// ============================================================
// PART C — Destructuring in Functions
// ============================================================

// Given:

const employee = {
    name: "Alice",
    department: "Engineering",
    salary: 85000
};

// C1. Create a function:
//
// describeEmployee(employee)
//
// Inside the function, destructure:
//
// name
// department
//
// RETURN a string formatted as:
//
// "Alice works in Engineering"
//
// Do not print inside the function.

// CODE HERE:

function describeEmployee(employee)
{
    const { name, department } = employee;
    return name + " works in " + department;
}

// Test:

console.log(describeEmployee(employee));
console.log();

// ------------------------------------------------------------
// C2 — Destructuring Parameters
// ------------------------------------------------------------

// JavaScript also allows destructuring directly inside
// a function's parameter list.
//
// Example:
//
// function example({ name, age }) {
//     return name + " is " + age;
// }
//
// Notice that the function receives an object,
// but its parameters immediately extract properties.


// Create:
//
// getProductLabel
//
// The function receives an object with:
//
// name
// price
//
// Destructure those properties DIRECTLY in the
// function parameter list.
//
// RETURN:
//
// "Keyboard costs $50"
//
// for the test object below.
//
// Do not access product.name or product.price
// inside the function.

// CODE HERE:

function getProductLabel({ name, price })
{
    return name + " costs $" + price;
}

// Test:

console.log(getProductLabel({
    name: "Keyboard",
    price: 50
}));

console.log()

// ============================================================
// PART D — Prediction Challenge
// ============================================================

// Do NOT run these until you've made your predictions.


// Prediction 1

const game = {
    title: "Minecraft",
    rating: 9
};

const { title, genre = "Unknown" } = game;

// What are title and genre?
//
// Prediction: Minecraft and Unknown

// Prediction 2

const numbers = [100, 200, 300];

const [first, , third] = numbers;

// What are first and third?
//
// Prediction: 100 and 300

// Prediction 3

const person = {
    name: "Alex",
    age: 25
};

const { name: personName } = person;

// Which variable was created?
//
// A. name
// B. personName
// C. Both
//
// Prediction: personName

// After writing your predictions, print the variables
// to verify your understanding.
//
// CODE HERE:

console.log(title)
console.log(genre)
console.log()

console.log(first)
console.log(third)
console.log()

console.log(personName)

// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent — no solution assistance
// 🟡 Assisted — implementation-specific hints
// 🔴 Solution — AI provided substantial code
//
// Answer: 🟢 Independent
