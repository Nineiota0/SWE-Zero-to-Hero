// ============================================================
// SWE Rebuild — Day 3
// Exercise 1: switch
// ============================================================


// ============================================================
// PART A — Basic switch
// ============================================================

// Instructions:
//
// You are given a day number:
//
// 1 -> Monday
// 2 -> Tuesday
// 3 -> Wednesday
// 4 -> Thursday
// 5 -> Friday
// 6 -> Saturday
// 7 -> Sunday
//
// Using a switch statement, print the corresponding day.
//
// If the number is NOT 1 through 7, print:
//
// "Invalid day"
//
// Do NOT use if/else for this exercise.

const day = 2;

// Prediction:
//
// What should print with the current value?
//
// Answer: Wednesday should print the current value

// CODE HERE:

switch (day)
{
    case 1:
        console.log("Monday")
        break;

    case 2:
        console.log("Tuesday")
        break;

    case 3:
        console.log("Wednesday")
        break;

    case 4:
        console.log("Thursday")
        break;

    case 5:
        console.log("Friday")
        break;

    case 6:
        console.log("Saturday")
        break;

    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid Day")
}

console.log()
// ============================================================
// PART B — Testing default
// ============================================================

// Instructions:
//
// After Part A works, test your program using:
//
// day = 1
// day = 7
// day = 8
// day = 0
// day = -1
//
// NOTE:
//
// Because `day` is currently const, you'll need to manually
// change its original value rather than reassigning it later.
//
// Questions:
//
// 1. What happened for 8, 0, and -1?
//
// Answer:
// For days 8, 0 and -1 they all evaluated to invalid day
//
// 2. What purpose do you think `default` serves?
//
// Answer:
// Default serves as a case where if the value runs all the way through the cases
// and does not evaluate as true, default catches it and gives us a default answer
// in this case "Invalid Day"

// ============================================================
// PART C — What does break actually do?
// ============================================================

// IMPORTANT:
//
// Don't change this code initially.
//
// Predict its output BEFORE running it.


let fruit = "apple";
fruit = "banana";
fruit = "orange";


switch (fruit) {
    case "apple":
        console.log("Apple selected");
        break;

    case "banana":
        console.log("Banana selected");
        break;

    case "orange":
        console.log("Orange selected");
        break;
        
    default:
        console.log("Unknown fruit");
}

switch (fruit) {
    case "apple":
        console.log("Apple selected");

    case "banana":
        console.log("Banana selected");

    case "orange":
        console.log("Orange selected");

    default:
        console.log("Unknown fruit");
}

// ------------------------------------------------------------
// Prediction
// ------------------------------------------------------------

// EXACTLY what lines do you think will print?
//
// Answer: All the fruits will be printed
//
//
// Now run the program.
//
// Actual output: All the fruits were printed
//
//
// Did your prediction match?
//
// Answer: Yes
//
//
// Based ONLY on this experiment:
//
// What do you think happens when a case does NOT contain break?
//
// Answer: When a case does not contain break, the value falls through all the cases
// therefore all the fruits are printed out.

// ============================================================
// PART D — Fix the previous switch
// ============================================================

// Instructions:
//
// Modify the fruit switch above so that:
//
// fruit = "apple"
//
// prints ONLY:
//
// Apple selected
//
// Then test:
//
// "banana"
// "orange"
// "pear"
//
// Each valid fruit should print only its own message.
// Anything else should print:
//
// Unknown fruit
//
// NOTE:
//
// You may need to temporarily change fruit from const to let
// if you want to repeatedly reassign it while experimenting.


// What did you change?
//
// Answer: I added a break to all the cases
//
//
// Why did that fix the behavior?
//
// Answer: So it can break out and stop running the rest of the cases

console.log()
// ============================================================
// PART E — Intentional Fall-Through
// ============================================================

// Sometimes multiple cases SHOULD perform the same behavior.
//
// You are given a day name.
//
// Saturday and Sunday should print:
//
// "Weekend"
//
// Monday through Friday should print:
//
// "Weekday"
//
// Anything else should print:
//
// "Invalid day"
//
// REQUIREMENT:
//
// Try to avoid writing:
//
// console.log("Weekday")
//
// five separate times.
//
// Likewise, avoid writing "Weekend" twice.
//
// Hint:
//
// Think about what you just discovered happens when a case
// doesn't immediately break.


const dayName = "Sunday";


// Prediction:
//
// What should the current value print?
//
// Answer: Wednesday should print weekday


// CODE HERE:


switch (dayName)
{
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday")
        break;

    case "Saturday":
    case "Sunday":
        console.log("Weekend")
        break;

    default:
        console.log("Invalid day")
}



// ------------------------------------------------------------
// Questions
// ------------------------------------------------------------

// 1. How did fall-through help you avoid duplicated code?
//
// Answer: By using falling through we only need to print out the weekday once
// if the day of the week falls into a certain category we use that for weekend and weekday otherwise it falls to default
//
// 2. Was fall-through a bug in Part C but useful here?
//
// Answer: Yes it helped me understand how a value can go through case by case
//
//
// 3. What determines whether fall-through is intentional
//    or accidental?
//
// Answer: The order in which cases perform the same behavior. 


// ============================================================
// PART F — Strict Matching Experiment
// ============================================================

