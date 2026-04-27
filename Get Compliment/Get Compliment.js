const compliments = [
  "You’re amazing!",
  "You’re a coding superstar!",
  "Your brain is powerful!",
  "You’re doing great!",
  "You learn fast!",
];

function generateCompliment() {
  const name = document.getElementById("nameInput").value;

  const randomIndex = Math.floor(Math.random() * compliments.length);

  document.getElementById("result").textContent =
    `⭐❤️⚡ ${name} ${compliments[randomIndex]}`;
}

const cards = [
  "What does HTML stand for?",
  "What is CSS used for?",
  "What is a function in JS?",
  "What is a variable?",
  "What does DOM mean?",
];

let index = 0;

function nextcard() {
  document.getElementById("card").textContent = cards[index];
  index++;

  if (index >= cards.length) index = 0;
}
