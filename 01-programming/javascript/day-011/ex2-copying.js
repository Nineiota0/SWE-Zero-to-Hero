const assert = require("node:assert/strict");

// ============================================================
// SWE REBUILD — DAY 11
// Exercise 2: Shallow vs. Deep Copying
//
// Topics:
// - Object spread
// - Nested references
// - structuredClone()
// - Arrays containing objects
// - Immutable nested updates
// ============================================================


// ============================================================
// PART A — Shallow Copy Fundamentals
// ============================================================

// Given:

const player = {
    username: "NineIota",
    level: 10,
    stats: {
        health: 100,
        stamina: 50
    }
};


// ------------------------------------------------------------
// A1 — Create a Shallow Copy
// ------------------------------------------------------------

// Create a NEW object named shallowPlayer.
//
// Requirements:
// - Use spread syntax.
// - Do not use structuredClone().
// - Do not modify player.
//
// Print both objects.

// CODE HERE:

const shallowPlayer = { ...player };
console.log(player)
console.log(shallowPlayer)
console.log()

// ------------------------------------------------------------
// A2 — Object Identity Predictions
// ------------------------------------------------------------

// Using player and shallowPlayer:
//
// Predict the following:
//
// player === shallowPlayer
//
// Prediction: false
//
// player.stats === shallowPlayer.stats
//
// Prediction: true -> cecause spread creates shallow copy, copying outer obj properties but nested are still shared references
//
// Use console.log() to verify both predictions.

// CODE HERE:

console.log(player === shallowPlayer)
console.log(player.stats === shallowPlayer.stats)
console.log()

// ------------------------------------------------------------
// A3 — Nested Mutation
// ------------------------------------------------------------

// Change shallowPlayer.stats.health to 25.
//
// BEFORE running:
//
// Predict:
//
// player.stats.health = ?
// shallowPlayer.stats.health = ?
//
// Prediction: both change to 25 since nested objs are still shared refs
//
// Print both values.
//
// IMPORTANT:
// Do not fix the shared-reference behavior yet.
// We want to observe it.

// CODE HERE:

shallowPlayer.stats.health = 25;
console.log(player.stats.health)
console.log(shallowPlayer.stats.health)
console.log()

// ============================================================
// PART B — Deep Copying
// ============================================================

// Given:

const originalUser = {
    name: "Alice",
    preferences: {
        theme: "dark",
        notifications: true
    },
    skills: ["JavaScript", "React"]
};


// ------------------------------------------------------------
// B1 — Create a Deep Copy
// ------------------------------------------------------------

// Create a NEW object named deepCopiedUser.
//
// Requirements:
// - Use structuredClone().
// - Do not modify originalUser.
//
// CODE HERE:

const deepCopiedUser = structuredClone(originalUser);

// ------------------------------------------------------------
// B2 — Modify the Deep Copy
// ------------------------------------------------------------

// Using deepCopiedUser:
//
// 1. Change preferences.theme to "light".
// 2. Add "Node.js" to the skills array.
// 3. Print originalUser.
// 4. Print deepCopiedUser.
//
// BEFORE running:
//
// Predict the original user's theme and skills.
//
// Prediction: The original user's attributes will stay the same but deepCopiedUser will be changed since we made a deep copy and modified teh values
//
// CODE HERE:

deepCopiedUser.preferences.theme = "light";
deepCopiedUser.skills.push("Node.js");

console.log(deepCopiedUser)
console.log(originalUser)
console.log()

// ------------------------------------------------------------
// B3 — Verify Object Identity
// ------------------------------------------------------------

// Predict the results:
//
// originalUser === deepCopiedUser
//
// Prediction: false
//
// originalUser.preferences === deepCopiedUser.preferences
//
// Prediction: false
//
// originalUser.skills === deepCopiedUser.skills
//
// Prediction: false
//
// Verify using console.log().

// CODE HERE:

