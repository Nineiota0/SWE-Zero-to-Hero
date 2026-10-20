const assert = require("node:assert/strict");

// ============================================================
// SWE REBUILD — DAY 10
// Exercise 3: Independent Engineering & Testing Lab
//
// PROJECT: User Activity Tracker
//
// Concepts:
// - Set
// - Map
// - Functions
// - Arrays
// - Iteration
// - Automated assertions
// - Independent test design
// ============================================================

const { log, count } = require("node:console");


// ============================================================
// PART A — Get Unique Users
// ============================================================

// Function:
//
// getUniqueUsers(logins)
//
// REQUIREMENTS:
//
// 1. Accept an array of usernames.
// 2. RETURN a NEW array containing unique usernames.
// 3. Preserve the order of their first appearance.
// 4. Use Set.
// 5. Do not modify the original array.
// 6. Return [] if the input array is empty.
//
// IMPORTANT:
//
// - Do not use filter().
// - Do not use a traditional loop.
// - You may use spread syntax.
//
// Write the entire function yourself.

// CODE HERE:

function getUniqueUsers(logins)
{
    if (logins.length === 0) return [];
    return [...new Set(logins)];
}

// ============================================================
// PART B — Count User Logins
// ============================================================

// Function:
//
// countLogins(logins)
//
// REQUIREMENTS:
//
// 1. Accept an array of usernames.
// 2. RETURN a Map.
// 3. Each key must be a username.
// 4. Each value must be the number of times that
//    username appears in the array.
// 5. Use Map methods.
// 6. Do not modify the original array.
// 7. Return an empty Map if logins is empty.
//
// IMPORTANT:
//
// - Do not use a regular object {} for counting.
// - You may use loops.
// - You may use get(), has(), and set().
// - Preserve the order of first appearance.
//
// Think about:
//
// What should happen when a username is encountered
// for the FIRST time?
//
// What should happen when that username appears AGAIN?
//
// Write the implementation yourself.


// CODE HERE:

function countLogins(logins)
{
    if (logins.length === 0) return new Map();

    const loginCounts = new Map();
    for (const username of logins)
    {
        if (loginCounts.has(username))
        {
            loginCounts.set(username, loginCounts.get(username) + 1);
        }
        else loginCounts.set(username, 1);
    }
    return loginCounts;
}

// ============================================================
// PART C — Retrieve Login Count
// ============================================================

// Function:
//
// getLoginCount(loginMap, username)
//
// REQUIREMENTS:
//
// 1. Accept a Map and a username.
// 2. RETURN the number of logins for that username.
// 3. If the username does not exist, return 0.
// 4. Do not modify the Map.
//
// IMPORTANT:
//
// - Use Map methods.
// - Do not use a loop.
// - Do not convert the Map into an object.


// CODE HERE:

function getLoginCount(loginMap, username)
{
    if (loginMap.has(username))
    {
        return loginMap.get(username);
    }
    return 0;
}

// ============================================================
// PART D — Find Frequent Users
// ============================================================

// Function:
//
// getFrequentUsers(loginMap, minimum)
//
// REQUIREMENTS:
//
// 1. Accept a Map of username -> login count.
// 2. RETURN a NEW array containing usernames whose
//    login count is >= minimum.
// 3. Preserve the Map's iteration order.
// 4. Return [] if no users meet the threshold.
// 5. Do not modify the original Map.
//
// IMPORTANT:
//
// - Use Map iteration.
// - Do not use a regular object.
// - Return usernames, NOT their login counts.
//
// Think about how to extract each key-value pair.


// CODE HERE:

function getFrequentUsers(loginMap, minimum)
{
    const frequentUsers = [];
    for (const [username, count] of loginMap)
    {
        if (count >= minimum)
        {
            frequentUsers.push(username);
        }
    }
    return frequentUsers;
}

// ============================================================
// PART E — Create Your Own Login Dataset
// ============================================================

// Create an array named loginHistory.
//
// REQUIREMENTS:
//
// - At least 12 login records.
// - At least 4 unique usernames.
// - At least one username appears only once.
// - At least one username appears 3 or more times.
//
// Choose your own usernames and login order.
//
// IMPORTANT:
//
// Do not copy the example dataset from the scenario.


// CODE HERE:

const loginHistory = [
    "NineIota",
    "Jason",
    "Emily",
    "Thai",
    "Jason",
    "Jason",
    "Thai",
    "Kianna",
    "NineIota",
    "Jason",
    "Kianna",
    "Thai",
    "Jason",
    "Ryu",
    "Ryu",
    "Tammy"
];

// ============================================================
// PART F — Independent Testing
// ============================================================

