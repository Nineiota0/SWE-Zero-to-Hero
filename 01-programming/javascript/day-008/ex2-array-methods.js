// ============================================================
// SWE REBUILD — DAY 8
// Exercise 2: map() and filter()
//
// Topics:
// - Callbacks with arrays
// - Transforming elements
// - Filtering elements
// - Arrays of objects
// - Independent testing
// ============================================================


// ============================================================
// PART A — map() Fundamentals
// ============================================================

// A1 — Double Every Number
//
// Given:

const numbers = [2, 4, 6, 8, 10];

// Create a NEW array named doubledNumbers.
//
// Requirements:
// - Use map().
// - Double every element.
// - Use an arrow function.
// - Do not modify numbers.
//
// Print both arrays.

// CODE HERE:

const doubledNumbers = numbers.map(number => number * 2);
console.log(numbers)
console.log(doubledNumbers)

console.log()

// ------------------------------------------------------------
// A2 — Convert Temperatures
// ------------------------------------------------------------

// Given:

const celsius = [0, 10, 20, 30, 40];

// Create a NEW array named fahrenheit.
//
// Convert each temperature using:
//
// F = (C * 9 / 5) + 32
//
// Requirements:
// - Use map().
// - Do not use a traditional loop.
// - Preserve the original array.

// CODE HERE:

const fahrenheit = celsius.map(number => ((number * 9) / 5) + 32);
console.log(celsius)
console.log(fahrenheit)

console.log()

// ------------------------------------------------------------
// A3 — Transform Strings
// ------------------------------------------------------------

// Given:

const names = ["alice", "bob", "charlie"];

// Create a NEW array containing uppercase names.
//
// Hint:
// Strings have a built-in .toUpperCase() method.
//
// Requirements:
// - Use map().
// - Do not modify the original array.

// CODE HERE:

const uppercase = names.map(string => string.toUpperCase());
console.log(names)
console.log(uppercase)

console.log()

// ============================================================
// PART B — filter() Fundamentals
// ============================================================

// B1 — Even Numbers
//
// Given:

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create a NEW array containing only even numbers.
//
// Requirements:
// - Use filter().
// - Use an arrow function.
// - Do not modify values.

// CODE HERE:

const evenNum = values.filter(number => number % 2 === 0);
console.log(values)
console.log(evenNum)

console.log()

// ------------------------------------------------------------
// B2 — Passing Scores
// ------------------------------------------------------------

// Given:

const scores = [45, 82, 67, 91, 38, 75, 100];

// Create an array containing scores >= 60.
//
// Then create another array containing scores < 60.
//
// Requirements:
// - Use filter() for both.
// - Do not modify scores.
//
// Print both arrays.

// CODE HERE:

const greaterEqualtoSixty = scores.filter(number => number >= 60);
console.log(scores)
console.log(greaterEqualtoSixty)

const lessThanSixty = scores.filter(number => number < 60);
console.log(lessThanSixty)

console.log()

// ------------------------------------------------------------
// B3 — Nonempty Strings
// ------------------------------------------------------------

// Given:

const usernames = ["NineIota", "", "Alice", "", "Bob"];

// Create a NEW array containing only nonempty usernames.
//
// Requirements:
// - Use filter().
// - Use what you learned about truthiness.
// - Do not manually compare every username to "".

// CODE HERE:

const nonEmpty = usernames.filter(string => string);
console.log(usernames)
console.log(nonEmpty)

console.log()

// ============================================================
// PART C — Arrays of Objects
// ============================================================

// Given:

