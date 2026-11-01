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




// ------------------------------------------------------------
// A2 — Object Identity Predictions
// ------------------------------------------------------------

// Using player and shallowPlayer:
//
// Predict the following:
//
// player === shallowPlayer
//
// Prediction:
//
// player.stats === shallowPlayer.stats
//
// Prediction:
//
// Use console.log() to verify both predictions.

// CODE HERE:




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
// Prediction:
//
// Print both values.
//
// IMPORTANT:
// Do not fix the shared-reference behavior yet.
// We want to observe it.

// CODE HERE:




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
// Prediction:
//
// CODE HERE:




// ------------------------------------------------------------
// B3 — Verify Object Identity
// ------------------------------------------------------------

// Predict the results:
//
// originalUser === deepCopiedUser
//
// Prediction:
//
// originalUser.preferences === deepCopiedUser.preferences
//
// Prediction:
//
// originalUser.skills === deepCopiedUser.skills
//
// Prediction:
//
// Verify using console.log().

// CODE HERE:




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
// Prediction:
//
// products[0] === copiedProducts[0]
//
// Prediction:
//
// Verify both comparisons.

// CODE HERE:




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
// Prediction:
//
// Print both values.

// CODE HERE:




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
// Prediction:


// E2. What is original.profile.city?
//
// Prediction:


// E3. What is copy.name?
//
// Prediction:


// E4. Are original.profile and copy.profile
//     the same object?
//
// Prediction:


// Verify your predictions.
//
// CODE HERE:




// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer:
