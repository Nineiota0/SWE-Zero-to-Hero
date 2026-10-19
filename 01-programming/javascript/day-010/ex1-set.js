
// ============================================================
// SWE REBUILD — DAY 10
// Exercise 1: JavaScript Set
//
// Topics:
// - Creating sets
// - Unique values
// - add(), has(), delete()
// - size and clear()
// - Converting between arrays and sets
// ============================================================


// ============================================================
// PART A — Creating a Set
// ============================================================

// Given:

const numbers = [1, 2, 2, 3, 4, 4, 5];

// A1. Create a Set named uniqueNumbers from numbers.
//
// Print:
// - The entire Set
// - The number of unique elements
//
// Requirements:
// - Use new Set()
// - Do not use filter() or loops

// CODE HERE:

const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers)
console.log(uniqueNumbers.size)
console.log()

// ------------------------------------------------------------
// A2 — Convert Set Back to Array
// ------------------------------------------------------------

// Convert uniqueNumbers into a NEW array named uniqueArray.
//
// Requirements:
// - Use spread syntax.
// - Do not modify numbers.
// - Print the new array.

// CODE HERE:

const uniqueArray = [...new Set(numbers)];
console.log(uniqueArray)
console.log(uniqueArray.length)
console.log()

// ============================================================
// PART B — Set Operations
// ============================================================

// Given:

const languages = new Set(["C++", "JavaScript"]);

// B1. Add "Python" to the Set.
//
// B2. Attempt to add "C++" again.
//
// B3. Check whether "JavaScript" exists.
//
// B4. Check whether "Rust" exists.
//
// B5. Remove "C++".
//
// B6. Print the Set and its size.
//
// Requirements:
// - Use add(), has(), delete(), and size.
// - Print the results of the membership checks.
//
// CODE HERE:

console.log(languages.add("Python")) // will add since uniqye value
console.log(languages.add("C++")) // will not add since already ecists in set
console.log(languages.has("JavaScript")) // returns true
console.log(languages.has("Rust")) // returns false
console.log(languages.delete("C++")) // removes C++
console.log(languages)
console.log(languages.size)
console.log()

// ============================================================
// PART C — Iterating Over a Set
// ============================================================

// Given:

const skills = new Set(["React", "Node.js", "PostgreSQL"]);

// C1. Use a for...of loop to print every skill.
//
// Note:
// for...of iterates over the VALUES of an iterable.
//
// Example:
//
// for (const value of someCollection) {
//     console.log(value);
// }
//
// CODE HERE:

for (const skill of skills)
{
    console.log(skill)
}
console.log()

// ------------------------------------------------------------
// C2 — Clear a Set
// ------------------------------------------------------------

// Remove all elements from skills.
//
// Print the Set's size afterward.
//
// CODE HERE:

skills.clear();
console.log(skills)
console.log(skills.size)
console.log()

// ============================================================
// PART D — Prediction Challenge
// ============================================================

// Predict BEFORE running.

const values = new Set();

values.add(10);
values.add(10);
values.add("10");
values.add(true);
values.add(1);

// D1. What is values.size?
//
// Prediction: 4


// D2. Does values.has(10) return true?
//
// Prediction: yes a boolean (true)


// D3. Does values.has("10") return true?
//
// Prediction: yes


// D4. Are 10 and "10" considered duplicates?
//
// Prediction: no one is s number the other a string


// Verify your predictions using console.log().

// CODE HERE:

console.log(values.size)
console.log(values.has(10))
console.log(values.has("10"))

// ============================================================
// AI USAGE
// ============================================================
//
// Green: Independent
// Yellow: Implementation-specific hints
// Red: AI-provided solution
//
// Answer: 🟢 Independent
