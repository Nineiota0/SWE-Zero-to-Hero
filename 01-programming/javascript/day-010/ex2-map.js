
// ============================================================
// SWE REBUILD — DAY 10
// Exercise 2: JavaScript Map
//
// Topics:
// - Key-value pairs
// - set(), get(), has(), delete()
// - Map iteration
// - Map vs Object
// ============================================================


// ============================================================
// PART A — Creating a Map
// ============================================================

// A1. Create a Map named studentGrades.
//
// Add the following entries:
//
// "Alice" -> 95
// "Bob" -> 82
// "Charlie" -> 76
//
// Requirements:
// - Use new Map()
// - Use set()
//
// Print the entire Map.

// CODE HERE:

const studentGrades = new Map();
studentGrades.set("Alice", 95);
studentGrades.set("Bob", 82);
studentGrades.set("Charlie", 76);

console.log(studentGrades)
console.log()

// ------------------------------------------------------------
// A2 — Retrieving Values
// ------------------------------------------------------------

// Using studentGrades:
//
// 1. Retrieve Alice's grade.
// 2. Retrieve Bob's grade.
// 3. Check whether Charlie exists.
// 4. Check whether David exists.
//
// Print each result.
//
// CODE HERE:

console.log(studentGrades.get("Alice")) // 95
console.log(studentGrades.get("Bob")) // 82
console.log(studentGrades.has("Charlie")) // true
console.log(studentGrades.has("David")) // false
console.log()

// ============================================================
// PART B — Updating and Removing Entries
// ============================================================

// B1. Update Bob's grade to 90.
//
// B2. Delete Charlie.
//
// B3. Print the Map's size.
//
// B4. Print the updated Map.
//
// CODE HERE:

studentGrades.set("Bob", 90);
studentGrades.delete("Charlie");

console.log(studentGrades.size)
console.log(studentGrades)
console.log()

// ============================================================
// PART C — Iterating Over a Map
// ============================================================

// Given:

const inventory = new Map([
    ["Keyboard", 5],
    ["Mouse", 10],
    ["Monitor", 2]
]);

// C1. Use a for...of loop to print:
//
// Keyboard: 5
// Mouse: 10
// Monitor: 2
//
// Hint:
// Each Map entry can be destructured into [key, value].
//
// CODE HERE:

for (const [item, count] of inventory)
{
    console.log(item + ": " + count)
}
console.log()

// ============================================================
// PART D — Non-String Keys
// ============================================================

// Given:

const user1 = { id: 1, name: "Alice" };
const user2 = { id: 2, name: "Bob" };

// Create a Map named loginCounts.
//
// Use user1 and user2 OBJECTS as keys.
//
// Store:
//
// user1 -> 3
// user2 -> 5
//
// Retrieve both counts.
//
// CODE HERE:

const loginCounts = new Map();
loginCounts.set(user1, 3);
loginCounts.set(user2, 5);

console.log(loginCounts.get(user1)); // Prints: 3
console.log(loginCounts.get(user2)); // Prints: 5

console.log(loginCounts)
console.log()
// ------------------------------------------------------------
// D2 — Object Identity Prediction
// ------------------------------------------------------------

// Predict BEFORE running:
//
// What happens if you try:
//
// loginCounts.get({ id: 1, name: "Alice" })
//
// Will it return 3 or undefined?
//
// Prediction: undefined 
//
// Explain why: JS compares objects by their unique memory location (reference) not by their contents
// compares object identity rather than physical memory locations
// Answer: undefined
//
// Test your prediction.

// CODE HERE:

console.log(loginCounts.get({ id: 1, name: "Alice" }))

// ============================================================
// AI USAGE
// ============================================================
//
// Green: Independent
// Yellow: Implementation-specific hints
// Red: AI-provided solution
//
// Answer: 🟢 Independent
