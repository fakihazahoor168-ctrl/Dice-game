function resetUI() {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");

  card1.classList.remove("winner-card", "tie-card");
  card2.classList.remove("winner-card", "tie-card");

  document.querySelectorAll(".winner-badge").forEach(badge => {
    badge.classList.add("d-none");
  });

  winnerText.textContent = "";
}

// Select elements
const dice1Img = document.getElementById("dice1");
const dice2Img = document.getElementById("dice2");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const winnerText = document.getElementById("winner");
const rollBtn = document.getElementById("rollBtn");

function createConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor =
      `hsl(${Math.random() * 360}, 100%, 50%)`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2000);
  }
}

function resetBadges() {
  document.querySelectorAll(".winner-badge").forEach(badge => {
    badge.classList.add("d-none");
  });
}

function rollDice() {
      resetUI(); 
  rollBtn.disabled = true;
  winnerText.textContent = "Rolling... 🎲";

  // Start animation
  dice1Img.classList.add("rolling");
  dice2Img.classList.add("rolling");

  let interval = setInterval(() => {
    const temp1 = Math.floor(Math.random() * 6) + 1;
    const temp2 = Math.floor(Math.random() * 6) + 1;

    dice1Img.src = `images/dice${temp1}.png`;
    dice2Img.src = `images/dice${temp2}.png`;
  }, 100);

  // Stop after 1 second
  setTimeout(() => {
    clearInterval(interval);

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    dice1Img.src = `images/dice${dice1}.png`;
    dice2Img.src = `images/dice${dice2}.png`;

    number1.textContent = dice1;
    number2.textContent = dice2;

    dice1Img.classList.remove("rolling");
    dice2Img.classList.remove("rolling");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

card1.classList.remove("winner-card", "tie-card");
card2.classList.remove("winner-card", "tie-card");
resetBadges();

if (dice1 > dice2) {
  winnerText.textContent = "Player 1 Wins! 🎉";
  card1.classList.add("winner-card");
  card1.querySelector(".winner-badge").classList.remove("d-none");
  createConfetti();
}
else if (dice2 > dice1) {
  winnerText.textContent = "Player 2 Wins! 🎉";
  card2.classList.add("winner-card");
  card2.querySelector(".winner-badge").classList.remove("d-none");
  createConfetti();
}
else {
  winnerText.textContent = "It's a Tie! 🤝";
  card1.classList.add("tie-card");
  card2.classList.add("tie-card");
}
    rollBtn.disabled = false;
  }, 1000);
}

rollBtn.addEventListener("click", rollDice);
