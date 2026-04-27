const hamburger = document.getElementById("hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navlinks.classList.toggle("display");
});

const toggle = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("click", function () {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

    function setMood(mood) {
      output.innerHTML = `<p>Your mood is: <strong>${mood}</strong></p>`;
    }

