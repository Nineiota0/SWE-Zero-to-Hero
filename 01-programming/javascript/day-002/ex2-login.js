// ============================================================
// SWE Rebuild — Day 2
// Challenge: Simple Login Validator
// ============================================================


// ------------------------------------------------------------
// Scenario
// ------------------------------------------------------------

// You're building part of a login system.
//
// A user provides:
//
// - username
// - password
// - account status
//
// The login should succeed ONLY if:
//
// 1. username is not empty
// 2. password is not empty
// 3. account is active
//
// Otherwise login should fail.

const username = "NineIota";
const password = "javascript123";
const isActive = true;


// ------------------------------------------------------------
// Prediction
// ------------------------------------------------------------

// With the values above, should login succeed?
//
// Answer:




// ------------------------------------------------------------
// Implementation
// ------------------------------------------------------------

// Requirements:
//
// Use ONE if/else statement.
//
// Try to take advantage of what you learned about truthiness.
//
// Print:
//
// "Login successful"
//
// OR
//
// "Login failed"


// CODE HERE:






// ------------------------------------------------------------
// Test Cases
// ------------------------------------------------------------

// After your implementation works, test:
//
// TEST 1
// username = "NineIota"
// password = "javascript123"
// isActive = true
//
// Expected:
//


// TEST 2
// username = ""
// password = "javascript123"
// isActive = true
//
// Expected:
//


// TEST 3
// username = "NineIota"
// password = ""
// isActive = true
//
// Expected:
//


// TEST 4
// username = "NineIota"
// password = "javascript123"
// isActive = false
//
// Expected:
//


// TEST 5
// username = ""
// password = ""
// isActive = false
//
// Expected:




// ------------------------------------------------------------
// Reflection
// ------------------------------------------------------------

// 1. Explain your if-condition in plain English.
//
// Answer:




// 2. Why can you check `username` directly instead of writing
//    something like:
//
//    username !== ""
//
// Answer:




// 3. What would happen if username contained:
//
//    "0"
//
// Would it be truthy or falsy?
//
// Prediction:
//
// Why?




// 4. What's the difference between:
//
//    false
//
// and:
//
//    "false"
//
// Answer: