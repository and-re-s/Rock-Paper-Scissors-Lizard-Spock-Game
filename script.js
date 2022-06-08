import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const playerLizard = document.querySelector("#playerLizard");
const playerSpock = document.querySelector("#playerSpock");

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");
const computerLizard = document.querySelector("#computerLizard");
const computerSpock = document.querySelector("#computerSpock");

const infoDiv = document.querySelector(".game-rules-container");
const allGameIcons = document.querySelectorAll(".fa-regular");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;

let computerChoice = "";

// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
}

// Passing value, selected by player
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = "Choice: Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = "Choice: Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = "Choice: Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = "Choice: Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = "Choice: Spock";
      break;
    default:
      break;
  }
}

// Computer selecting figure
function computerRandomChoice() {
  const computerRandomChoice = Math.random();
  if (computerRandomChoice < 0.2) {
    computerChoice = "rock";
  } else if (computerRandomChoice <= 0.4) {
    computerChoice = "paper";
  } else if (computerRandomChoice <= 0.6) {
    computerChoice = "scissors";
  } else if (computerRandomChoice <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

// Adding info about computer choice
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = "Choice: Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = "Choice: Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = "Choice: Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = "Choice: Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = "Choice: Spock";
      break;
    default:
      break;
  }
}

// Checking results, increasing scores on screen, drop confetti
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.includes(computerChoice)) {
      startConfetti();
      resultText.textContent = "You won!";
      playerScoreNumber++;
      playerScoreEl.textContent = `Score: ${playerScoreNumber}`;
    } else {
      resultText.textContent = "You lose";
      computerScoreNumber++;
      computerScoreEl.textContent = `Score: ${computerScoreNumber}`;
    }
  }
}

function showRules() {
  console.log("toggle");
  if (infoDiv.style.display === "none") {
    infoDiv.style.display = "block";
  } else {
    infoDiv.style.display = "none";
  }
}

function resetAll() {
  playerScoreNumber = 0;
  playerScoreEl.textContent = "Score: 0";
  playerChoiceEl.textContent = "Choice: ";
  computerScoreNumber = 0;
  computerScoreEl.textContent = "Score: 0";
  computerChoiceEl.textContent = "Choice: ";
  resultText.textContent = "";
  resetSelected();
}

window.reset = resetAll;
window.select = select;

resetAll();
