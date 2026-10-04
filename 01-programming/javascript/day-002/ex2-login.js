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

// const username = "";
// const password = "javascript123";
// const isActive = true;

// const username = "NineIota";
// const password = "";
// const isActive = true;
// 
// const username = "NineIota";
// const password = "javascript123";
// const isActive = false;
// 
// const username = "";
// const password = "";
// const isActive = true;
// ------------------------------------------------------------
// Prediction
// ------------------------------------------------------------

// With the values above, should login succeed?
//
// Answer: Yes the given user information meets all the required information therefore login should succeed

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

if (username && password && isActive)
{
    console.log("Login successful")
}
else
{
    console.log("Login failed")
}

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
// Expected: Login successful
//


// TEST 2
// username = ""
// password = "javascript123"
// isActive = true
//
// Expected: Login failed (no username)
//


// TEST 3
// username = "NineIota"
// password = ""
// isActive = true
//
// Expected: login failed (no password)
//


// TEST 4
// username = "NineIota"
// password = "javascript123"
// isActive = false
//
// Expected: Login failed (not active)
//


// TEST 5
// username = ""
// password = ""
// isActive = false
//
// Expected: Login failed (none of the conditions are true)




// ------------------------------------------------------------
// Reflection
// ------------------------------------------------------------

// 1. Explain your if-condition in plain English.
//
// Answer: If there exists a username and password and the account is active then the login is successful, otherwise login fails

// 2. Why can you check `username` directly instead of writing
//    something like:
//
//    username !== ""
//
// Answer: We can check username directly using truthiness to see if the value is actaully there and filled out

// 3. What would happen if username contained:
//
//    "0"
//
// Would it be truthy or falsy?
//
// Prediction: Yes, login would be successful
//
// Why? This is because instead of taking a number, we are taking a string instead so truthiness would read that
// input as a string and see that it is not empty, null or unfilled.




// 4. What's the difference between:
//
//    false
//
// and:
//
//    "false"
//
// Answer: The first false is a boolean value and the other is a string.