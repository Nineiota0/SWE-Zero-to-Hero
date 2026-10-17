
// ============================================================
// SWE REBUILD — DAY 9
// Exercise 2: find(), some(), every()
// ============================================================


// ============================================================
// PART A — find()
// ============================================================

const users = [
    { id: 1, username: "Alice", isActive: true },
    { id: 2, username: "Bob", isActive: false },
    { id: 3, username: "Charlie", isActive: true }
];

// A1. Find the user whose id is 2.
// A2. Find the first inactive user.
// A3. Find the user whose id is 99.
//
// Predict what A3 returns: since user id 99 does not exist yet, i think it will return undefined
//
// CODE HERE:

const id2 = users.find(users => users.id === 2);
console.log(id2)
const inactiveUser = users.find(users => users.isActive === false);
console.log(inactiveUser)
const id99 = users.find(users => users.id === 99);
console.log(id99)
console.log()

// ============================================================
// PART B — some()
// ============================================================

const orders = [
    { id: 101, total: 25, isPaid: true },
    { id: 102, total: 100, isPaid: false },
    { id: 103, total: 75, isPaid: true }
];

// B1. Check whether ANY order is unpaid.
// B2. Check whether ANY order exceeds $200.
// B3. Check whether ANY order has a total of exactly $100.
//
// Requirements:
// - Use some().
// - Print each result.
//
// CODE HERE:

const unpaidOders = orders.some(orders => orders.isPaid === false);
console.log(unpaidOders)
const over200 = orders.some(orders => orders.total > 200);
console.log(over200)
const exactly100 = orders.some(orders => orders.total === 100);
console.log(exactly100)
console.log()

// ============================================================
// PART C — every()
// ============================================================

const tasks = [
    { title: "Write code", completed: true },
    { title: "Write tests", completed: true },
    { title: "Deploy", completed: false }
];

// C1. Check whether ALL tasks are completed.
// C2. Check whether ALL tasks have nonempty titles.
// C3. Check whether ALL tasks are incomplete.
//
// Requirements:
// - Use every().
//
// CODE HERE:

const allCompleted = tasks.every(tasks => tasks.completed === true);
console.log(allCompleted)
const nonemptyTitle = tasks.every(tasks => tasks.title);
console.log(nonemptyTitle)
const allIncomplete = tasks.every(tasks => tasks.completed === false);
console.log(allIncomplete)
console.log()

// ============================================================
// PART D — Empty Array Predictions
// ============================================================

// Predict before running:
//
// [].find(...)
// [].some(...)
// [].every(...)
//
// What do you think each returns?
//
// Predictions:
//
// find: undefined since it searches for the first element but arrau is empty
// some: false since array is empty it cannot find any matches
// every: true since array is empty therefore nothing can violate the condition
//
// Create your own valid callbacks and test them.
//
// CODE HERE:

const emptyArray = [];

const findResult = emptyArray.find(num => num > 0);
const someResult = emptyArray.some(num => num % 2 === 0);
const everyResult = emptyArray.every(() => true);

console.log(findResult);
console.log(someResult); 
console.log(everyResult);
// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
