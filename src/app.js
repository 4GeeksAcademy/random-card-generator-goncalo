/* eslint-disable */
import "bootstrap";
import "./style.css";

function generateCard() {
  const suits = ["heart", "spade", "club", "diamond"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  // Generate random index for suits and values arrays
  const suitIndex = Math.floor(Math.random() * suits.length);
  const valueIndex = Math.floor(Math.random() * values.length);

  // Select the card element and set its class to the randomly selected suit
  const card = document.getElementById("card");
  card.className = "card " + suits[suitIndex];

  // Set the content of the card to the randomly selected value
  card.textContent = values[valueIndex];
}

function generateCardEvery10Seconds() {
  generateCard();
  setTimeout(generateCardEvery10Seconds, 1000);
}

function generateCardByDimensions() {
  const widthInput = document.getElementById("input-width").value;
  const heightInput = document.getElementById("input-height").value;
  card.style.width = widthInput + "px";
  card.style.height = heightInput + "px";
}
// Generate a random card when the page loads
window.onload = generateCard;

// Generate a Random Card Button Event
document.getElementById("generateCard").addEventListener("click", generateCard);
document
  .getElementById("timerGenerator")
  .addEventListener("click", generateCardEvery10Seconds);
document
  .getElementById("dimensions-button")
  .addEventListener("click", generateCardByDimensions);
