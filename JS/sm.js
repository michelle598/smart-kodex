// INCREMENT AND DECREMENT OPERATORS
// increment operators: this increment a value , which could be either prg or past incremnt.
// decrement operators: this decrement a value, which could be either prg or past decremnt.

// pre-increment
let count = 0;
console.log(++count);
// post-increment
let count2 = 0;
console.log(count2++);
// pre-decrement
let count3 = 0;
console.log(--count3);
// post-decrement
let count4 = 0;
console.log(count4--);

// TERMARY OPERATORS: this allow you to wirte a condition. ?(if) and :(else)
let inisling = false;
//varble ? result : result
inisling ? console.log('you do not need an unbreliable ') : console.log('you need an unbreliable ');

let ieveting = false;
ieveting ? console.log('me is above 18 years and he has a vetrs card ') : console.log(' he not up to 18 years ');
 let number = 5;
    number = -5
    number > 0 ? console.log('${number} is a positive number') : console.log("${number} is a negative number");
    

    alert(" Hello World")

  let name =  prompt("WHat is your name:")
  console.log(name)

  // WINDOW METHOD :
  // comfiem: this is a widow methood that dlsplay a dialog box with a specified message along with an OK button and a cancel button. EXMPLE:
  const agree = confirm("are you sure you want to delete ");
  console.log(agree)

  // DATE OBJECT
  const now = new Date();
  console.log(now);

  // GETTING A FULL YEAR
  const years = now.getFullYear();
  console.log(now.getFullYear());

  // GETTING A MONTH
  const month = now.getMonth();
  console.log(now.getMonth ()+1);

  // GETTING A DAY
  const day = now.getDate();
  console.log(now.getDate());

  const todaysdate = `${date}${month}${years}`
  console.log(todaysdate);

  const seconds = now.getSeconds()
const minutes = now.getMinutes()
const hours = now.getHours()
const milliSeconds = now.getMilliseconds()

const time = `${hours}:${minutes}:${seconds}`
console.log(time);

const time2 = `${hours}:${minutes}:${seconds} ${milliSeconds}`
console.log(time2)
console.log(utcMIns)


//CONDITIONALS
// if , else if , else 
// switch, TERNARY OPERATOR

// IF
// if(condtion){
//   //this part of the code is going to be executed if the condtion is true
// }

let number10 = -3
if (number10 > 0) {
  console.log(`${number} is a positive value`)
}

let isRaining = false
if (isRaining) {
  console.log("remember to take your rain coat")
}

// IF ELSE
// if (condtion) {
//   //this part of the code is going to be executed if the condtion is true
// } else {
//   //this part of the code is going to be executed if the condtion is false
// }

let number11 = -3
if (number11 > 0) {
  console.log(`${number} is a positive value`)
} else {
  console.log(`${number} is a negative value`)
} 

let isRaining2 = false
if (isRaining2) {
  console.log("remember to take your rain coat")
} else {
  console.log("no need to take your rain coat")
}

// IF ELSE IF ELSE
// if (condtion) {
//   //this part of the code is going to be executed if the condtion is true
// } else if (condtion2) {
//   //this part of the code is going to be executed if the condtion is true
// } else {
//   //this part of the code is going to be executed if the condtion is false
// }

let weather = "sunny"
if (weather === "rainy") {
  console.log("remember to take your rain coat")
} else if (weather === "cloudy") {
  console.log("it might be clod, you need a jacket")
} else if (weather === "sunny") {
  console.log("go out freely")
}else {
  console.log("no need of a rain coat")
}

// SWITHCH STATEMENT 
// This is used to compare are value with multiple  oprtion.... often as an aiterntive to multiple if...else statement

let day8 =6
switch (day) {
  case 1:
    console.log("monday")
    break;
  case 2:
    console.log("tuesday")
    break;

  case 3:
    console.log("wednesday")
    break;
  default:
    console.log("invalid day")
    break;
}

//
