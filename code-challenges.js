// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

// first we need two values so we can compare them. We were given both (temp and boiling temp)
// We need to create a conditional statement in order to compare those numbers (IF/ELSE)
// Consol.log the outcome with expected output for each variable offered
// for consol.log we are going to use template literals for reusable functionality

const temp = 42
// Expected output: "42 is below boiling point"

// const temp = 350
// Expected output: "350 is above boiling point"

// const temp = 212
// Expected output: "212 is at boiling point"

const boilingTemp = 212
if(boilingTemp > temp){
    console.log(`${temp} is below boiling point`)
} else if (boilingTemp < temp) {
    console.log(`${temp} is above boiling point`)
} else {
    console.log(`${temp} is at boiling point`)
}

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

// first we need to combine the two arrays into one. We can use "concat" method for this.
// next will be counting the elements. For this we can use "length" method
// consol log the entire step as one unifying command using method chaining approach

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
//we are going to use method chaining to make this code more concise 
//first we need to turn the string variable (currentCohort) into an array by using "split" method 
//at this point we can use "reverse" method to reverse the individual elements of the string to get this ['2', '2', '0', '2',' ', 't', 'o', 'r','t', 'x', 'o', 'F']
// now we just need to reverse the process and turn the array back into a string using "join" method
// last step is executing the console.log with above given instruction.

const currentCohort = "Foxtrot 2022"
console.log(currentCohort.split("").reverse().join(""))

// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// given the verbiage of the problem we know lastIndexOf method will be used
// we are given the number we have to look for in the array myNumbers - 42. We are going to use variable givenValue1/givenValue1 as an argument in the method lastIndexOf.
// lastly we are going to console.log using method chaining with the values provided 


const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
console.log(myNumbers.lastIndexOf(givenValue1))

// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))

// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// we are going to use "sort" method on given array
// however, that will not be enough because we need the numbers in descending order (sort method returns numbers in ascending order)
// "reverse" method will be used at the very end of the process since we need exactly the opposite order from what we have at this point
// last step will be console.log where we get to call another method chaining for assistance

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

console.log(sanDiegoSummerTemperatures.sort((a, b) => a - b).reverse())
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]

console.log(sanDiegoWinterTemperatures.sort((a, b) => a - b).reverse())
// Expected output: [68, 67, 66, 66, 62, 59, 59]
