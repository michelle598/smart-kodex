const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Function to show Errors

// this function recieves an input and receives a message
function showError(input, message) {
  const field = input.parentElement; // this will get the parent element of the input

  const small = field.querySelector("small"); // this will get the small element inside the field

  input.classList.add("error");
  input.classList.remove("success");

  small.textContent = "";
}

// Live validation
nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
  } else {
    showSucces();
  }
});
