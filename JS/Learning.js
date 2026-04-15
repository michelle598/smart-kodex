// Animate progress bars
document.querySelectorAll(".progress-bar").forEach((bar) => {
  let value = bar.getAttribute("data-progress");
  setTimeout(() => {
    bar.style.width = value + "%";
  }, 300);
});
