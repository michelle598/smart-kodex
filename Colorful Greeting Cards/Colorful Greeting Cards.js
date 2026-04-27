const cardNumber = document.getElementById("cardNumber");
const generateBtn = document.getElementById("generateBtn");
const cardContainer = document.getElementById("cardContainer");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// rgb(333,333,33)

// Math.random() -> 0 to 0.9999
//     * 254 -> 0 to 253.9999

// Math.floor() -> 0 to 253

function generateCards() {
  const count = Number(cardNumber.value);
  if (isNaN(count) || count < 0) {
    alert("Please enter a valid Number");
    return;
  }

  for (let i = 1; i <= count; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = randomColor();
    card.textContent = `Card ${i}`;
    cardContainer.appendChild(card);
  }
}

generateBtn.addEventListener("click", generateCards);
