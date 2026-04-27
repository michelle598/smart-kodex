const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const jokeBtn = document.getElementById("get-joke-btn");

// 🔗 Change this URL if you want to use a different API
const API_URL = "https://official-joke-api.appspot.com/random_joke";

async function fetchJoke() {
  // UI: Loading state
  jokeBtn.disabled = true;
  jokeBtn.textContent = "Loading...";
  setupEl.textContent = "Fetching a joke...";
  setupEl.classList.remove("error");
  punchlineEl.textContent = "";
  punchlineEl.classList.remove("visible");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Update UI with joke data
    setupEl.textContent = data.setup;
    punchlineEl.textContent = data.punchline;

    // Trigger punchline animation
    requestAnimationFrame(() => {
      punchlineEl.classList.add("visible");
    });
  } catch (error) {
    console.error("Failed to fetch joke:", error);
    setupEl.textContent = "😅 Oops! Failed to load a joke. Please try again.";
    setupEl.classList.add("error");
  } finally {
    // UI: Reset button
    jokeBtn.disabled = false;
    jokeBtn.textContent = "Get a Joke";
  }
}

// Event Listener
jokeBtn.addEventListener("click", fetchJoke);

// Optional: Load a joke immediately on page load
// fetchJoke();
