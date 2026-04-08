// Auto move to next input
const inputs = document.querySelectorAll(".code-box input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0 && input.value === "") {
      inputs[index - 1].focus();
    }
  });
});

// Verify button function
function verifyCode() {
  let code = "";
  inputs.forEach((input) => (code += input.value));

  if (code.length === 6) {
    alert("Code entered: " + code);
  } else {
    alert("Please enter complete code");
  }
}
