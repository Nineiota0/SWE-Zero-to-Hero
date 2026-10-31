// ============================================================
// SWE REBUILD — DAY 11
// Exercise 1: Primitives & References
//
// Topics:
// - Primitive assignment
// - Object references
// - Array references
// - Equality
// - Mutation vs reassignment
// ============================================================


// ============================================================
// PART A — Primitive Values
// ============================================================

// Given:

let a = 10;
let b = a;

// A1. Change b to 50.
//
// A2. Print a and b.
//
// BEFORE running:
//
// Predict both values.
//
// Prediction: a = 10, b = 50
//
// CODE HERE:

b = 50;
console.log(a, b)
console.log()
// ============================================================
// PART B — Object References
// ============================================================

// Given:

const originalPlayer = {
    username: "NineIota",
    health: 100
};

// B1. Create a variable named copiedPlayer.
//
// Assign originalPlayer directly to copiedPlayer.
//
// B2. Change copiedPlayer.health to 25.
//
// B3. Print both objects.
//
// BEFORE running:
//
// Predict originalPlayer.health.
//
// Prediction: both original and copied players will print { username: 'NineIota', health: 25 }
//
// CODE HERE:

const copiedPlayer = originalPlayer;
copiedPlayer.health = 25;

console.log(originalPlayer, copiedPlayer)
console.log()
// ============================================================
// PART C — Array References
// ============================================================

// Given:

const originalNumbers = [1, 2, 3];

// C1. Create another variable named copiedNumbers.
//
// Assign originalNumbers directly to copiedNumbers.
//
// C2. Add 4 to copiedNumbers using push().
//
// C3. Print both arrays.
//
// BEFORE running:
//
// Predict originalNumbers.
//
// Prediction: both arrays will print [ 1, 2, 3, 4 ]
//
// CODE HERE:

const copiedNumbers = originalNumbers;
copiedNumbers.push(4);

console.log(originalNumbers, copiedNumbers)
console.log()
// ============================================================
// PART D — Object Equality
// ============================================================

// Given:

const user1 = { name: "Alice" };
const user2 = { name: "Alice" };
const user3 = user1;

// Predict BEFORE running:
//
// user1 === user2
// user1 === user3
//
// Predictions:
//
// 1. false -> compares two diff objects even though same attributes
// 2. true -> references and compares the same object
//
// Print both comparisons.
//
// CODE HERE:

console.log(user1 === user2)
console.log(user1 === user3)
console.log()
// ============================================================
// PART E — Mutation vs Reassignment
// ============================================================

// Given:

const account = {
    owner: "Alex",
    balance: 100
};

// E1. Create a function:
//
// changeBalance(account)
//
// Requirements:
// - Change account.balance to 500.
// - Do not return anything.
//
// E2. Create another function:
//
// replaceAccount(account)
//
// Requirements:
// - Assign a NEW object to the local account parameter.
// - The new object should contain:
//   owner: "Bob"
//   balance: 0
//
// E3. Call both functions using account.
//
// E4. Print account afterward.
//
// BEFORE running:
//
// Predict the final owner and balance.
//
// Prediction: { owner: "Alex", balance: 500 }
// this is because in changeBalance, we are directly changing the original 
// object in memory, while replaceAccount only takes a copy of the object
// and creates an entirely new one, so now the function inside points to a new bob object
//
// CODE HERE:

function changeBalance(account)
{
    account.balance = 500;
}

function replaceAccount(account)
{
    account = { owner: "Bob", balance: 0};
}

changeBalance(account);
replaceAccount(account);

console.log(account)

// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
