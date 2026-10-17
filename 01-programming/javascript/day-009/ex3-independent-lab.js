// ============================================================
// SWE REBUILD — DAY 9
// Exercise 3: Independent Engineering & Testing Lab
//
// PROJECT: Student Grade Analytics System
//
// Concepts:
// - reduce()
// - find()
// - some()
// - every()
// - filter()
// - Functions and objects
// - Independent test design
// - Automated assertions
// ============================================================

// ============================================================
// PART A — Calculate Average Grade
// ============================================================

// Function:
//
// getAverageGrade(students)
//
// REQUIREMENTS:
//
// 1. Accept an array of student objects.
// 2. Calculate the average grade of ENROLLED students only.
// 3. Ignore unenrolled students entirely.
// 4. Use filter() and reduce().
// 5. RETURN the average as a number.
// 6. If no students are enrolled, return 0.
// 7. Do not modify the original array or objects.
//
// Assume grades are valid numbers between 0 and 100.
//
// Do not round the average.
//
// Write the entire implementation yourself.


// CODE HERE:

function getAverageGrade(students)
{
    const enrolledStudents = students.filter(student => student.isEnrolled);

    if (enrolledStudents.length === 0) return 0;

    const totalGradeSum = enrolledStudents.reduce((accumulator, student) => {
        return accumulator + student.grade;
    }, 0);

    return totalGradeSum / enrolledStudents.length;
}

// ============================================================
// PART B — Find Student By ID
// ============================================================

// Function:
//
// findStudentById(students, id)
//
// REQUIREMENTS:
//
// 1. Accept an array of student objects and a target ID.
// 2. Use find().
// 3. RETURN the first student whose id matches.
// 4. Use strict equality.
// 5. If no student matches, return undefined.
// 6. Do not modify the original data.
//
// Both enrolled and unenrolled students can be found.


// CODE HERE:

function findStudentById(students, id)
{
    return students.find(student => student.id === id)
}

// ============================================================
// PART C — Check For Failing Students
// ============================================================

// Function:
//
// hasFailingStudents(students)
//
// REQUIREMENTS:
//
// 1. Accept an array of student objects.
// 2. Consider ENROLLED students only.
// 3. A student is failing if grade < 60.
// 4. Use some().
// 5. RETURN true if at least one enrolled student is failing.
// 6. Otherwise return false.
// 7. Do not modify the original data.
//
// IMPORTANT:
//
// An unenrolled student with grade 20 must NOT
// cause this function to return true.


// CODE HERE:

function hasFailingStudents(students)
{
    const enrolledStudents = students.filter(student => student.isEnrolled);
    return enrolledStudents.some(student => student.grade < 60);
}

// ============================================================
// PART D — Check If All Students Are Passing
// ============================================================

// Function:
//
// areAllStudentsPassing(students)
//
// REQUIREMENTS:
//
// 1. Accept an array of student objects.
// 2. Consider ENROLLED students only.
// 3. Passing means grade >= 60.
// 4. Use every().
// 5. RETURN true if every enrolled student is passing.
// 6. RETURN false if at least one enrolled student is failing.
// 7. RETURN false if there are NO enrolled students.
// 8. Do not modify the original data.
//
// IMPORTANT:
//
// Remember the empty-array behavior of every().
//
// Your function must explicitly handle the situation
// where there are no enrolled students.


// CODE HERE:

function areAllStudentsPassing(students)
{
    const enrolledStudents = students.filter(student => student.isEnrolled);
    if (enrolledStudents.length === 0) return false;
    return enrolledStudents.every(student => student.grade >= 60);
}

// ============================================================
// PART E — Create Your Own Student Data
// ============================================================

// Create an array named students.
//
// Requirements:
//
// - At least SIX student objects.
// - Every student has:
//   id
//   name
//   grade
//   isEnrolled
//
// Your dataset must include:
//
// - At least one failing enrolled student.
// - At least one passing enrolled student.
// - At least one unenrolled student.
// - A student with grade exactly 60.
// - A student with grade exactly 100.
//
// Choose all names, IDs, and remaining grades yourself.


// CODE HERE:

const students = [
    { id: 101, name: "NineIota", grade: 100, isEnrolled: true },
    { id: 224, name: "Jason", grade: 59, isEnrolled: true },
    { id: 369, name: "Hoa", grade: 80, isEnrolled: false },
    { id: 425, name: "Thai", grade: 60, isEnrolled: true },
    { id: 205, name: "Kevin", grade: 100, isEnrolled: false },
    { id: 169, name: "Minh", grade: 40, isEnrolled: true }
]

// ============================================================
// PART F — Independent Testing
// ============================================================

// Design at least TEN test cases across your functions.
//
// Your tests should cover:
//
// 1. Average of enrolled students.
// 2. Unenrolled students excluded from the average.
// 3. Finding an existing student.
// 4. Searching for a nonexistent ID.
// 5. Finding an unenrolled student.
// 6. Detecting a failing enrolled student.
// 7. Ignoring an unenrolled failing student.
// 8. All enrolled students passing.
// 9. No enrolled students.
// 10. An empty student array.
//
// Include boundary tests for grades 59 and 60.
//
// BEFORE running each test:
//
// - Write your expected result.
// - Then execute your function.
// - Compare actual versus expected.
//
// Create additional datasets if needed.
//
// Do not modify the functions just to make a test pass
// unless you've identified a real implementation bug.