// Day 1 taught us:
//
// ==   -> loose equality / allows coercion
// ===  -> strict equality
//
// Let's investigate how switch behaves.
//
// Predict BEFORE running.


const mysteryValue = "5";

switch (mysteryValue) {
    case 5:
        console.log("Matched the NUMBER 5");
        break;

    case "5":
        console.log("Matched the STRING 5");
        break;

    default:
        console.log("No match");
}


// Prediction:
//
// Which case will execute?
//
// Answer: The 2nd case will execute and give us the string 5 print
//
//
// Actual: "Matched the STRING 5"
//
//
// Based on this experiment:
//
// Do you think switch behaves more like == or === ?
//
// Answer: Switches behaves more like === with strict equality
//
//
// Why?
//
// Answer: This is because if it did  use loose equality, the first case would have ran
// similar to how number 5 == "5" we would get that to be true. In strict equality we would have gotten false
// as a number does not match to a string.






// ============================================================
// PART G — switch vs if/else
// ============================================================

// Consider:
//
// const status = "pending";
//
// We want:
//
// "pending"  -> print "Waiting"
// "approved" -> print "Accepted"
// "rejected" -> print "Denied"
// anything else -> print "Unknown status"
//
//
// Do this TWICE.
//
// First implementation:
// use if / else-if / else.
//
// Second implementation:
// use switch.
//
// This isn't about finding the "correct" one.
// Compare how they feel to read.


// ------------------------------------------------------------
// Version 1 — if/else
// ------------------------------------------------------------

let status = "pending";
status = "approved";
status = "rejected";
status = "";


// CODE HERE:

if (status === "pending") console.log("Waiting")
else if (status === "approved") console.log("Accepted")
else if(status === "rejected") console.log("Denied")
else console.log("Unknown status")

console.log()
// ------------------------------------------------------------
// Version 2 — switch
// ------------------------------------------------------------

// CODE HERE:

switch(status)
{
    case "pending":
        console.log("Waiting")
        break;
    
    case "approved":
        console.log("Accepted")
        break;

    case "rejected":
        console.log("Denied")
        break;

    default:
        console.log("Unknown status")
}

// ------------------------------------------------------------
// Reflection
// ------------------------------------------------------------

// 1. Which version was easier for YOU to read?
//
// Answer: I honestly like the look of how the switch statements look, but I personally feel
// better using if else statements since I am so used to them
//
// 2. What kind of problem seems well-suited for switch?
//
// Answer: Switch statements seem better suited for checking single variables against a 
// fixed list of specific values while if/else statements are more so used to evaluate more complex conditions and ranges
//
// 3. What kind of condition might be easier with if/else?
//
// Think about conditions such as:
//
// age >= 18
// temperature > 80 && isSunny
//
// Answer: Like I said above more complex boolean conditions and continuous ranges.

console.log()
// ============================================================
// PART H — Mini Challenge
// ============================================================

// Build a very small command handler.
//
// Imagine a user enters one of these commands:
//
// "start"
// "stop"
// "pause"
// "resume"
//
// Your program should print:
//
// start  -> "Starting system..."
// stop   -> "Stopping system..."
// pause  -> "Pausing system..."
// resume -> "Resuming system..."
//
// Anything else:
//
// "Unknown command"
//
//
// REQUIREMENTS:
//
// - Use switch.
// - Handle every command.
// - Include a default case.
// - Make sure commands don't accidentally fall through.


let command = "pause";
command = "start";
command = "resume";
command = "stop";
command = "";

// CODE HERE:

switch (command)
{
    case "start":
        console.log("Starting system...")
        break;

    case "stop":
        console.log("Stopping system...")
        break;

    case "pause":
        console.log("Pausing system...")
        break;

    case "resume":
        console.log("Resuming system...")
        break;

    default:
        console.log("Unkown command")
}

// ============================================================
// FINAL REFLECTION
// ============================================================

// 1. In your own words, what does switch do?
//
// Answer: Switch is a series of statements that evaluates a single variable and 
// checks it against a list of conditions. If it matches a certain condition, it prints out
// and breaks. otherwise it continues until it hits default and prints there.
//
// 2. What does `case` represent?
//
// Answer: a case is a condition that is matched against a single variable
//
//
// 3. What does `break` do inside a switch?
//
// Answer: break stops the variable inside that switch statement, preventing it from going nay further
//
//
// 4. What does `default` do?
//
// Answer: default is what the variable hits at the end where if it does not match any of the cases, it will print out what is set at the end
//
//
// 5. What is fall-through?
//
// Answer: fall-through is when there are no breaks in between a set of cases, sometimes intentional sometimes not
// and it lets the variable "fall" through the cases until it either hits a break or default
//
//
// 6. When could fall-through be useful?
//
// Answer: fall-through can be useful when a certain variable needs to fall within a range or group of cases where they must print the same thing
//
//
// 7. When would you choose switch instead of if/else?
//
// Answer: switch would be used over if/else when there is only one variable that needs to be tested against a series of conditions 
//
//
// 8. When would you choose if/else instead of switch?
//
// Answer: if else would be used if there needs to be a complex boolean condition or a range is needed to be evaluated
//
//
// 9. AI usage:
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent