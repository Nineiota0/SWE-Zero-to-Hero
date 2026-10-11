// ============================================================
// SWE REBUILD — DAY 6
// Exercise 2: Independent Object Challenges
//
// Goal:
// Translate written requirements into working JavaScript.
//
// Rules:
// 1. Write all functions yourself.
// 2. Create all objects yourself.
// 3. Design your own test cases.
// 4. Do not use AI-generated implementations.
// 5. Test boundaries and unexpected inputs.
// ============================================================


// ============================================================
// CHALLENGE 1 — Employee Performance Evaluator
// ============================================================

// SCENARIO:
//
// You're building a small employee management system.
//
// Each employee is represented by an object containing:
//
// name          -> string
// performance   -> number (0–100)
// isActive      -> boolean
// yearsWorked   -> number
//
// Your task is to create a function that evaluates an
// employee's performance and returns a classification.


// ------------------------------------------------------------
// PART A — Write the function
// ------------------------------------------------------------

// Function name:
//
// evaluateEmployee
//
// Parameters:
//
// employee
//
// RETURN one of these strings:
//
// "Inactive"
//     If the employee is not active.
//     This rule takes priority over everything else.
//
// "Outstanding"
//     If active AND performance >= 90.
//
// "Good"
//     If active AND performance >= 70 but below 90.
//
// "Needs Improvement"
//     If active AND performance >= 50 but below 70.
//
// "Unsatisfactory"
//     If active AND performance < 50.
//
// IMPORTANT:
//
// - Do not print inside the function.
// - Do not modify the employee object.
// - Assume all input properties contain valid values.
// - You decide how to structure the conditionals.


// CODE HERE:

function evaluateEmployee(employee)
{
    if (employee.isActive === false) return "Inactive";
    else if (employee.performance >= 90) return "Outstanding";
    else if (employee.performance >= 70) return "Good";
    else if (employee.performance >= 50) return "Needs Improvement";
    else return "Unsatisfactory"
}

// ------------------------------------------------------------
// PART B — Create your own employee objects
// ------------------------------------------------------------

// Create at least FIVE different employee objects.
//
// Each object must contain:
//
// name
// performance
// isActive
// yearsWorked
//
// Make sure your objects cover different classifications.
//
// Do not copy the examples from Exercise 1.

// CODE HERE:

const employee = {
    name: "NineIota",
    performance: 100,
    isActive: true,
    yearsWorked: 4
}

const employee1 = {
    name: "Jason",
    performance: 89,
    isActive: true,
    yearsWorked: 2
}

const employee2 = {
    name: "Emily",
    performance: 69,
    isActive: true,
    yearsWorked: 6
}

const employee3 = {
    name: "Ryu",
    performance: 49,
    isActive: true,
    yearsWorked: 10
}

const employee4 = {
    name: "Tammy",
    performance: 100,
    isActive: false,
    yearsWorked: 1
}

const employee5 = {
    name: "Aiden",
    performance: 70,
    isActive: true,
    yearsWorked: 1
}

// ------------------------------------------------------------
// PART C — Write your own test cases
// ------------------------------------------------------------

// Write at least SIX tests using console.log().
//
// You decide which objects to pass into evaluateEmployee.
//
// Your tests should verify:
//
// - Every possible classification.
// - An inactive employee with excellent performance.
// - At least one boundary value.
//
// Before running, write your expected output in a comment.
//
// Example format ONLY:
//
// console.log(yourFunction(yourObject)); // Expected: ...
//
// You must create the actual tests yourself.

// CODE HERE:

console.log(evaluateEmployee(employee)) // Outstanding
console.log(evaluateEmployee(employee1)) // Good
console.log(evaluateEmployee(employee2)) // Beeds Improvement
console.log(evaluateEmployee(employee3)) // Unsatisfactory
console.log(evaluateEmployee(employee4)) // Inactive
console.log(evaluateEmployee(employee5)) // Good

console.log(evaluateEmployee({
    name: "Alice",
    performance: 50,
    isActive: true,
    yearsWorked: 0
})) // Needs Improvement

// ------------------------------------------------------------
// PART D — Test your understanding
// ------------------------------------------------------------

// Without changing evaluateEmployee:
//
// What happens if an employee has:
//
// performance = 90
// isActive = false
//
// Write your prediction before testing.
//
// Prediction: will return Inactive since my code checks if employee is active or not
// despite their performance
//
// Actual:
const testEmployee = {
    name: "Nina",
    performance: 90,
    isActive: false,
    yearsWorked: 1
}

console.log(evaluateEmployee(testEmployee))
console.log()

// ============================================================
// CHALLENGE 2 — Bank Account Manager
// ============================================================

