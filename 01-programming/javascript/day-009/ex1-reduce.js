
// ============================================================
// SWE REBUILD — DAY 9
// Exercise 1: reduce()
//
// Topics:
// - Accumulators
// - Initial values
// - Numeric reductions
// - Arrays of objects
// ============================================================


// ============================================================
// PART A — Basic reduce()
// ============================================================

// A1 — Sum of Numbers
//
// Given:

const numbers = [5, 10, 15, 20, 25];

// Use reduce() to calculate the sum.
//
// Requirements:
// - Do not use a for loop.
// - Use an arrow-function callback.
// - Use an appropriate initial value.
// - Print the result.

// CODE HERE:

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
console.log();

// ------------------------------------------------------------
// A2 — Product of Numbers
// ------------------------------------------------------------

// Given:

const values = [2, 3, 4, 5];

// Use reduce() to multiply all elements together.
//
// Requirements:
// - Do not use a loop.
// - Choose an appropriate initial accumulator.
//
// Before coding:
// What should the initial accumulator be?
//
// Prediction:

// CODE HERE:

const product = values.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);
console.log(product);
console.log();

// ------------------------------------------------------------
// A3 — Find the Largest Number
// ------------------------------------------------------------

// Given:

const scores = [45, 92, 67, 100, 83];

// Use reduce() to find the largest number.
//
// Requirements:
// - Do not use Math.max().
// - Do not use a loop.
// - Assume the array is non-empty.
//
// Think back to Day 5's findLargest() exercise.

// CODE HERE:

const largestNum = scores.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator)
    {
        return currentValue;
    }
    return accumulator;
});
console.log(largestNum);
console.log();

// ============================================================
// PART B — reduce() With Objects
// ============================================================

// Given:

const products = [
    { name: "Keyboard", price: 50, quantity: 2 },
    { name: "Mouse", price: 25, quantity: 3 },
    { name: "Monitor", price: 200, quantity: 1 }
];


// ------------------------------------------------------------
// B1 — Total Inventory Value
// ------------------------------------------------------------

// Calculate the total inventory value.
//
// For each product:
//
// value = price * quantity
//
// Add all product values together.
//
// Requirements:
// - Use reduce().
// - Return a number.
// - Do not mutate products.
//
// Expected total: 375
//
// CODE HERE:

const totalValue = products.reduce((accumulator, product) =>
{
    return accumulator + (product.price * product.quantity);
}, 0);
console.log(totalValue);
console.log();

// ------------------------------------------------------------
// B2 — Total Quantity
// ------------------------------------------------------------

// Calculate the total number of items in inventory.
//
// Requirements:
// - Use reduce().
// - Do not use map() or a loop.
// - Print the final quantity.
//
// CODE HERE:

const totalInventoryNum = products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
}, 0);
console.log(totalInventoryNum);
console.log();

// ============================================================
// PART C — Prediction Challenge
// ============================================================

// Predict BEFORE running.

const nums = [1, 2, 3];

const result = nums.reduce((acc, num) => {
    return acc + num;
}, 10);

// 1. What is the initial accumulator?
//
// Prediction: 10

// 2. What is the final result?
//
// Prediction: 16

// 3. What happens if you remove the initial value
//    from this reduce() call?
//
// Prediction: you will edn up with 6
//
// Run the experiments AFTER writing predictions.

// CODE HERE:

console.log(result)

// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