console.log(originalUser === deepCopiedUser)
console.log(originalUser.preferences === deepCopiedUser.preferences)
console.log(originalUser.skills === deepCopiedUser.skills)
console.log()

// ============================================================
// PART C — Arrays Containing Objects
// ============================================================

// Given:

const products = [
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 25 }
];


// ------------------------------------------------------------
// C1 — Shallow Copy an Array
// ------------------------------------------------------------

// Create a NEW array named copiedProducts.
//
// Requirements:
// - Use spread syntax.
// - Do not use structuredClone().
//
// Predict:
//
// products === copiedProducts
//
// Prediction: false
//
// products[0] === copiedProducts[0]
//
// Prediction: true
//
// Verify both comparisons.

// CODE HERE:

const copiedProducts = [...products];
console.log(products === copiedProducts)
console.log(products[0] === copiedProducts[0])
console.log()

// ------------------------------------------------------------
// C2 — Modify a Nested Object
// ------------------------------------------------------------

// Change copiedProducts[0].price to 100.
//
// BEFORE running:
//
// Predict:
//
// products[0].price = ?
// copiedProducts[0].price = ?
//
// Prediction: both values print to 100
//
// Print both values.

// CODE HERE:

copiedProducts[0].price = 100
console.log(products[0].price)
console.log(copiedProducts[0].price)
console.log()

// ============================================================
// PART D — Immutable Nested Updates
// ============================================================

// Given:

const account = {
    owner: "Alex",
    settings: {
        theme: "dark",
        language: "English"
    },
    balance: 100
};


// ------------------------------------------------------------
// D1 — Update Without Mutation
// ------------------------------------------------------------

// Create a NEW object named updatedAccount.
//
// Requirements:
//
// 1. Use spread syntax.
// 2. Preserve owner and balance.
// 3. Change settings.theme to "light".
// 4. Preserve settings.language.
// 5. Do NOT modify the original account.
// 6. Do NOT use structuredClone().
//
// IMPORTANT:
//
// You'll need to think about how to create a new
// outer object AND a new nested settings object.
//
// Do not write the solution using direct mutation.
//
// CODE HERE:

const updatedAccount = {
    ...account,
    settings: {
        ...account.settings,
        theme: "light"
    }
};
console.log(account.settings.theme);
console.log(updatedAccount.settings.theme);
console.log(updatedAccount);
console.log(account);
console.log();

// ------------------------------------------------------------
// D2 — Verify Your Implementation
// ------------------------------------------------------------

// Write tests to verify:
//
// 1. Original theme remains "dark".
// 2. Updated theme is "light".
// 3. Original and updated accounts are different objects.
// 4. Original and updated settings are different objects.
// 5. Both objects preserve owner and balance.
//
// Use console.log() or assertions.
//
// Write the tests yourself.

// CODE HERE:

console.log(account.settings.theme === "dark");
console.log(updatedAccount.settings.theme === "light");
console.log(account === updatedAccount);
console.log(account.settings === updatedAccount.settings);
console.log(account.owner === "Alex" && updatedAccount.owner === "Alex");
console.log(account.balance === 100 && updatedAccount.balance === 100);
console.log();

// ============================================================
// PART E — Independent Prediction Challenge
// ============================================================

// Predict BEFORE running.

const original = {
    name: "Alice",
    profile: {
        city: "Los Angeles"
    }
};

const copy = {
    ...original,
    name: "Bob"
};

copy.profile.city = "San Diego";

// E1. What is original.name?
//
// Prediction: "Alice"


// E2. What is original.profile.city?
//
// Prediction: "San Diego"


// E3. What is copy.name?
//
// Prediction: "Bob"


// E4. Are original.profile and copy.profile
//     the same object?
//
// Prediction: yes


// Verify your predictions.
//
// CODE HERE:

console.log(original.name)
console.log(original.profile.city)
console.log(copy.name)
console.log(copy.profile === original.profile)

// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
