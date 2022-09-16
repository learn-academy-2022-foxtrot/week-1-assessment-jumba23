// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"];
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: Given that the method(push) in question, after adding "indigo" element, returns only a number, consol.log will only print that number. In this case, that is #5.

// --------------------1) What will this log?

const cohort = "LEARN 2022";
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Counting string characters of the variable "cohort" (including empty spaces) manually, I was able to count all the way to 10 :)

// --------------------2) What will this log?

const greeting = "Hello World!";
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The method in question will return a value of specified index [4]. In this case, that index of string variable is 4 and the letter is "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"];
const index = 1;
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: after declaring two variables (languages and index) we are consol.log-ing languages array with a specific index - [1]. This will produce string element with value - Ruby

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"];
// console.log(weekendDays.toUpperCase())

// a) Your answer: an error
// b) Verify and explain: this method is for strings. In order to converts the elements inside the array we would have to add .join() right after weekendDays and add .toUpperCase() to the very end of that notation.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"];
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: typeof will return the type of the "dataType.length". The key here is in method length and the value it returns .In this case that is 3 . Since "3" is a number, typeof will give us back "number" as data type, which is correct.