// CODE HERE:

console.log(getAverageGrade(students)); // 64.75
console.log(getAverageGrade(students) === 64.75); //true
console.log(findStudentById(students, 224)) // Jason, id = 224
console.log(findStudentById(students, 123)) // undefined
console.log(findStudentById(students, 369)) // Hoa, id = 369
console.log(hasFailingStudents(students)) // true
console.log(areAllStudentsPassing(students)) // false

// no enrolled students
const noEnrolledStudents = [
    { id: 369, name: "Hoa", grade: 80, isEnrolled: false },
    { id: 205, name: "Kevin", grade: 100, isEnrolled: false }
]
console.log(getAverageGrade(noEnrolledStudents)) // 0
console.log(hasFailingStudents(noEnrolledStudents)) // false
console.log(areAllStudentsPassing(noEnrolledStudents)) // false

// Empty student array
const emptyStudents = [];
console.log(getAverageGrade(emptyStudents)) // 0
console.log(findStudentById(emptyStudents, 101)) // undefined
console.log(hasFailingStudents(emptyStudents)) // false
console.log(areAllStudentsPassing(emptyStudents)) // false

// no enrolled students
const allStudentsPassing = [
    { id: 369, name: "Hoa", grade: 80, isEnrolled: true },
    { id: 205, name: "Kevin", grade: 100, isEnrolled: true }
]
console.log(areAllStudentsPassing(allStudentsPassing)) // true

// no enrolled students
const ignoreUnenrolledFailing = [
    { id: 369, name: "Hoa", grade: 40, isEnrolled: false },
    { id: 205, name: "Kevin", grade: 100, isEnrolled: true }
]
console.log(hasFailingStudents(ignoreUnenrolledFailing)) // false
console.log()
// ============================================================
// PART G — Automated Testing Introduction
// ============================================================

// So far, you've mainly tested using console.log().
//
// Now we'll begin using assertions.
//
// Node.js includes a built-in assertion library:
//
// const assert = require("node:assert/strict");
//
// Example:
//
// assert.equal(2 + 2, 4);
//
// If the values match, the assertion passes silently.
// If they don't match, Node throws an AssertionError.
//
// You don't need to install any packages.


// ------------------------------------------------------------
// G1 — Import Assertions
// ------------------------------------------------------------

// Import Node's strict assertion library using require().
//
// CODE HERE:

const assert = require("node:assert/strict");

// ------------------------------------------------------------
// G2 — Write Your Own Assertions
// ------------------------------------------------------------

// Write at least FIVE automated assertions.
//
// Use:
//
// assert.equal(actual, expected);
//
// Suggested scenarios:
//
// - Average grade
// - Missing student ID
// - Failing student detection
// - All-passing students
// - Empty input
//
// You must write the actual assertions yourself.
//
// NOTE:
//
// assert.equal() is useful for primitive values.
//
// For comparing complete objects or arrays,
// we'll later learn assert.deepStrictEqual().


// CODE HERE:

assert.equal(getAverageGrade(students), 64.75); //passing example
// assert.equal(getAverageGrade(students), 100); // non passing example
assert.equal(findStudentById(students, 999), undefined);
assert.equal(hasFailingStudents(students), true);
assert.equal(areAllStudentsPassing(students), false);
assert.equal(areAllStudentsPassing(allStudentsPassing), true);
assert.equal(getAverageGrade([]), 0);

// ============================================================
// PART H — Verify No Mutation
// ============================================================

// Confirm that your functions do not change the original
// student data.
//
// Suggested approach:
//
// 1. Create a snapshot of your original data.
// 2. Run your functions.
// 3. Compare the original data against the snapshot.
//
// You may use:
//
// structuredClone()
//
// to create an independent copy.
//
// And:
//
// assert.deepStrictEqual()
//
// to compare objects/arrays by their contents.
//
// You haven't used these before, so don't worry about
// mastering them today.
//
// Your task is to attempt this verification independently.


// CODE HERE:

// create snapshot of original data
const originalSnapshot = structuredClone(students);

// run all functions to see if there are mutations that occur
getAverageGrade(students);
findStudentById(students, 224);
hasFailingStudents(students);
areAllStudentsPassing(students);

// compare original data against snapshot
assert.deepStrictEqual(students, originalSnapshot);

// ============================================================
// FINAL REFLECTION
// ============================================================

// Only answer if something was challenging.
//
// 1. Which function was hardest to implement?
//
// 2. Which test case was hardest to design?
//
// 3. Did any assertion reveal a bug that console.log()
//    hadn't made obvious?
//
// NOTES:

// The function hardest to implement was getAverageGrade(students) since we had to
// filter out the unenrolled students using filter and then we check if the length
// of enrolled students was not zero, if so we return 0 other wise we use .reduce
// and accumulated all enrolled student's grades to get their avergae

// There wasnt really any hard test cases to design, some of them I just was not sure
// what I was being asked but learning about assertions today was a bit of a learning
// curve but I will hopefully get the hang of it.

// No assertion made sure all my functions were returning the correct values and
// I found the snapshot to check for mutation of data to be very useful

// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent — no implementation assistance
// 🟡 Assisted — implementation-specific hints
// 🔴 AI solution/code
//
// Answer: 🟢 Independent
