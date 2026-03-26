// 1. Declare variable
let challenge = "30 Days Of JavaScript";

// 2. Print the string
console.log(challenge);

// 3. Print length
console.log(challenge.length);

// 4. Convert to uppercase
console.log(challenge.toUpperCase());

// 5. Convert to lowercase
console.log(challenge.toLowerCase());

// 6. Cut first word (30)
console.log(challenge.substring(0, 2)); // or substring(0, 2), 0 `n being from the frist character, 2 `n  take 2 characters

// 7. Slice out 'Days Of JavaScript'
console.log(challenge.substring(3)); // starts from index 3 and goes to the end, start: `n index where extraction being , length `n number of characters to extract`

// 8. Check if contains 'Script'
console.log(challenge.includes("Script"));

// 9. Split into array
console.log(challenge.split());

// 10. Split by space
console.log(challenge.split(" "));

// 11. Split companies string
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));

// 12. Replace JavaScript with Python
console.log(challenge.replace("JavaScript", "Python"));

// 13. Character at index 15
console.log(challenge.charAt(15));

// 14. Character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf("J")));

// 15. First occurrence of 'a'
console.log(challenge.indexOf("a"));

// 16. Last occurrence of 'a'
console.log(challenge.lastIndexOf("a"));

// 17. First 'because'
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

// 18. Last 'because'
console.log(sentence.lastIndexOf("because"));

// 19. Search 'because'
console.log(sentence.search("because"));

// 20. Trim whitespace
let str = " 30 Days Of JavaScript ";
console.log(str.trim());

// 21. Starts with '30'
console.log(challenge.startsWith("30"));

// 22. Ends with 'JavaScript'
console.log(challenge.endsWith("JavaScript"));

// 23. Match all 'a'
console.log(challenge.match(/a/g)); 
//  /a/ → the pattern (looking for the letter a)
// g → means global, i.e. find all matches, not just the first one 

// 24. Concat strings
let part1 = "30 Days of";
let part2 = "JavaScript";
console.log(part1.concat(" ", part2));

// 25. Repeat string twice
console.log(challenge.repeat(2));
