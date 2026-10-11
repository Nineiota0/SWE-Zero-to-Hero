// ============================================================
// SWE REBUILD — DAY 6
// Exercise 1: JavaScript Objects
//
// Topics:
// - Object creation
// - Property access
// - Dot vs bracket notation
// - Object mutation
// - Functions with objects
// ============================================================


// ============================================================
// PART A — Creating Objects
// ============================================================

// A1. Create an object named developer containing:
//
// name: your name
// age: your age
// primaryLanguage: "C++"
// isLearningJavaScript: true
// technologies: an array containing "C++" and "JavaScript"
//
// Print the entire object.

// CODE HERE:

const developer = {
    name: "NineIota",
    age: 23,
    primaryLanguage: "C++",
    isLearningJavaScript: true,
    technologies: ["C++", "JavaScript"]
}

console.log(developer)
console.log()
// A2. Using DOT notation, print:
//
// 1. The developer's name
// 2. Their primary programming language
// 3. Whether they are learning JavaScript
//
// Then use BRACKET notation to print their age.

// CODE HERE:

console.log(developer.name)
console.log(developer.primaryLanguage)
console.log(developer.isLearningJavaScript)

console.log(developer["age"])

console.log()
// A3. Access the technologies array inside developer.
//
// Print:
// 1. The entire technologies array
// 2. The FIRST technology
// 3. The LAST technology
//
// Do not hardcode the last index.

// CODE HERE:

console.log(developer.technologies)
console.log(developer.technologies[0])
console.log(developer.technologies[developer.technologies.length - 1])

console.log()
// ============================================================
// PART B — Dot vs Bracket Notation
// ============================================================

// Given:

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver"
};

// B1. Create a variable:
//
// const propertyName = "model";
//
// Use that variable to access the car's model.
//
// IMPORTANT:
// Do NOT write car.model or car["model"].
//
// CODE HERE:

const property = "model";
const carModel = car[property]
console.log(carModel)

console.log()
// B2. Predict BEFORE running:
//
// What will each of these print?

console.log(car.brand);
console.log(car["brand"]);

const key = "brand";
console.log(car[key]);
console.log(car.key);

// Predictions:
//
// 1. "Toyota"
// 2. "Toyota"
// 3. "Toyota"
// 4. undefined
//
// After running:
// Explain why the fourth expression behaves differently.
//
// Answer: The fourth expression behaves differently becuase dot notation looks for
// a property named key but key in this case is a variable that is assigned to "brand"


console.log()
// ============================================================
// PART C — Object Mutation
// ============================================================

// Given:

const student = {
    name: "Alice",
    grade: 85,
    isEnrolled: true
};

// C1. Change grade to 95.
//
// C2. Add a new property named major with value
//     "Computer Science".
//
// C3. Delete the isEnrolled property.
//
// Print student after EACH operation.
//
// Requirements:
// - Do not create a replacement object.
// - Modify the existing object.
//
// CODE HERE:

student.grade = 95;
console.log(student)

student.major = "Computer Science";
console.log(student)

delete student.isEnrolled;
console.log(student)

// C4. Predict BEFORE running:
//
// Will modifying student work even though it was
// declared using const?
//
// Prediction: Yes
//
// Explain the result: Even though we declared student as const, that does not prevent
// us from changing/ mutating the properties of student
//
// Answer: This is because we are only mutating/ changing its properties, not assigning it 
// to a new one

console.log()

// ============================================================
// PART D — Functions With Objects
// ============================================================

// D1. Create a function:
//
// getFullName(person)
//
// The function receives an object with:
//
// firstName
// lastName
//
// RETURN the full name as one string,
// with a space between first and last name.
//
// Do not console.log inside the function.
//
// CODE HERE:

function getFullName(person)
{
    return person.firstName + " " + person.lastName;
}

// Tests:

console.log(getFullName({
    firstName: "Peter",
    lastName: "Parker"
})); // Peter Parker

console.log(getFullName({
    firstName: "Miles",
    lastName: "Morales"
})); // Miles Morales
console.log()

// ------------------------------------------------------------
// D2 — Updating an Object
// ------------------------------------------------------------

// Create:
//
// updateScore(player, points)
//
// player is an object containing:
//
// name
// score
//
// Increase player.score by points.
//
// RETURN the updated score.
//
// For this exercise, modifying the original object
// is intentionally allowed.
//
// CODE HERE:

function updateScore(player, points)
{
    player.score += points;
    return player.score;
}

// Tests:

const player = {
    name: "Alex",
    score: 10
};

console.log(updateScore(player, 5));  // 15
console.log(updateScore(player, 10)); // 25
console.log(player.score);            // 25

console.log()

// ============================================================
// PART E — Independent Challenge
// ============================================================

// Create a function:
//
// getStudentStatus(student)
//
// student is an object containing:
//
// name
// grade
// isEnrolled
//
// RETURN one of the following strings:
//
// "Not enrolled" if isEnrolled is false.
//
// "Excellent" if enrolled AND grade >= 90.
//
// "Passing" if enrolled AND grade >= 60
//           but below 90.
//
// "Failing" if enrolled AND grade < 60.
//
// IMPORTANT:
// An unenrolled student should ALWAYS return
// "Not enrolled", regardless of grade.
//
// Do not print inside the function.
//
// CODE HERE:

// NOTE: how I would write it vs how I did it using the guideline
function getStudentStatus(student)
{
    if (student.isEnrolled === false) return "Not enrolled";
    else if (student.grade >= 90) return "Excellent";
    else if (student.grade >= 60 && student.grade < 90)
    {
        return "Passing";
    }
    else return "Failing";
}

//function getStudentStatus(student)
//{
//    if (student.isEnrolled === false) return "Not enrolled";
//    else if (student.isEnrolled && student.grade >= 90) return "Excellent";
//    else if (student.isEnrolled && (student.grade >= 60 && student.grade < 90))
//    {
//        return "Passing";
//    }
//    else if (student.isEnrolled && student.grade < 60)
//    {
//        return "Failing";
//    } 
//}

// Tests:

console.log(getStudentStatus({
    name: "Alice",
    grade: 95,
    isEnrolled: true
})); // Excellent

console.log(getStudentStatus({
    name: "Bob",
    grade: 75,
    isEnrolled: true
})); // Passing

console.log(getStudentStatus({
    name: "Charlie",
    grade: 40,
    isEnrolled: true
})); // Failing

console.log(getStudentStatus({
    name: "David",
    grade: 100,
    isEnrolled: false
})); // Not enrolled

// ============================================================
// REFLECTION
// ============================================================

// Only answer if something genuinely surprised you:
//
// What was different about JavaScript objects compared
// to what you expected from C++ structs?
//
// Answer: I actually learned a lot about objects and how to use them with function
// in today's lesson. In C++ i really struggled with understanding objects, how to use
// them and what they do. I mean I did have an idea on how to create a struct in C++
// and its attributes but I was unsure on how to use them and why at all. After today
// I can see its purpose for creating a class and giving it attributes such as name, grade
// and age which belong to a certain object. What really surprised me the most today was 
// how we can create a variable and use that variable to access the class attributes. I was
// a but stuck on it but then I got the hang of it.


// ============================================================
// AI USAGE
// ============================================================
//
// 🟢 Independent — no solution assistance
// 🟡 Assisted — implementation-specific hints
// 🔴 Solution — AI provided substantial code
//
// Answer: 🟢 Independent
