Number
// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);
// let age = 20;
// console.log(age);
// let name = "vicky";
// console.log(name);

// MATH OBJECT 
const pi = Math.PI;
console.log(pi);
let force = 3.5;

console.log(Math.round(force));  //rounding to the nearst number
console.log(Math.floor(force));   //rounding down
console.log(Math.ceil(force));    //rounding up

console.log(Math.min(-5,3,20,4,5,10));
console.log(Math.max(-5,3,20,4,5,10));

const random = Math.random();
console.log(random);
const num= Math.floor(Math.random() * 100)
console.log(num);

// absolute value 
console.log(Math.abs(-10));
console.log(Math.abs(10));

// square root 
console.log(Math.sqrt(169));
console.log(Math.sqrt(4));


// power 
console.log(Math.pow(3,2));
console.log(Math.pow(12,2));
console.log(Math.E);
console.log(Math.log(2));
console.log(Math.sin(30));
console.log(Math.cos(60));


// DATE OBJECT 
const date = new Date();
console.log(date);

// STRING OBJECT 
// let firstName = "Vicky";
// let lastName = "Smart";
// console.log(fullName);

// STARINESS:These are texts, wthich are under single '', double"". backticks``quote. To delcare a string, we needs a variable name, assigning operator, a value under a single quote, double quote or backticks quote.Exmaple:
let firstname = "emmanuel";
let Lastname = "onyekachi";
let fullname = firstname + " " + Lastname;
let space = " I don't want to be here ";
let sentence = "I don't want to be here";
let age3 = 25;
let country = "Nigeria";
let job = "developer";
let city = "awka";

// String Concatenation: This conects two or more strings together. we make use of plus signs "+" to acjieve that. 
// let fullname= fullname + space + Lastname;
console.log(fullname);
let personInfo = fullname + " I am " + age3 + " "+ "I live in " + country;
console.log(personInfo);

let a = 2;
let b =3;
let langage = "javascript";
let sum = `the sum of ${a} and ${b} is ${a+b}`;
let personInfoTwo = `I am ${fullname} I am ${age3} I live in ${country} I work as a ${job} in ${city}`
let personInfoThree =`I am ${fullname} I am ${age3} I live in ${country} I work as a ${job} in ${city}. I teach ${langage}`
console.log(fullname + space);
console.log(sum);

//STRING METHODS: Everything in JavaScript is an object. A string is a primitive datattypes that means we can not modify it once it is created. The string object has many string methods, that can help us to work with strings. 

//1. length: This returns the number of characters in a string including the empty space. 
let js = 'javaScript .'
console.log(js.length)

//2. Accesing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of its string is zero, and the last index is the lenght of the string minus one. 
let string = 'JavaScript'
let firstLetter = string[0]
let thirdLetter = string[2]
let ninthLetter = string[9]
let lastLetter = string.length - 1;
console.log(firstLetter)
console.log(thirdLetter)
console.log(lastLetter)
console.log(ninthLetter)

//3. toUpperCase(): this method changes the string to uppercase letters
console.log(string.toUpperCase())

//4. toLowerCase(): this method changes the string to lowercase letters
let string2 = "JAVASCRIPT"
console.log(string2.toLowerCase())

//5. substring(): it takes two arguements, the starting index and the stopping indesss but it doesnt include the caharcter at the stopping index. 
let string4 = 'JavaScript ';
console.log(string4.substring(0, 4))
console.log(string4.substring(4, string4.length - 1))

// 6. split(): Thus splite a string at a specified place. it converts the valeus to an array. 
let strings= `30 days of javascript`
console.log(string.split())
console.log(string.split());

let countries =`finlend, norway, denmark, iceland, sweden, norway`
console.log(string.split());
console.log(string.split(','));

//7. slice(): it takes two arguements, the starting index and the stopping index. It does not include the character at the stopping index. 
let string5 = 'JavaScript';
console.log(string5.slice(0, 4))
console.log(string5.slice(4, string5.length - 1))

// 8. trim(): It removes whitespace from both sides of a string. 
let string6 = ' 30 days of javascript ';
console.log(string6.trim())

// 9. replace(): It replaces a specified value with another value in a string. 
let string7 = '30 days of javascript';
console.log(string7.replace('javascript', 'python'))

// 10. include(): It returns true if a string contains the specified value. otherwise it returns false
let string8 = '30 days of javascript';
console.log(string8.includes('Javascript'.toLocaleLowerCase()))