const products = [
    { name: "Keyboard", price: 50, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Monitor", price: 200, inStock: true },
    { name: "Headphones", price: 80, inStock: true },
    { name: "Webcam", price: 60, inStock: false }
];


// ------------------------------------------------------------
// C1 — Filter Products
// ------------------------------------------------------------

// Create a NEW array containing only products that
// are currently in stock.
//
// Requirements:
// - Use filter().
// - Do not mutate the original products.

// CODE HERE:

const inStock = products.filter(product => product.inStock === true);
console.log(inStock)

console.log()

// ------------------------------------------------------------
// C2 — Extract Product Names
// ------------------------------------------------------------

// Create a NEW array containing only product names.
//
// Expected shape:
//
// ["Keyboard", "Mouse", ...]
//
// Requirements:
// - Use map().
// - Do not modify products.

// CODE HERE:
const productNames = products.map(product => product.name);
console.log(productNames)

console.log()

// ------------------------------------------------------------
// C3 — Apply a Price Increase
// ------------------------------------------------------------

// Create a NEW array of products.
//
// Every product's price should increase by 10.
//
// Requirements:
// - Use map().
// - Use object spread to create a NEW product object.
// - Preserve name and inStock.
// - Do not modify the original products.
//
// This combines Day 7's immutable updates with map().

// CODE HERE:
const increaseByTen = products.map(product => {
    return {
        ...product,
        price: product.price + 10
    }
})
console.log(increaseByTen)

console.log()

// ============================================================
// PART D — Independent Engineering Challenge
// ============================================================

// SCENARIO:
//
// You are building a small course management system.
//
// Each course is an object containing:
//
// title       -> string
// difficulty  -> string ("Beginner", "Intermediate", "Advanced")
// hours       -> number
// isCompleted -> boolean
//
// Create TWO functions:
//
// getIncompleteCourses(courses)
//
// Requirements:
// - Accept an array of course objects.
// - RETURN a NEW array containing only incomplete courses.
// - Use filter().
// - Do not modify the original array or objects.
//
//
// getCourseTitles(courses)
//
// Requirements:
// - Accept an array of course objects.
// - RETURN an array of course titles.
// - Use map().
// - Do not modify the original data.


// ------------------------------------------------------------
// D1 — Write Both Functions
// ------------------------------------------------------------

// CODE HERE:

function getIncompleteCourses(courses)
{
    const incompleteCourses = courses.filter(course => course.isCompleted === false);
    return incompleteCourses;
}

function getCourseTitles(courses)
{
    const courseTitles = courses.map(course => course.title);
    return courseTitles;
}

// ------------------------------------------------------------
// D2 — Create Your Own Data
// ------------------------------------------------------------

// Create at least FIVE course objects inside an array.
//
// Choose your own:
// - course titles
// - difficulties
// - durations
// - completion statuses
//
// Include both completed and incomplete courses.

// CODE HERE:

const courses = [
    { title: "Math101", difficulty: "Beginner", hours: 1, isCompleted: true },
    { title: "Eng425", difficulty: "Advanced", hours: 2.5, isCompleted: false },   
    { title: "Hist225", difficulty: "Intermediate", hours: 1, isCompleted: false },
    { title: "Bio325", difficulty: "Intermediate", hours: 1.5, isCompleted: true },
    { title: "Calc378", difficulty: "Advanced", hours: 2, isCompleted: true }
];

const allCompletedCourses = [
    { title: "Math101", difficulty: "Beginner", hours: 1, isCompleted: true },  
    { title: "Bio325", difficulty: "Intermediate", hours: 1.5, isCompleted: true },
    { title: "Calc378", difficulty: "Advanced", hours: 2, isCompleted: true }
];

const noneCompletedCourses = [
    { title: "Math101", difficulty: "Beginner", hours: 1, isCompleted: false },  
    { title: "Bio325", difficulty: "Intermediate", hours: 1.5, isCompleted: false },
    { title: "Calc378", difficulty: "Advanced", hours: 2, isCompleted: false }
];

// ------------------------------------------------------------
// D3 — Design Your Own Tests
// ------------------------------------------------------------

// Write at least SIX tests total.
//
// Cover:
//
// - Mixed completed/incomplete courses.
// - All courses completed.
// - No courses completed.
// - An empty course array.
// - Extracting titles.
// - Verifying original data remains unchanged.
//
// Write expected outputs before running.
//
// You may create additional test data yourself.

// CODE HERE:

console.log(getIncompleteCourses(courses)) // Hist225 and Eng425 objects
console.log(getCourseTitles(courses)) // [ 'Math101', 'Eng425', 'Hist225', 'Bio325', 'Calc378' ]

console.log()
console.log(getIncompleteCourses([])); // []
console.log(getCourseTitles([]));       // []
console.log()


console.log(courses) // original unchanged array of courses object

const newCourses = getCourseTitles(courses)
console.log(newCourses === courses) // false
console.log()

console.log(getIncompleteCourses(allCompletedCourses)) // []
console.log(getIncompleteCourses(noneCompletedCourses)) // math, bio and calc
// ============================================================
// TESTING REFLECTION
// ============================================================

// Only answer if something unexpected happened.
//
// What failed, and how did you debug it?
//
// NOTES:




// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent
// 🟡 Implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
