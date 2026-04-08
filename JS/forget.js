document
  .getElementById("forgotPasswordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const inputValue = this.querySelector("input").value.trim();
    if (inputValue) {
      alert("OTP code sent to your email/phone!");
      // Here you would send the request to your server
      console.log("Sending OTP to:", inputValue);
    } else {
      alert("Please enter your email or phone number");
    }
  });

function goBack() {
  // Redirect to login page
  alert("Redirecting to login page...");
  // window.location.href = '/login';
}

// Add input focus effect
const input = document.querySelector(".input-field");
input.addEventListener("focus", function () {
  this.style.transform = "scale(1.02)";
});

input.addEventListener("blur", function () {
  this.style.transform = "scale(1)";
});
