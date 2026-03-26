// Get the current year
const currentYear = new Date().getFullYear();

// Get user input
const birthYear = parseInt(prompt("Enter birth year:"));

// Calculate age
const age = currentYear - birthYear;

// Check driving eligibility
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`);
} else {
    const yearsToWait = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
}

// Get user input
const yearsLived = parseInt(prompt("Enter number of years you live:"));

// Calculate seconds (365 days * 24 hours * 60 minutes * 60 seconds)
// Note: This ignores leap years for simplicity, matching the example output.
const secondsInYear = 365 * 24 * 60 * 60;
const totalSeconds = yearsLived * secondsInYear;

console.log(`You lived ${totalSeconds} seconds.`);

const now = new Date();

// Helper function to add leading zero if needed (e.g., 5 -> 05)
const pad = (num) => String(num).padStart(2, '0');

// Extract date components
const year = now.getFullYear();
const month = pad(now.getMonth() + 1); // getMonth() returns 0-11
const day = pad(now.getDate());
const hours = pad(now.getHours());
const minutes = pad(now.getMinutes());

// Format 1: YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);

// Format 2: DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);

// Format 3: DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);