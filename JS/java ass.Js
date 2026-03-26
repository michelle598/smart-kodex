// Exercise 1: Driving Age
let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

// Exercise 2: Compare Ages
let myAge = 25; // Assuming 'my' age is 25 for this example
let yourAge = parseInt(prompt("Enter your age:"));

if (yourAge > myAge) {
    let diff = yourAge - myAge;
    console.log(`You are ${diff} years older than me.`);
} else if (myAge > yourAge) {
    let diff = myAge - yourAge;
    console.log(`I am ${diff} years older than you.`);
} else {
    console.log("We are the same age.");
}

// Exercise 3: Compare a and b
let a = 4;
let b = 3;

// Method 1: Using if...else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// Method 2: Using Ternary Operator
let result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(result);
// Exercise 4: Even or Odd
let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}

// Exercise 5: Grading System
let score = parseInt(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70 && score < 80) {
    console.log("Grade: B");
} else if (score >= 60 && score < 70) {
    console.log("Grade: C");
} else if (score >= 50 && score < 60) {
    console.log("Grade: D");
} else if (score >= 0 && score < 50) {
    console.log("Grade: F");
} else {
    console.log("Invalid Score");
}

// Exercise 6: Check Season
let month = prompt("Enter a month:");
// Convert to lowercase to handle case-insensitivity (e.g., "september", "September")
let monthLower = month.toLowerCase();

if (monthLower === 'september' || monthLower === 'october' || monthLower === 'november') {
    console.log("The season is Autumn.");
} else if (monthLower === 'december' || monthLower === 'january' || monthLower === 'february') {
    console.log("The season is Winter.");
} else if (monthLower === 'march' || monthLower === 'april' || monthLower === 'may') {
    console.log("The season is Spring.");
} else if (monthLower === 'june' || monthLower === 'july' || monthLower === 'august') {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month name.");
}
// Exercise 7: Weekend or Working Day
let dayInput = prompt("What is the day today?");

// Helper to capitalize first letter for display (e.g., "saturDaY" -> "Saturday")
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let dayNormalized = dayInput.toLowerCase();
let dayDisplay = capitalize(dayInput);

if (dayNormalized === 'saturday' || dayNormalized === 'sunday') {
    console.log(`${dayDisplay} is a weekend.`);
} else if (dayNormalized === 'monday' || dayNormalized === 'tuesday' || dayNormalized === 'wednesday' || dayNormalized === 'thursday' || dayNormalized === 'friday') {
    console.log(`${dayDisplay} is a working day.`);
} else {
    console.log("Invalid day name.");
}


