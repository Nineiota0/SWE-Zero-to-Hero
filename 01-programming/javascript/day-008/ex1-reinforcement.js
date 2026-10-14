// ============================================================
// SWE REBUILD — DAY 8
// Exercise 1: Independent Reinforcement
// Challenge 1 — Player Health Manager
// ============================================================


// ============================================================
// PART A — Function Implementation
// ============================================================

// SCENARIO:
//
// You are building a game system where players can
// receive damage or healing.
//
// Each player is represented by an object containing:
//
// username -> string
// level    -> number
// health   -> number
//
// Create:
//
// updateHealth(player, change)
//
// REQUIREMENTS:
//
// 1. Return a NEW player object.
// 2. Update health by adding change.
// 3. Health cannot exceed 100.
// 4. Health cannot fall below 0.
// 5. Preserve username and level.
// 6. Do NOT modify the original player.
// 7. Use object spread.
//
// Assume the starting health is between 0 and 100,
// and change is a valid number.
//
// IMPORTANT:
//
// Write the entire function yourself.
// No implementation structure is provided.


// CODE HERE:

function updateHealth(player, change)
{
    const newHealth = {
        ...player,
        health: Math.min(Math.max(0, player.health + change), 100)
    }
    return newHealth;
}

// ============================================================
// PART B — Create Your Own Objects
// ============================================================

// Create at least TWO player objects.
//
// Choose your own:
// - usernames
// - levels
// - starting health values
//
// Both objects must have all three required properties.


// CODE HERE:

const player1 = {
    username: "NineIota",
    level: 10,
    health: 100
}

const player2 = {
    username: "Suzy",
    level: 20,
    health: 50
}

// ============================================================
// PART C — Independent Test Cases
// ============================================================

// Write at least SIX tests.
//
// Your tests must cover:
//
// 1. Normal healing
// 2. Normal damage
// 3. Healing beyond maximum health
// 4. Damage below zero health
// 5. Zero change
// 6. An exact boundary (0 or 100)
//
// BEFORE running each test:
//
// Write the expected returned health.
//
// Also verify:
//
// - The original player's health remains unchanged.
// - The returned object is a different object.
//
// You decide how to structure the tests.


// CODE HERE:

console.log(updateHealth(player1, 50)) // 100
console.log(updateHealth(player1, -101)) // 0
console.log(updateHealth(player2, 40)) // 90
console.log(updateHealth(player2, -20)) // 30
console.log(updateHealth(player1, 0)) // 100
console.log(updateHealth(player1, 100)) // 100
console.log(updateHealth(player2, -50)) // 0
console.log(updateHealth(player2, 60)) // 100
console.log()

console.log(player1) // 100
console.log(player2) // 50

const updatedHealth = updateHealth(player1, 0);
console.log(player1 === updatedHealth) // false
// ============================================================
// PART D — Debugging / Verification
// ============================================================

// After running your tests:
//
// 1. Did every result match your prediction?
// 2. Did the original objects remain unchanged?
// 3. Did your function return NEW objects?
//
// Only document unexpected behavior or bugs.
//
// NOTES:




// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent

console.log()
// ============================================================
// CHALLENGE 2 — Product Price Manager
// ============================================================

// SCENARIO:
//
// You are working on a small online store.
//
// Each product is represented by an object containing:
//
// name     -> string
// price    -> number
// category -> string
//
// Create:
//
// updatePrice(product, adjustment)
//
// REQUIREMENTS:
//
// 1. Return a NEW product object.
// 2. Update price by adding adjustment.
// 3. Price cannot fall below 0.
// 4. Preserve name and category.
// 5. Do NOT modify the original product.
// 6. Use object spread.
//
// Assume price and adjustment are valid numbers.
//
// If the adjusted price would be negative,
// the returned price must be 0.


// ============================================================
// PART A — Function Implementation
// ============================================================

// Write updatePrice yourself.
//
// Do not reuse code copied from updateInventory().
// Try to reconstruct the logic from understanding.


// CODE HERE:

function updatePrice(product, adjustment)
{
    const proposedAdjustment = product.price + adjustment;
    let finalAdjustment;

    if (proposedAdjustment >= 0)
    {
        finalAdjustment = proposedAdjustment;
    }
    else
    {
        finalAdjustment = 0;
    }

    const newProduct = {
        ...product,
        price: finalAdjustment
    }
    return newProduct;
}

// ============================================================
// PART B — Create Your Own Products
// ============================================================

// Create at least TWO product objects.
//
// Each must contain:
// - name
// - price
// - category
//
// Choose your own values.


// CODE HERE:

const product1 = {
    name: "ball",
    price: 2,
    category: "toy"
}

const product2 = {
    name: "water bottle",
    price: 5,
    category: "beverage"
}

// ============================================================
// PART C — Independent Test Cases
// ============================================================

// Write at least SIX tests covering:
//
// 1. Price increase
// 2. Price decrease
// 3. Adjustment of 0
// 4. Adjustment producing exactly 0
// 5. Adjustment producing a negative price
// 6. A second product with different values
//
// Predict the expected results before running.
//
// Verify:
// - Original objects remain unchanged.
// - Returned objects have the correct properties.
// - Returned objects are new objects.


// CODE HERE:

console.log(updatePrice(product1, 1)) // { name: 'ball', price: 3, category: 'toy' }
console.log(updatePrice(product2, 100)) // { name: 'water bottle', price: 105, category: 'beverage' }

console.log(updatePrice(product1, -2)) // { name: 'ball', price: 0, category: 'toy' }
console.log(updatePrice(product2, -2)) // { name: 'water bottle', price: 3, category: 'beverage' }

console.log(updatePrice(product1, 0)) // { name: 'ball', price: 2, category: 'toy' }
console.log(updatePrice(product2, -6)) // { name: 'water bottle', price: 0, category: 'beverage' }

console.log(product1) // { name: 'ball', price: 2, category: 'toy' }
console.log(product2) // { name: 'water bottle', price: 5, category: 'beverage' }

const newProduct1 = updatePrice(product1, 0)
console.log (newProduct1 === product1) // false

const newProduct2 = updatePrice(product2, 0)
console.log (newProduct2 === product2) // false

// ============================================================
// PART D — Testing Notes
// ============================================================

// Record only actual mistakes or unexpected behavior.
//
// NOTES:




// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
