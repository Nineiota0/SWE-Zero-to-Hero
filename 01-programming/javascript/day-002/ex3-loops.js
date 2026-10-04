// ============================================================
// SWE Rebuild — Day 2
// Part 2: Loops
// ============================================================

// ============================================================
// PART A — Basic for Loop
// ============================================================

// JavaScript's traditional for-loop syntax is very similar
// to C++.
//
// General structure:
//
// for (initialization; condition; update) {
//     // code
// }

// ------------------------------------------------------------
// Exercise A1
// ------------------------------------------------------------

// Instructions:
//
// Use a for loop to print every integer from:
//
// 1 through 10
//
// Expected:
//
// 1
// 2
// 3
// ...
// 10

// CODE HERE:

for (let i = 1; i <= 10; i++)
{
    console.log(i);
}

// ------------------------------------------------------------
// Exercise A2
// ------------------------------------------------------------
console.log()
// Instructions:
//
// Use a for loop to print:
//
// 10
// 9
// 8
// ...
// 1
//
// Do NOT create ten console.log statements.

// CODE HERE:

for (let i = 10; i > 0; i--)
{
    console.log(i)
}

// ------------------------------------------------------------
// Questions
// ------------------------------------------------------------

// 1. What are the three sections inside the parentheses
//    of a traditional for loop?
//
// Answer: The three sections inside the parenthesis of a traditional for loop include:
// the initialization, the condition and the update/ iteration.

// 2. What determines whether the loop continues running?
//
// Answer: The condition determines whether the loop continues running or not, as when the
// condition is met, the loops ends

// 3. What would happen if your update expression moved
//    the counter in the WRONG direction?
//
// Example: If the update expression moved the counter in the wrong direction,
// the loop would run forever as it would never meet the condition.
//
// You want to count from 1 to 10, but your counter keeps
// getting smaller.
//
// Prediction: If the counter keeps getting smaller it would never meet the condition
// therefore it would infinitely keep getting smaller.

// ============================================================
// PART B — Working With the Counter
// ============================================================

console.log()
// ------------------------------------------------------------
// Exercise B1 — Even Numbers
// ------------------------------------------------------------

// Instructions:
//
// Print every EVEN number from 1 through 20.
//
// Try to think of at least TWO possible approaches.
//
// Implement whichever approach you prefer.


// Approach ideas:
//
// 1: we can simply have i iterate twice, once in the loop updat and another in the body
//
// 2: we can also use hte modulus operator to see if the number is going to leave us with a remainder of 0
// this would require us to use and create an if statement to check

// CODE HERE:

// code 1:

for (let i = 1; i <= 20; i++)
{
    i += 1;
    console.log(i)
}

console.log()
// code 2:

for (let i = 1; i <= 20; i++)
{
    if (i % 2 === 0)
    {
        console.log(i)
    }
}

console.log()
// ------------------------------------------------------------
// Exercise B2 — Sum
// ------------------------------------------------------------

// Instructions:
//
// Calculate:
//
// 1 + 2 + 3 + ... + 100
//
// Print ONLY the final result.
//
// Do not manually write the arithmetic.
//
// You will need a variable outside the loop to keep track
// of information between iterations.


// CODE HERE:

let sum = 0;
for (let i = 0; i <= 100; i++)
{
    sum += i;
}
console.log(sum)

console.log()
// ------------------------------------------------------------
// Questions
// ------------------------------------------------------------

// 1. What value did you initialize your running total to?
//
// Answer: I created a variable outside the loop called sum and initialized it to 0

// 2. Why must the running-total variable exist OUTSIDE
//    the loop rather than being recreated inside it?
//
// Answer: The variable must exist outside the loop because if we set it to a number it would ultimately reset our sum value back to the number plus i, for however the loop runs for

// ============================================================
// PART C — while Loops
// ============================================================

// A while loop repeatedly executes as long as its condition
// remains truthy.
//
// General structure:
//
// while (condition) {
//     // code
// }


// ------------------------------------------------------------
// Exercise C1
// ------------------------------------------------------------

// Instructions:
//
// Using ONLY a while loop, print:
//
// 1
// 2
// 3
// 4
// 5
//
// You'll need to manage the counter yourself.

// CODE HERE:
let i = 1;
while (i !== 6)
{
    console.log(i)
    i++;
}

console.log()
// ------------------------------------------------------------
// Exercise C2
// ------------------------------------------------------------

