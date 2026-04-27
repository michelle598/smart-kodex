const fullname = localStorage.getItem("fullname");
const email = localStorage.getItem("email");

if (fullname) {
  document.getElementById("welcome").textContent =
    `Hello ${fullname},! Welcome back to your dashboard. Your registered email is ${email}.`;
} else {
  window.location.href = "create.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "create.html";
}