// SCENARIO:
//
// You're building a simple banking application.
//
// A bank account is represented by an object containing:
//
// owner       -> string
// balance     -> number
// isActive    -> boolean
//
// Your task is to write functions that update the SAME
// bank account object.
//
// Unlike Challenge 1, mutation is REQUIRED here.


// ------------------------------------------------------------
// PART A — Create the account
// ------------------------------------------------------------

// Create an object named:
//
// account
//
// Include all three required properties.
//
// Choose your own starting balance.


// CODE HERE:

const account = {
    owner: "NineIota",
    balance: 1000000,
    isActive: true
}

// ------------------------------------------------------------
// PART B — Deposit Function
// ------------------------------------------------------------

// Function name:
//
// deposit
//
// Parameters:
//
// account
// amount
//
// Requirements:
//
// 1. If the account is inactive, return:
//    "Account inactive"
//
// 2. If amount <= 0, return:
//    "Invalid amount"
//
// 3. Otherwise:
//    - Increase account.balance by amount.
//    - Return the updated balance.
//
// IMPORTANT:
//
// Modify the existing account object.
// Do NOT create a replacement object.
// Do NOT print inside the function.


// CODE HERE:

function deposit(account, amount)
{
    if (account.isActive === false) return "Account inactive";
    else if (amount <= 0) return "Invalid amount";
    else
    {
        account.balance += amount;
        return account.balance;
    }
}

// ------------------------------------------------------------
// PART C — Withdraw Function
// ------------------------------------------------------------

// Function name:
//
// withdraw
//
// Parameters:
//
// account
// amount
//
// Requirements:
//
// 1. If the account is inactive, return:
//    "Account inactive"
//
// 2. If amount <= 0, return:
//    "Invalid amount"
//
// 3. If amount exceeds account.balance, return:
//    "Insufficient funds"
//
// 4. Otherwise:
//    - Decrease account.balance by amount.
//    - Return the updated balance.
//
// IMPORTANT:
//
// - Do not allow a negative balance.
// - Do not modify the balance when an operation fails.
// - Do not print inside the function.


// CODE HERE:

function withdraw(account, amount)
{
    if (account.isActive === false) return "Account inactive";
    else if (amount <= 0) return "Invalid amount";
    else if (amount > account.balance) return "Insufficient funds";
    else
    {
        account.balance -= amount;
        return account.balance;
    }
}

// ------------------------------------------------------------
// PART D — Create your own test cases
// ------------------------------------------------------------

// Write at least EIGHT tests.
//
// Your tests should cover:
//
// - A successful deposit.
// - A successful withdrawal.
// - A withdrawal larger than the available balance.
// - A zero-amount deposit.
// - A negative-amount withdrawal.
// - A withdrawal equal to the exact balance.
// - An operation on an inactive account.
// - The final balance of the original account.
//
// IMPORTANT:
//
// The operations modify the SAME account object.
//
// This means the ORDER of your tests matters.
//
// Before running each test, predict:
// - What the function returns.
// - What the account balance becomes.
//
// You're responsible for constructing the test calls.


// CODE HERE:

console.log(deposit(account, 500)) // 1000500
console.log(withdraw(account, 200)) // 1000300
console.log(withdraw(account, 2000000)) // Insufficient funds
console.log(deposit(account, 0)) // Invalid amount
console.log(withdraw(account, -200)) // Invalid amount
console.log(withdraw(account, 1000300)) // 0

// - An operation on an inactive account.
const inactiveAcc = {
    owner: "Minh",
    balance: 20,
    isActive: false
}

console.log(withdraw(inactiveAcc, 20)) // Account inactive


// case using this format since I was curious
console.log(withdraw({
    owner: "Thai",
    balance: 20,
    isActive: true
}, 20)) // 0

console.log(account.balance) // 0

// ============================================================
// FINAL CHALLENGE — Explain the difference
// ============================================================

// You wrote two different kinds of functions today:
//
// evaluateEmployee(employee)
//
// deposit(account, amount)
// withdraw(account, amount)
//
// One reads object properties without changing them.
//
// The others modify object properties.
//
// In your own words:
//
// Why does the original account's balance change after
// calling deposit() or withdraw(), while evaluateEmployee()
// does not change the employee object?
//
// Answer: The original account's balance changes after calling either function since we are passing
// another parameter that allows us to mutate/ change the account's balance, that being "amount"
// evaluateEmployee() does not pass an extra parameter nor does it perform any operations on the
// employee object that would change it. So basically it just reads the object's properties
// but never assigns any new values to them, while deposit() and withdraw() do to account.balance.

// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent — no solution assistance
// 🟡 Assisted — implementation-specific hints
// 🔴 Solution — AI provided substantial code
//
// Answer: 🟢 Independent
