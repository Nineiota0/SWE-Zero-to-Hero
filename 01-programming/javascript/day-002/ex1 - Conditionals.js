// ============================================================
// SWE Rebuild — Day 2
// Exercise 1: Conditionals & Truthiness
// ============================================================


// ------------------------------------------------------------
// PART A — Basic Conditionals
// ------------------------------------------------------------

// Instructions:
//
// You are given a temperature.
//
// Write an if / else-if / else chain that prints:
//
// "Cold"     if temperature is below 50
// "Moderate" if temperature is between 50 and 79 inclusive
// "Hot"      if temperature is 80 or higher

 const temperature = 72;
// const temperature = 49;
// const temperature = 50;
// const temperature = 79;
// const temperature = 80;

// CODE HERE:

if (temperature < 50)
{
    console.log("Cold")
}
else if (temperature >= 50 && temperature <= 79)
{
    console.log("Moderate")
}
else
{
    console.log("Hot")
}

// ------------------------------------------------------------
// Test Cases
// ------------------------------------------------------------

// After your first implementation works,
// manually change temperature and test:
//
// 49
// 50
// 79
// 80
//
// Question:
// Why are 49, 50, 79, and 80 particularly useful values to test?
//
// Answer:

// They are useful values to test because they test to see if they are under the below
// 50 range, inclusive within the 50 to 79 range and over the 79 inclusive range hitting
// all the thresholds for each conditional


// ------------------------------------------------------------
// PART B — Multiple Conditions
// ------------------------------------------------------------

// Instructions:
//
// A person can enter an event if:
//
// 1. They are at least 18 years old
// AND
// 2. They have a ticket.
//
// Using the variables below, write an if/else statement.
//
// Print:
//
// "Entry allowed"
//
// or
//
// "Entry denied"

const userAge = 20;
const hasTicket = true;
// 
// const userAge = 20;
// const hasTicket = false;
// 
// const userAge = 17;
// const hasTicket = true;
// 
// const userAge = 17;
// const hasTicket = false;

// Prediction before coding:
//
// Will this person be allowed inside?
//
// Answer: Yes this person would be allowed in since they meet both conditions


// CODE HERE:

if (userAge >= 18 && hasTicket)
{
    console.log("Entry allowed")
}
else
{
    console.log("Entry denied")
}

// ------------------------------------------------------------
// Testing
// ------------------------------------------------------------

// After it works, test these combinations:
//
// age = 20, hasTicket = true
// age = 20, hasTicket = false
// age = 17, hasTicket = true
// age = 17, hasTicket = false
//
// Do the results match what you expected?
//
// Answer: Yes the results works as I expected, After testing everything I had the following
// Allowed, Denied, Denied, Denied.




// ------------------------------------------------------------
// PART C — OR
// ------------------------------------------------------------

// Instructions:
//
// A user receives free shipping if:
//
// - they are a premium member
// OR
// - their order is at least $50.
//
// Print either:
//
// "Free shipping"
//
// or
//
// "Shipping fee required"

const isPremiumMember = false;
const orderTotal = 65;


// Prediction: This should print "Free Shipping" Since the order is at least 50
//
// What should this print?
//
// Answer: Free Shipping


// CODE HERE:

if (isPremiumMember || orderTotal >= 50)
{
    console.log("Free shipping")
}
else
{
    console.log("Shipping fee required")
}

// ------------------------------------------------------------
// Questions
// ------------------------------------------------------------

// 1. What operator did you use for AND?
//
// Answer: I used the && operator

// 2. What operator did you use for OR?
//
// Answer: I used the || operator

// 3. What operator would you use to reverse a boolean?
//
// Example concept:
//
// true  -> false
// false -> true
//
// Answer: I would use the not operator which would be putting ! in front of any other conditional

// ============================================================
// PART D — Truthiness Laboratory
// ============================================================

// JavaScript conditions do NOT necessarily require an actual
// boolean.
//
// JavaScript can interpret other values as either:
//
// truthy
//
// or
//
// falsy
//
// Your job is to experimentally determine how different values
// behave.


// ------------------------------------------------------------
// Experiment 1
// ------------------------------------------------------------

const value1 = 0;

// BEFORE RUNNING:
//
// Prediction: TRUTHY or FALSY? falsy
//
// Answer: falsy

