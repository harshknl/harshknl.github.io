"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "NO Input";
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".message").textContent = "Correct Guess🎉";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#00FA9A";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector(".message").textContent =
        guess < secretNumber ? "little higher" : "litle lower";
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