// 11. charAt(): It returns the character at the specified index. 
let string9 = '30 days of javascript';
console.log(string9.charAt(15))
let lstindex = string9.length - 1;
console.log(string9.charAt(lstindex))


// 12. indexOf(): It returns the index of the first occurrence of a specified value in a string, or -1 if not found. 
let string10 = '30 days of javascript';
console.log(string10.indexOf('a'))
console.log(string10.indexOf('w'))
console.log(string10.indexOf("javascript"));

// 13. charCodeAt(): it take index and it returns char code (ASCII number) of the value at that index.
let string11 = '30 days of javascript';
console.log(string11.charCodeAt(15))
console.log(string11.charCodeAt(lstindex))

// 14. lastIndexOf(): It returns the index of the last occurrence of a specified value in a string, or -1 if not found. 
let string12 = '30 days of javascript';
console.log(string12.lastIndexOf('v'))
console.log(string12.lastIndexOf('w'))
console.log(string12.lastIndexOf('javascript'))

// 15. concat(): It is used to join two or more strings. 
let string13 = '30 days of '
let string14 = 'javascript';
console.log(string13.concat(string14))

// 16. repeat(): It is used to repeat a string a specified number of times. 
let string15 = 'javascript';
console.log(string15.repeat(3))

// 17. startsWith(): It takes a subbstring as an argument and it checks if the string starts with that substring. 
let string16 = 'javascript';
console.log(string16.startsWith('java'))
console.log(string16.startsWith('script'))

// 18. endsWith(): It takes a subbstring as an argument and it checks if the string ends with that substring. 
let string17 = 'javascript';
console.log(string17.endsWith('pt'))
console.log(string17.endsWith('java'))

// 19. search(): It takes a subbstring as an argument and it checks if the string contains that substring. 
let string18 = 'javascript';
console.log(string18.search('java'))
console.log(string18.search('script'))

// 20. match(): It takes a regular expression as an issue and it checks if the string matches the regular expression. 
let string19 = 'javascript';
console.log(string19.match('java'))
console.log(string19.match('script'))


//  CHECKING DATA TYPES
// 1. typeof: It returns the data type of a variable. 
let string20 = 'javascript';
console.log(typeof string20)

let job2;
let job3 = null;
let job4 = 0;
console.log(typeof job2)
console.log(typeof job2);
console.log(typeof job3);
console.log(typeof job4);

// 2. instanceof: It returns true if an object is an instance of a certain class. 
let string21 = 'javascript';
console.log(string21 instanceof String)
console.log(string21 instanceof Object)


//CHECKING DATA TYPES
let job8;
let job9 = " ";
let job5 = null
let job6 = 0
let job7 = ' ';

console.log(typeof job3)
console.log(typeof job4)
console.log(typeof job5)
console.log(typeof job6)
console.log(typeof job7)
console.log(typeof job8)
console.log(typeof job9)

//CASTING: Converting one data to another data type. We use parseInt(), parseFloat(), Number(), +sign, str(). 
let num2 = '10'
let num2Int4   = parseInt(num2)
let num2Int2 = Number(num2)
let num2Int3 = +num2
console.log(num2Int4 + 11)

// ASSIGMENT OPERATORS: 
// 1. =: assigment operator
// 2. +=: addition assigment operator
// 3. -=: subtraction assigment operator
// 4. *=: multiplication assigment operator
// 5. /=: division assigment operator
// 6. %=: modulus assigment operator
// 7. **=: exponantiation assigment operator
// 8. &=: bitwise AND assigment operator
// 9. |=: bitwise OR assigment operator
// 10. =: bitwise XOR assigment operator
// 11. >>=. right shift assigment operator
// 12. <<=. left shift assigment operator
// 13. ??=: mulish coalescing assigment operator
// 14. &=: nullish coalescing assigment operator


console.log(10>3)
console.log(3 >= 2)
console.log(3 < 2)
console.log(2< 3)
console.log(2 <=3)
console.log(2 ==3)
console.log(2 !=3)
console.log (3 == '3')
console.log(3 ==='3')
console.log(3 !== '3')
console.log(3 != '3')
console.log(3 !=3)
console.log(0 == false)
console.log(0 === false)
console.log(0 == "")
console.log(undefined == null)
console.log(NaN == null)







