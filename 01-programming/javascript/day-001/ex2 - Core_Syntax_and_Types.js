// JavaScript is Dynamically typed
// in C++ types are written like:
// int age = 23;
// string name = "NineIota";
// bool learning = true;
// variables are declared with a type

// JS allows for:
// let something = 23;
// JS determines the type during runtime

// There is an operator called:
// typeof
// usage: const example = 42;
// console.log(typeof example);

// Exercise A - Investigating primitive types
// create one variable representing each of these concepts:
// your age
// your name
// whether you like C++
// something intentionally missing/unknown
// a very large integer

// choose appropriate values and print both the value and its type of result
console.log("Ex.A")

const age = 23;
console.log(typeof age)
// prediction: int
// actual: number

const name = "NineIota";
console.log(typeof name)
// prediction: string
// actual: string

const likesCPlusPlus = true;
console.log(typeof likesCPlusPlus)
// prediction: bool
// actual: boolean

let missing;
console.log(typeof missing)
// prediction: undefined
// actual: undefined

const largeInt = 100000000000000000000000000000.00;
console.log(typeof largeInt)
// prediction: double
// actual: number

// Exercise B - Dynamic Typing
// create: let mystery = 42; and print value and type
// assign a string to the same variable -> print val and type ahain
// do the same to boolean
console.log()
console.log("Ex.B")

let mystery = 42;
console.log(mystery)
mystery = "42";
console.log(mystery)
mystery = true;
console.log(mystery)
console.log(typeof mystery)

// Questions:
// 1) Did JavaScript allow the variable's value to change from one type to another?
// Yes JS allowed the variable's value to change from one type to another

// 2) Would equivalent code work with an int variable in C++?
// No in C++, once you assign/ declare a type to a variable you are only allowed to use that type

// 3) Based on what you observed, what do you think "dynamically typed" means?
// JavaScript values have types, and a variable can refer to values of different types during runtime

console.log()
console.log("Ex.C")
// Exercise C - The Weird Part
// create these values:
// const a = 5;
// const b = "5";

const a = 5;
const b = "5";

// write predictions for the following expressions:
console.log(a + a)
// 10
// correct
console.log(b + b)
// "55"
// correct
console.log(a + b)
// 5"5"
// correct
console.log(a - b)
// error
// actual: 0 -> I think this happened because JS turned the string version of 5 back to a number and subtracted it.
// my guess was based on what would happen if you subtracted a string and int in C++

console.log(typeof (a + b));
// string
console.log(typeof (b + b));
// string
console.log(typeof(a - b));
// number
// Changed to a number due to type coercion, where a value is converted from one type to another.

console.log()
console.log("Ex.D")
// Exercise D - Equality Experiment
// Investigate these two equality operators:
// ==
// and ===

// Given:
const numberFive = 5;
const stringFive = "5";

//Predict result of:
console.log(numberFive == stringFive)
// I think that == is asking if the two values are equal, in this case, its asking is 
// the int form of 5 equal to the string form of 5, my prediction is no so false, they are two diff types
// actual true;
// correction true due to permission of type coercion (loose equality)

console.log(numberFive === stringFive)
// === is new to me so I predict this will work as something along the lines of ignoring the types,
// are these two equal? My answer is yes so true;
// actual : false;
// correction compares without type coercion -> strict equality

console.log()
console.log("Ex.E")
// Exercise E - Const Experiment

const favoriteLanguage = "C++";
//favoriteLanguage = "JavaScript";

// What will happen?
// Prediction: because we explicitly declared the variable favoriteLanguage as const
// we will get printed out C++

console.log(favoriteLanguage)
// actual: type error -> Assignment to constant variable. This is caused by line 126 as we try to
// assign "JavaScript" to a variable that is already const and is assigned to "C++"
// The part of the error that tells us that is this TypeError: Assignment to constant variable.
// and at Object.<anonymous> (C:\Users\Brian Ho\Desktop\MyGitHub\SWE---Zero-to-Hero\01-programming\javascript\day-001\ex2 - JS types:126:18)
// which tells us the line in which the error occured.

// Important lesson: const does not mean the value can never change
// it just prevents the reassignment of the variable binding