// Instructions:
//
// Start with:
//
// let health = 100;
//
// Each iteration represents the player taking 15 damage.
//
// Print the player's health AFTER each hit.
//
// Keep looping while health is greater than 0.
//
// Think carefully about what the final health value might be.

// CODE HERE:

let health = 100;
while (health > 0)
{
    health -= 15;
    if (health >= 10)
    {
        console.log(health)
    }
    else
    {
        console.log(0)
    }
}
console.log()
// ------------------------------------------------------------
// Questions
// ------------------------------------------------------------

// 1. Unlike the traditional for loop, where did you have
//    to initialize your while-loop counter?
//
// Answer: I intialized it outside of the loop before it.

// 2. Where did you have to update it?
//
// Answer: I updated the variable inside of the loop

// 3. What happens if you forget to update a variable that
//    the while condition depends on?
//
// Answer: The loop would continue forever if there is not update to the variable

// 4. In your own words:
//
//    When might a while loop make more sense than a for loop?
//
// Don't search for a definition. Reason about the difference.
//
// Answer: You would use a while loop for something like true or false statements for example
// while (true) print out a certain number. A for loop would make more sense while parsing an array
// and needing to access a specific index. A while loop is more condition based first hence why I used the t/f example

// ============================================================
// PART D — break
// ============================================================

// `break` immediately exits the loop containing it.


// ------------------------------------------------------------
// Exercise D1
// ------------------------------------------------------------

// Instructions:
//
// Loop from 1 through 100.
//
// Print each number.
//
// BUT:
//
// When the number reaches 8, stop the loop completely.
//
// The expected final number printed should be:
//
// 7
//
// Think carefully about whether you should print BEFORE
// or AFTER checking for 8.

// CODE HERE:

for (let i = 1; i <= 100; i++)
{
    if (i === 8)
    {
        break;
    }
    console.log(i)
}
console.log()
// ------------------------------------------------------------
// Question
// ------------------------------------------------------------

// What does `break` do to the loop?
//
// Answer: break stops the loop from continuing, so once it sees 8, it stops printing and that leeaves us with 7

// ============================================================
// PART E — continue
// ============================================================

// `continue` does NOT terminate the entire loop.
//
// Instead, it skips the remainder of the CURRENT iteration
// and proceeds to the next iteration.

// ------------------------------------------------------------
// Exercise E1
// ------------------------------------------------------------

// Instructions:
//
// Loop from 1 through 10.
//
// Use `continue` so that the program DOES NOT print 5.
//
// Expected:
//
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// CODE HERE:

for (let i = 1; i <= 10; i++)
{
    if (i === 5) continue;
    console.log(i)
}
console.log()
// ------------------------------------------------------------
// Question
// ------------------------------------------------------------

// Explain the difference between:
//
// break
//
// and:
//
// continue
//
// Answer: break stops the loop from continuing, continue skips over the current iteration of rht eloop and continues




// ============================================================
// PART F — Prediction Exercise
// ============================================================

// IMPORTANT:
//
// Do NOT run these immediately.
//
// Read each example and write your prediction FIRST.
// Then run them afterward to check yourself.


// ------------------------------------------------------------
// Prediction 1
// ------------------------------------------------------------

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Prediction:
// This will print 0 through 4, since this stops once 5 < 5
//
console.log();
// ------------------------------------------------------------
// Prediction 2
// ------------------------------------------------------------

for (let i = 5; i > 0; i--) {
    console.log(i);
}

// Prediction:
// This will print 5 through 1, since this stops once 0 > 0
//

console.log();
// ------------------------------------------------------------
// Prediction 3
// ------------------------------------------------------------

let x = 1;

while (x < 10) {
    x = x * 2;
    console.log(x);
}

// Prediction:
// this will print 2, 4, 8, 16 and stops at 16 since 8 goes into the loop once more and we will get 16 but 16 will not go into the loop again since it is greater than 10
//

console.log();
// ------------------------------------------------------------
// Prediction 4
// ------------------------------------------------------------

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Prediction:
// This will print 1, 2, 4, 5 since we are continueing the loop skipping over 3
//

console.log();
// ------------------------------------------------------------
// Prediction 5
// ------------------------------------------------------------

let count = 0;

while (count < 5) {

    if (count === 3) {
        break;
    }

    console.log(count);

    count++;
}
console.log();
// Prediction:
// This will give us 0, 1, 2 and stops the loop there since we are breaking out of the loop, stopping the loop entirely
//


