const counterDiv = document.getElementById("count1");
const increaseButton1 = document.getElementById("increaseBtn1");

let count = 0;

increaseButton1.addEventListener("click", function () {
  count++;
  counterDiv.textContent = count;
});

// STEP 2:INCREMENT AND DECREMENT,REST
let count2 = 0;
const countDisplay2 = document.getElementById("count2");

document.getElementById("increaseBtn2").addEventListener("click", function () {
  count2++;
  countDisplay2.textContent = count2;
});

// Decrement button
document.getElementById("decreaseBtn2").addEventListener("click", function () {
  count2--;
  countDisplay2.textContent = count2;
});

// Reset button
document.getElementById("resetBtn2").addEventListener("click", function () {
  count2 = 0;
  countDisplay2.textContent = count2;
});

// STEP 3 : MIN & MAX LIMITS

let count3 = 0;
const min3 = 0;
const max3 = 100;

const countDisplay3 = document.getElementById("count3");
const increaseBtn3 = document.getElementById("increaseBtn3");
const decreaseBtn3 = document.getElementById("decreaseBtn3");

increaseBtn3.addEventListener("click", function () {
  if (count3 < max3) {
    count3++;
    countDisplay3.textContent = count3;
  }
});

decreaseBtn3.addEventListener("click", function () {
  if (count3 > min3) {
    count3--;
    countDisplay3.textContent = count3;
  }
});

// STEP 4: KEYBOARD INTERACTION

let count4 = 0;
const countDisplay4 = document.getElementById("count4");
document.addEventListener("keydown", function (ada) {
  if (ada.key === "+") count4++;
  if (ada.key === "-") count4--;
  countDisplay4.textContent = count4;
});

// STORE THE COUNT IN LOCAL STORAGE
let count5 = parseInt(localStorage.getItem("val")) || 0;

// ParseInt convert a value to a number
// "5" -> 5
const countDisplay5 = document.getElementById("count5");
countDisplay5.textContent = count5;

const increaseBtn5 = document.getElementById("increaseBtn5");

increaseBtn5.addEventListener("click", function () {
  count5++;
  localStorage.setItem("val", count5);

  countDisplay5.textContent = count5;
});

const resetBtn5 = document.getElementById("resetBtn5");
resetBtn5.addEventListener("click", function () {
  count5 = 0;
  localStorage.setItem("val", count5);
  countDisplay5.textContent = count5;
});
