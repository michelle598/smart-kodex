let count = 0;
let interval; // to store setInterval

function startCounter() {
  // prevent multiple intervals running
  if (!interval) {
    interval = setInterval(() => {
      count++;
      document.getElementById("counter").textContent = count;
    }, 1000); // increases every 1 second
  }
}

function stopCounter() {
  clearInterval(interval);
  interval = null; // reset so it can start again
}
