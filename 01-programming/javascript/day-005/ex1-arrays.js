// ============================================================
// SWE REBUILD — DAY 5
// Exercise 1: JavaScript Arrays
//
// Topics:
// - Creating arrays
// - Indexing
// - Mutation
// - Iteration
// - Functions with arrays
// ============================================================


// ============================================================
// PART A — Array Fundamentals
// ============================================================

// A1. Create an array called favoriteNumbers containing
// five numbers of your choice.
//
// Print:
// 1. The entire array
// 2. The first element
// 3. The last element (using .length)
// 4. The number of elements

// CODE HERE:

const favoriteNumbers = [3, 11, 7, 0, 13];

console.log(favoriteNumbers)
console.log(favoriteNumbers[0])
console.log(favoriteNumbers[favoriteNumbers.length - 1])
console.log(favoriteNumbers.length)

console.log()
// A2. Create an array containing:
// - a number
// - a string
// - a boolean
//
// Use typeof to print the type of each element.
//
// Then predict what typeof returns for the entire array.

// Prediction: My prediction when typeof is used for the entire array is since arrays are
// objects, it will just call it an object

// CODE HERE:

const mixedArr = [11, "hi", true];

for (let i = 0; i < mixedArr.length; i++)
{
    console.log(typeof mixedArr[i])
}
console.log(typeof mixedArr)
console.log()

// ============================================================
// PART B — Array Mutation
// ============================================================

// Start with the following array.

const fruits = ["apple", "banana", "orange"];

// B1. Add "grape" to the END of the array.
// B2. Add "mango" to the BEGINNING.
// B3. Remove the LAST element.
// B4. Remove the FIRST element.
//
// Print the array after EACH operation.
//
// Use:
// push(), pop(), unshift(), shift()

// push() -> push_back -> pushes element to back of arr
// pop() -> pop_back -> removes last element in arr
// unshift() -> insert to first element in arr
// shift() -> removes first element in arr

// CODE HERE:

fruits.push("grape");
console.log(fruits)
fruits.unshift("mango");
console.log(fruits)
fruits.pop();
console.log(fruits)
fruits.shift();
console.log(fruits)
fruits.push("strawberry");
console.log(fruits)

// B5. Predict before running:
//
// Will this work even though fruits was declared with const?
//
// fruits.push("strawberry");
//
// Prediction: Yes, const does not prevent us from modifying an array's elements
// it only prevents us from reassigning the variable to a different array
//
// Test it and explain the result briefly:
//
// Answer: Yes doing fruits.push("strawberry"); does push "strawberry" to the end
// of the array since const does not prevent us from modifying an array's element
// it only disables reassigning the variable to a different array


console.log(Array.isArray([1, 2, 3])); //true
console.log(Array.isArray({})); // false
console.log()

// ============================================================
// PART C — Iterating Through Arrays
// ============================================================

// C1. Given the array below:
//
// Use a traditional for loop to print every element.

const scores = [85, 92, 78, 96, 88];

// CODE HERE:

for (let i = 0; i < scores.length; i++)
{
    console.log(scores[i])
}
console.log()
// C2. Using the SAME scores array:
//
// Calculate the sum of all scores.
//
// Print the average score.
//
// Do NOT hardcode the number of elements.
// Your solution should work if the array changes.

// CODE HERE:

let sum = 0;
for (let i = 0; i < scores.length; i++)
{
    sum += scores[i];
}
const average = sum / scores.length;
console.log(average)

// C3. Using a loop:
//
// Count how many scores are at least 90.
//
// Print the count.

// CODE HERE:

let count = 0;
for (let i = 0; i < scores.length; i++)
{
    if (scores[i] >= 90)
    {
        count += 1;
    }
}

console.log(count)
console.log()

// ============================================================
// PART D — Functions + Arrays
// ============================================================

// D1. Create a function:
//
// findLargest(numbers)
//
// It accepts an array of numbers.
//
// RETURN the largest number.
//
// Requirements:
// - Use a loop.
// - Do not use Math.max().
// - Do not sort the array.
// - Assume the array is non-empty.
//
// Think about what value you should initialize
// your largest-number variable to.

// CODE HERE:

function findLargest(numbers)
{
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++)
    {
        if (max < numbers[i])
        {
            max = numbers[i];
        }
    }
    return max;
}

// Tests:

console.log(findLargest([3, 7, 2, 9, 1])); // 9
console.log(findLargest([10, 20, 5]));     // 20
console.log(findLargest([-5, -2, -10]));   // -2
console.log();


// ------------------------------------------------------------
// D2 — Count Occurrences
// ------------------------------------------------------------

// Create a function:
//
// countOccurrences(numbers, target)
//
// Given an array and a target number,
// RETURN how many times the target appears.
//
// Example:
//
// countOccurrences([1, 2, 1, 3, 1], 1)
//
// should return 3.
//
// Use a loop and strict equality.

// CODE HERE:

const countOccurrences = (numbers, target) =>
{
    let count = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] === target)
        {
            count += 1;
        }
    }
    return count;
}

// Tests:

console.log(countOccurrences([1, 2, 1, 3, 1], 1)); // 3
console.log(countOccurrences([5, 5, 5], 5));       // 3
console.log(countOccurrences([1, 2, 3], 9));       // 0
console.log();


// ============================================================
// PART E — Independent Challenge
// ============================================================

// Create a function:
//
// reverseArray(numbers)
//
// It accepts an array.
//
// RETURN a NEW array containing the elements
// in reverse order.
//
// Requirements:
//
// 1. Do NOT use .reverse().
// 2. Do NOT modify the original array.
// 3. Use a loop.
// 4. Return the new array.
//
// Example:
//
// reverseArray([1, 2, 3])
//
// returns [3, 2, 1]
//
// IMPORTANT:
// Think about how to build a new array using push().

// CODE HERE:

function reverseArray(arr)
{
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--)
    {
        newArr.push(arr[i]);
    }
    return newArr;
}

// Tests:

const original = [1, 2, 3, 4, 5];

console.log(reverseArray(original)); // [5, 4, 3, 2, 1]
console.log(original);               // [1, 2, 3, 4, 5]
console.log(reverseArray([]));       // []


// ============================================================
// REFLECTION — Only Two Questions
// ============================================================

// 1. What is the difference between modifying an existing
//    array and creating a new array?
//
// Answer: When you are modifying an existing array you are mutating it, meaning you are changing it
// by adding, removing or changing its elements and size. When you create a new array, it is not the same
// array as the original.


// 2. Which exercise was most difficult, and why?
//
// Answer: I personally did not think any of the exercises were difficult.
// Exercise D1 did have me thinking a bit since we did have to take into
// account the negative numbers which would not work if we initialized our max
// to 0.


// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent — no solution assistance
// 🟡 Assisted — implementation-specific hints
// 🔴 Solution — AI provided substantial code
//
// Answer: 🟢 Independent
