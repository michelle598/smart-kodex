const button = document.getElementById("btn");
button.addEventListener("click", function () {
  alert("hello , wellcome to javascript");
});

button.addEventListener("click", function () {
  alert("hello , wellcome to javascript");
});

const title = document.getElementById("title");
const btnchange = document.getElementById("btnchange");

btnchange.addEventListener("click", function () {
  title.textContent = "javascript is awesome";
});
console.log("khvtdytf");

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops page reload
  alert("Form submitted");
});

const box = document.getElementById("box");
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "yellow";
  box.style.width = "200px";
   box.style.height = "200px";
   box.style.border = "2px solid white";
   box.style.color = "white";
});
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "black";
});

const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
addBtn.addEventListener("click", function () {
  const itemInput = document.getElementById("iteminput");
  const itemText = itemInput.value;
  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
  itemInput.value = "";
});

const nameinput = document.getElementById("nameinput");
nameinput.addEventListener("input", function () {
  const name = nameinput.value;
  const dlsplay = document.getElementById("dlsplay");
  dlsplay.textContent = " Hello" + name;
  
});

const from = document.getElementById("from");
from.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameinput.value;
  const dlsplay = document.getElementById("dlsplay");
  dlsplay.textContent = " Hello" + name;
});

const buttonRemove = document.getElementById("removeBtn");
buttonRemove.addEventListener("click", function () {
  const listItems = document.querySelectorAll("#list li");
  listItems.forEach(function (item) {
    item.remove();
  });
});

toggleBtn.addEventListener("click", function () {
  const listItems = document.querySelectorAll("#list li");
  listItems.forEach(function (item) {
    item.classList.toggle("completed");
  });
});


const toggleBtn = document.getElementById("darkBtn");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


