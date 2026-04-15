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
const max3 = 20;

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
