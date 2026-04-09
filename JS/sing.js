document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("userInput").value.trim();

  if (input === "") {
    alert("Please enter your email or phone");
  } else {
    alert("Signing in with: " + input);
  }
});