// Instructions:
//
// Write an if/else statement.
//
// If value1 behaves as true, print:
//
// "value1 is truthy"
//
// Otherwise print:
//
// "value1 is falsy"

// CODE HERE:

if (value1)
{
    console.log("value1 is truthy")
}
else
{
    console.log("value1 is falsy")
}

// ------------------------------------------------------------
// Experiment 2
// ------------------------------------------------------------

const value2 = 1;

// Prediction: truthy
//
// Answer: truthy

// CODE HERE:

if (value2)
{
    console.log("value2 is truthy")
}
else
{
    console.log("value2 is falsy")
}

// ------------------------------------------------------------
// Experiment 3
// ------------------------------------------------------------

const value3 = -1;

// Prediction: falsy
//
// Answer: truthy

// CODE HERE:

if (value3)
{
    console.log("value3 is truthy")
}
else
{
    console.log("value3 is falsy")
}

// ------------------------------------------------------------
// Experiment 4
// ------------------------------------------------------------

const value4 = "";

// Prediction: falsy
//
// Answer: falsy

// CODE HERE:

if (value4)
{
    console.log("value4 is truthy")
}
else
{
    console.log("value4 is falsy")
}

// ------------------------------------------------------------
// Experiment 5
// ------------------------------------------------------------

const value5 = "hello";

// Prediction: truthy
//
// Answer: truthy

// CODE HERE:

if (value5)
{
    console.log("value5 is truthy")
}
else
{
    console.log("value5 is falsy")
}

// ------------------------------------------------------------
// Experiment 6
// ------------------------------------------------------------

const value6 = "false";

// IMPORTANT:
//
// Do not confuse the STRING "false"
// with the BOOLEAN false.
//
// Prediction: truthy
//
// Answer: truthy

// CODE HERE:

if (value6)
{
    console.log("value6 is truthy")
}
else
{
    console.log("value6 is falsy")
}

// ------------------------------------------------------------
// Experiment 7
// ------------------------------------------------------------

let value7;

// Prediction: falsy
//
// Answer: falsy

// CODE HERE:

if (value7)
{
    console.log("value7 is truthy")
}
else
{
    console.log("value7 is falsy")
}

// ------------------------------------------------------------
// Experiment 8
// ------------------------------------------------------------

const value8 = null;

// We haven't studied null yet.
//
// Don't research it yet.
// Just make a prediction and experiment.
//
// Prediction: falsy
//
// Answer: falsy

// CODE HERE:

if (value8)
{
    console.log("value8 is truthy")
}
else
{
    console.log("value8 is falsy")
}

// ------------------------------------------------------------
// Experiment 9
// ------------------------------------------------------------

const value9 = [];

// [] is an empty array.
//
// We haven't formally studied arrays yet.
//
// Prediction: falsy
//
// Answer: truthy


// CODE HERE:

if (value9)
{
    console.log("value9 is truthy")
}
else
{
    console.log("value9 is falsy")
}

// ------------------------------------------------------------
// Experiment 10
// ------------------------------------------------------------

const value10 = {};

// {} is an empty object.
//
// Prediction: falsy
//
// Answer: truthy

// CODE HERE:

if (value10)
{
    console.log("value10 is truthy")
}
else
{
    console.log("value10 is falsy")
}

// ============================================================
// ANALYSIS
// ============================================================

// Based ONLY on your experiments:
//
// Write every value that behaved as FALSY:
//
// Answer:

// value1, value4, value7 and value8 were all falsy according to the experiments

// Write every value that behaved as TRUTHY:
//
// Answer:

// value2, value3, value5, value6, value9 and value10 were all truthy according to the experiments

// Did anything surprise you?
//
// Answer:

// I was surprised that the negative number -1 gave us truthy, in c++ it would also count as a false flag.
// I was also surprised about values 9 and 10 where we had empty arrays and objects, I would have though
// those were to be falsy since they were empty.

// Based on the experiments, explain "truthy" and "falsy"
// in your own words.
//
// Do NOT look up a definition yet.
//
// Answer: Based on this experiemnt, without searching anything up, I would believe that 
// falsy would equate to anything that is otherwise null, empty or would be false flag like 0 or -1.
// However some experiments on here like -1 an empty object and array prove to be truthy so I believe
// falsy to be any value that is not defined/ decalred, so things like null, 0 or undefined.