// After making ALL FIVE predictions:
//
// Uncomment ONE example at a time and run it.
//
// Were any predictions incorrect?
//
// Answer: No predictions were wrong
//
// If so, explain what you misunderstood:
//


// ============================================================
// PART G — Nested Loops
// ============================================================

// A loop can exist inside another loop.
//
// You have probably encountered this in C++, so we're going
// to experiment rather than spend much time defining it.


// ------------------------------------------------------------
// Exercise G1
// ------------------------------------------------------------

// Instructions:
//
// Use TWO loops to produce:
//
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3
//
// The outer loop and inner loop should both count from 1 to 3.


// CODE HERE:

for (let i = 1; i <= 3; i++)
{
    for (let j = 1; j <= 3; j++)
    {
        console.log(i + " " + j)
    }
}

// ------------------------------------------------------------
// Questions
// ------------------------------------------------------------

// 1. How many times does the OUTER loop execute?
//
// Answer: the outer loop ran 3 times


// 2. How many times does the INNER loop execute for EACH
//    outer-loop iteration?
//
// Answer: the inner loop executed 3 times per each outer loop execution


// 3. How many total times does the code inside the inner
//    loop execute?
//
// Answer: the inner loops runs a total of 9 times 


// 4. If both loops instead ran from 1 through 100,
//    approximately how many times would the innermost code run?
//
// Answer: the inner loops would run 100 * 100 times which is 10000 times

// ============================================================
// PART H — Mini Challenge
// ============================================================

// Do this WITHOUT looking up a solution.

console.log()
// ------------------------------------------------------------
// FizzBuzz
// ------------------------------------------------------------

// Instructions:
//
// Print the numbers from 1 through 30.
//
// BUT:
//
// If a number is divisible by 3:
// print:
//
// Fizz
//
// If a number is divisible by 5:
// print:
//
// Buzz
//
// If a number is divisible by BOTH 3 and 5:
// print:
//
// FizzBuzz
//
// Otherwise:
// print the number.
//
// Example:
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// ...
// 14
// FizzBuzz
// 16
// ...
// 30 -> FizzBuzz


// HINT:
//
// You know the modulo operator from C++:
//
// %
//
// Think about what:
//
// number % 3 === 0
//
// tells you.
//
// IMPORTANT:
//
// Think carefully about the ORDER of your conditions.
//
// Don't ask AI for the implementation unless you've made
// a serious attempt first.


// CODE HERE:

for (let i = 1; i <= 30; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0)
    {
        console.log("Fizz")
    }
    else if (i % 5 === 0)
    {
        console.log("Buzz")
    }
    else console.log(i)
}

// ============================================================
// FINAL REFLECTION
// ============================================================

// Answer these AFTER completing the exercises.

// 1. How is a JavaScript traditional for loop similar to
//    a C++ for loop?
//
// Answer: JS and C++ are basically the same regarding for loops, only difference is the syntax when initializing a variable.


// 2. What's the biggest difference you noticed while using
//    JavaScript loops today?
//
// Answer: In my opinion the way JS loops work is basically the same as C++ minus the syntax


// 3. Explain an infinite loop in your own words.
//
// Answer: An infinite loop is a loop that does not stop since it never meets the boundaries/ condition statement.


// 4. What is the difference between:
//
//    break
//    continue
//
// Answer: break: breaks out the loop and stops it
// continue: continues and skips over the current iteration but the loop still continues onto the next iteration


// 5. Which exercise was the hardest and why?
//
// Answer: Exercise C2 was the most difficult for me since i wanted to perfect the output. 
// The reason was because using a while loop you need to keep updating health after every loop
// the problem also asked the health to be printed after 15 hp was deducted from the total
// Also what I mean by perfecting the output is once it hit 25, once you subtract 15 you'll 
// end up with 10. Once you end up with 10 if you subtract again you'll end up with -5, but in games
// once you end up at 0 hp, you're dead so i needed an if else statement to output if health was 
// less than or equal to 10 then we output 0, else print out i.


// 6. Was there anything you initially got wrong?
//
// Answer:I initially got Exercise G1 wrong since I forgot that for nexted loops, they do not run an equal amoutn of times.
// I realized and remembered that for every outer loop run, the inner loop runs until it meets its boundary and then the outer loop runs again.


// 7. AI usage for this exercise:
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
//
// AI provided the exercise structure and instructions,
// but I wrote the implementations and reasoning myself
// without implementation-specific hints or solution code.