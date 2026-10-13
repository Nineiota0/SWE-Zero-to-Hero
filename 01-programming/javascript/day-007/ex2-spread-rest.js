// ============================================================
// SWE REBUILD — DAY 7
// Exercise 2: Spread & Rest
//
// Topics:
// - Spread with arrays
// - Spread with objects
// - Immutable updates
// - Rest parameters
// - Rest destructuring
// ============================================================


// ============================================================
// PART A — Spread With Arrays
// ============================================================

// A1 — Copy an Array
//
// Given:

const original = [10, 20, 30];

// Create a NEW array named copiedNumbers using spread.
//
// Requirements:
// - Do not modify original.
// - Do not use a loop.
// - Print both arrays.

// CODE HERE:

const copiedNumbers = [...original];

console.log(original)
console.log(copiedNumbers)

console.log()

// ------------------------------------------------------------
// A2 — Combine Arrays
// ------------------------------------------------------------

// Given:

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "PostgreSQL"];

// Create an array named techStack containing all elements
// from frontend followed by all elements from backend.
//
// Requirements:
// - Use spread.
// - Do not use concat().
// - Do not use loops.

// CODE HERE:

const techStack = [...frontend, ...backend];

console.log(techStack)
console.log()

// ------------------------------------------------------------
// A3 — Add Elements Without Mutation
// ------------------------------------------------------------

// Given:

const scores = [85, 90, 95];

// Create a NEW array named updatedScores containing:
//
// 70, 85, 90, 95, 100
//
// Requirements:
// - Use spread.
// - Do not modify scores.
// - Do not use push() or unshift().
//
// Print both arrays.

// CODE HERE:

const updatedScores = [70, ...scores, 100];
console.log(scores)
console.log(updatedScores)

console.log()

// ============================================================
// PART B — Spread With Objects
// ============================================================

// B1 — Copy an Object
//
// Given:

const user = {
    name: "NineIota",
    age: 23,
    language: "C++"
};

// Create a NEW object named copiedUser
// containing all properties from user.
//
// Requirements:
// - Use spread.
// - Do not modify user.
// - Print both objects.

// CODE HERE:

const copiedUser = {
    ...user
}

console.log(user)
console.log(copiedUser)
console.log()

// ------------------------------------------------------------
// B2 — Update Without Mutation
// ------------------------------------------------------------

// Given:

const player = {
    username: "Shadow",
    level: 10,
    health: 100
};

// Create a NEW object named updatedPlayer.
//
// It should contain all properties from player,
// but level should be 11.
//
// Requirements:
// - Use spread.
// - Do not modify player.
// - Do not manually rewrite every property.
//
// Print both objects.

// CODE HERE:

const updatedPlayer = {
    ...player,
    level: 11
}

console.log(player)
console.log(updatedPlayer)
console.log()

// ------------------------------------------------------------
// B3 — Merge Objects
// ------------------------------------------------------------

// Given:

const profile = {
    name: "Alice",
    age: 25
};

const preferences = {
    theme: "dark",
    notifications: true
};

// Create a NEW object named completeProfile.
//
// It should contain all properties from BOTH objects.
//
// Requirements:
// - Use spread.
// - Do not modify either original object.
//
// Print completeProfile.

// CODE HERE:

const completeProfile = {
    ...profile,
    ...preferences
}

console.log(completeProfile)
console.log()

// ------------------------------------------------------------
// B4 — Property Overwriting
// ------------------------------------------------------------

// Predict BEFORE running.

const settings = {
    theme: "light",
    language: "English"
};

const newSettings = {
    theme: "dark",
    ...settings
};

// What is newSettings.theme?
//
// Prediction: theme: light, language English
//
// Print newSettings.theme.
//
// Why did that value win?
//
// Answer: the light value won since we called the spread after making theme in newSettings
// dark. So that wins over the dark theme, whereas if we did the spread first and then theme
// dark, it would have the theme dark.

console.log(newSettings.theme)
console.log()

// ============================================================
// PART C — Independent Spread Challenge
// ============================================================

// SCENARIO:
//
// You are managing a small game's player data.
//
// Each player is represented by an object containing:
//
// username
// level
// health
//
// Create a function:
//
// levelUp(player)
//
// Requirements:
//
// 1. RETURN a NEW player object.
// 2. Increase level by 1.
// 3. Preserve username and health.
// 4. Do NOT modify the original player.
// 5. Use object spread.
//
// Write the function yourself.
//
// Then create your OWN player object and at least
// THREE test cases.
//
// Include one test verifying that the original
// player's level remains unchanged.

// CODE HERE:

function levelUp(player)
{
    const newPlayer = {
        ...player,
        level: player.level + 1
    }
    return newPlayer;
}

const player1 = {
    username: "NineIota",
    level: 23,
    health: 100
}

console.log("original player,", player1) // original player username: 'NineIota', level: 23, health: 100

const playerLevelOnce = levelUp(player1)
console.log(playerLevelOnce) // username: 'NineIota', level: 24, health: 100

const playerLevelTwice = levelUp(playerLevelOnce)
console.log(playerLevelTwice) // username: 'NineIota', level: 25, health: 100

const player2 = { username: "ShadowBlade", level: 5, health: 80 };
console.log(levelUp(player2)) // username: "ShadowBlade", level: 6, health: 80

console.log(player1) // username: 'NineIota', level: 23, health: 100

