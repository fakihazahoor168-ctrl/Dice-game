// Select elements
const dice1Img = document.getElementById("dice1");
const dice2Img = document.getElementById("dice2");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const winnerText = document.getElementById("winner");
const rollBtn = document.getElementById("rollBtn");

// Roll dice function
function rollDice() {
  // Generate random numbers 1-6
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  // Update images
  dice1Img.src = `images/dice${dice1}.png`;
  dice2Img.src = `images/dice${dice2}.png`;

  // Update numbers below dice
  number1.textContent = dice1;
  number2.textContent = dice2;

  // Determine winner
  if (dice1 > dice2) {
    winnerText.textContent = "Player 1 Wins! 🎉";
  } else if (dice2 > dice1) {
    winnerText.textContent = "Player 2 Wins! 🎉";
  } else {
    winnerText.textContent = "It's a Tie! 🤝";
  }
}

// Add click event
rollBtn.addEventListener("click", rollDice);
