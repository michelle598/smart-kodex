// 1. strings
// Ask user for favorite color
let color = prompt("What is your favorite color?");

// Show alert using concatenation
alert("Wow " + color + " is a beautiful color");

// Show alert using template literal
alert(`Wow ${color} is a beautiful color`);

// 2. Conditionals
// Ask user to enter time (0–23)
let time = prompt("Enter current time (0 - 23):");

// Convert input to number
time = Number(time);

// Check conditions
if (time >= 0 && time <= 11) {
  alert("Good morning");
} else if (time >= 12 && time <= 17) {
  alert("Good afternoon");
} else if (time >= 18 && time <= 23) {
  alert("Good evening");
} else {
  alert("Invalid time entered");
}

//3. Comparisons
// Ask user to enter two numbers
let num = prompt("Enter a number:");

// Convert to number
num = Number(num);

// Check if divisible by 2
if (num % 2 === 0) {
  alert("Even number");
} else {
  alert("Odd number");
}

//4. Loops
// Print numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
  console.log(i);
}

//5.functions
// Function to multiply two numbers
function multiple(a, b) {
    return a * b;
}

// Ask user for input
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

// Convert to numbers
num1 = Number(num1);
num2 = Number(num2);

// Call function and show result
let result = multiple(num1, num2);
alert("The product is: " + result);

//6. Socpe
// Global variable
let message = "hello outside";

function showMessage() {
    // Local variable (inside function)
    let message = "hello inside";
    console.log(message);
}

// Call the function
showMessage();

// Log global variable
console.log(message);

//7. objects
// create object
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
    // color: "red"
  };
  
  // access object properties
  console.log("Make:", car.make);
  console.log("Model:", car.model);
  console.log("Year:", car.year);

  // add new property
  car.color = "red";
  
  // access new property
  console.log("Color:", car.color);

  //8. DOM Manipulation

  // Create a <p> element
let para = document.createElement("p");

// Add text
para.textContent = "Learning JavaScript is fun";

// Style it
para.style.color = "red";
para.style.fontSize = "24px";

// Add it to the page
document.body.appendChild(para);