console.log()

// ============================================================
// PART D — Rest Parameters
// ============================================================

// Rest parameters use the same ... syntax.
//
// Example:
//
// function example(...values) {
//     // values is an array
// }
//
// Calling:
//
// example(1, 2, 3)
//
// makes values contain:
//
// [1, 2, 3]
//
// REST collects values.
// SPREAD expands values.


// ------------------------------------------------------------
// D1 — Sum Any Number of Arguments
// ------------------------------------------------------------

// Create a function:
//
// sumAll(...numbers)
//
// Requirements:
//
// - Accept any number of numeric arguments.
// - Use a loop to calculate their sum.
// - RETURN the sum.
// - Return 0 when called with no arguments.
//
// Do not use reduce() yet.

// CODE HERE:

function sumAll(...numbers)
{
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }
    return sum;
}

// Write at least THREE of your own tests.
//
// Include a call with no arguments.

// CODE HERE:

console.log(sumAll(1, 2, 3))
console.log(sumAll(-1, -4, -3))
console.log(sumAll())
console.log(sumAll([]))
console.log(sumAll(100, 20))

const values = [10, 20, 30];
console.log()
console.log(sumAll(values));
console.log(sumAll(...values));
console.log()

// ------------------------------------------------------------
// D2 — Rest + Regular Parameters
// ------------------------------------------------------------

// Create a function:
//
// introduceTeam(leader, ...members)
//
// Requirements:
//
// - leader should receive the FIRST argument.
// - members should collect ALL remaining arguments.
// - RETURN an object containing:
//
//   leader
//   members
//
// Example concept:
//
// introduceTeam("Alice", "Bob", "Charlie")
//
// should return an object where:
//
// leader is "Alice"
// members is ["Bob", "Charlie"]
//
// Do not print inside the function.

// CODE HERE:

function introduceTeam(leader, ...members)
{
    return { leader, members };
}

// Write TWO test cases.
// One should contain no team members.

// CODE HERE:

console.log(introduceTeam("Alice", "Bob", "Charlie"))
console.log(introduceTeam("Alice"))
console.log(introduceTeam())

console.log()
// ============================================================
// PART E — Rest With Destructuring
// ============================================================

// E1 — Array Rest
//
// Given:

const numbers = [10, 20, 30, 40, 50];

// Use destructuring to extract:
//
// first -> 10
// remaining -> [20, 30, 40, 50]
//
// Requirements:
// - Use rest syntax.
// - Do not use slice().
// - Do not use a loop.

// CODE HERE:

const [first, ...remaining] = numbers;

console.log(first)
console.log(remaining)

console.log()
// ------------------------------------------------------------
// E2 — Object Rest
// ------------------------------------------------------------

// Given:

const employee = {
    name: "Alice",
    department: "Engineering",
    salary: 85000,
    isActive: true
};

// Use destructuring to extract:
//
// name -> "Alice"
//
// remainingInfo -> object containing all OTHER properties.
//
// Requirements:
// - Use rest syntax.
// - Do not modify employee.
//
// Print both extracted values.

// CODE HERE:

const { name, ...remainingInfo} = employee;

console.log(name)
console.log(remainingInfo)

console.log()

// ============================================================
// FINAL INDEPENDENT CHALLENGE
// ============================================================

// Create:
//
// updateInventory(product, change)
//
// product contains:
//
// name
// quantity
// price
//
// Requirements:
//
// 1. RETURN a NEW product object.
// 2. Update quantity by adding change.
// 3. Preserve name and price.
// 4. Never allow the new quantity below 0.
// 5. Do not mutate the original product.
// 6. Use object spread.
//
// If the update would produce a negative quantity,
// return a new object with quantity set to 0.
//
// You must:
//
// - Write the function yourself.
// - Create your own product object.
// - Write at least FIVE test cases.
// - Include positive, negative, zero, and boundary changes.
// - Verify that the original object remains unchanged.
//
// CODE HERE:

//function updateInventory(product, change)
//{
//    const proposedQuantity = product.quantity + change;
//    let finalQuantity;
//    if (proposedQuantity <= 0)
//    {
//        finalQuantity = 0;
//    }
//    else finalQuantity = proposedQuantity;
//
//    const newProduct = {
//        ...product,
//        quantity: finalQuantity
//    }
//    return newProduct;
//}

function updateInventory(product, change)
{
    const newProduct = {
        ...product,
        quantity: Math.max(0, product.quantity + change)
    }
    return newProduct;
}

const product = {
    name: "milk",
    quantity: 10,
    price: 5
}

console.log(updateInventory(product, 5))
console.log(updateInventory(product, -10))
console.log(updateInventory(product, 0))
console.log(updateInventory(product, -11))
const product2 = { name: "pillow", quantity: 3, price: 10 }
console.log(updateInventory(product2, 2))
console.log(updateInventory(product2, -4))
console.log(product)
console.log(product2)
console.log()
// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent — no solution assistance
// 🟡 Assisted — implementation-specific hints
// 🔴 Solution — AI provided substantial code
//
// Answer:
// AI Usage: 🟡 Assisted
//
// Completed destructuring, spread/rest, and levelUp()
// independently.
//
// Needed implementation-specific hints for updateInventory(),
// particularly around avoiding mutation, handling negative
// quantities, and returning the updated object.
//
// Wrote the final implementation and test cases myself.