// Write at least TEN test cases across all four functions.
//
// You must cover:
//
// 1. Unique usernames from repeated logins.
// 2. Unique usernames from an empty array.
// 3. Correct login counts for multiple users.
// 4. A username that appears only once.
// 5. A username that does not exist.
// 6. Frequent users with minimum = 2.
// 7. Frequent users with minimum = 3.
// 8. A threshold that no user reaches.
// 9. An empty login Map.
// 10. Verification that the original loginHistory
//     remains unchanged.
//
// ADDITIONAL CHALLENGE:
//
// Test minimum = 0.
//
// Remember: getFrequentUsers() receives a Map.
// Think about whether users absent from the Map
// should appear in the result.
//
// BEFORE running each test:
//
// Write down the expected result.
//
// You decide how to organize the tests.

// functions:
//
// getUniqueUsers(logins)
// countLogins(logins)
// getLoginCount(loginMap, username)
// getFrequentUsers(loginMap, minimum)

// CODE HERE:

//1
console.log(getUniqueUsers(loginHistory)) // 'NineIota', 'Jason', 'Emily',    'Thai', 'Kianna',   'Ryu', 'Tammy'

console.log()

//2
const emptyArray = [];
console.log(getUniqueUsers(emptyArray)) // []

console.log()

//3
console.log(countLogins(loginHistory)) // 'NineIota' => 2, 'Jason' => 5, 'Emily' => 1, 'Thai' => 3, 'Kianna' => 2, 'Ryu' => 2, 'Tammy' => 1

console.log()

//4
const userLoginMap = countLogins(loginHistory); // creates map for loginHistory
console.log(getLoginCount(userLoginMap, "Emily")) // 1
//5
console.log(getLoginCount(userLoginMap, "Hoa")) // 0

console.log()

//6
console.log(getFrequentUsers(userLoginMap, 2)) // [ 'NineIota', 'Jason', 'Thai', 'Kianna', 'Ryu' ]
//7
console.log(getFrequentUsers(userLoginMap, 3)) // Jason and Thai
console.log(getFrequentUsers(userLoginMap, 0)) // Should list all users

//8
console.log(getFrequentUsers(userLoginMap, 10)) // []
console.log()

//9
const emptyMap = new Map();
console.log(getFrequentUsers(emptyMap, 2))// []
console.log(getFrequentUsers(emptyMap, 0))// []

//10
const originalSnapshot = structuredClone(loginHistory);

getUniqueUsers(loginHistory)
countLogins(loginHistory)

const userLoginMapClone = countLogins(loginHistory)
assert.deepStrictEqual(loginHistory, originalSnapshot);

const mapSnapshot = structuredClone(userLoginMapClone)
getLoginCount(userLoginMapClone, "NineIota")
getFrequentUsers(userLoginMapClone, 2)

assert.deepStrictEqual(userLoginMapClone, mapSnapshot);

// ============================================================
// PART G — Automated Assertions
// ============================================================

// Import Node's strict assertion library.
//
// REQUIREMENTS:
//
// 1. Use require("node:assert/strict").
// 2. Write at least SIX assertions.
// 3. Use assert.equal() for primitive values.
// 4. Use assert.deepStrictEqual() for arrays and Maps.
// 5. Include at least one empty-input assertion.
// 6. Include at least one missing-user assertion.
//
// IMPORTANT:
//
// Write the assertions yourself.
//
// Do not simply repeat console.log() without
// checking expected values.


// CODE HERE:



// ============================================================
// PART H — Verify No Mutation
// ============================================================

// Confirm that your functions do not modify their inputs.
//
// REQUIREMENTS:
//
// 1. Create a snapshot of loginHistory BEFORE testing.
// 2. Create a snapshot of a login-count Map.
// 3. Execute all four functions with the relevant inputs.
// 4. Compare both original data structures against
//    their snapshots.
//
// You may use:
//
// structuredClone()
// assert.deepStrictEqual()
//
// IMPORTANT:
//
// Verify both the array and the Map.
//
// CODE HERE:




// ============================================================
// PART I — Independent Debugging
// ============================================================

// Temporarily introduce ONE intentional bug into
// one of your functions.
//
// Examples of bug categories:
//
// - Incorrect comparison operator
// - Incorrect starting count
// - Incorrect return value
//
// REQUIREMENTS:
//
// 1. Predict which test should fail.
// 2. Run your assertions.
// 3. Read the AssertionError.
// 4. Identify the incorrect behavior.
// 5. Fix the bug.
// 6. Run the assertions again.
//
// Record:
//
// Bug introduced:
//
// Expected failure:
//
// Actual error:
//
// Fix:
//
// Do not leave the intentional bug in your final code.




// ============================================================
// FINAL REFLECTION
// ============================================================

// 1. Which function was most challenging to implement?
//
// 2. Did your test cases reveal any unexpected behavior?
//
// 3. When would you choose Set instead of Map?
//
// Answer only what was meaningful to your learning.
//
// NOTES:




// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent — No implementation assistance
// 🟡 Assisted — Implementation-specific hints
// 🔴 Solution — AI provided implementation
//
// Answer:
