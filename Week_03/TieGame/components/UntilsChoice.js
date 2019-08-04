const CHOICES = [
  {
    name: "Rock",
    uri:
      "https://www.clipartmax.com/png/middle/406-4069955_rock-paper-scissors-rock-paper-scissors.png"
  },
  {
    name: "Paper",
    uri:
      "https://www.clipartmax.com/png/middle/428-4288895_rock-paper-scissors-sign.png"
  },
  {
    name: "Scissors",
    uri:
      "https://www.clipartmax.com/png/middle/428-4288836_your-hand-hand-clipart-png-rock-paper-scissors.png"
  }
];
const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];
const getRoundOutcome = userChoice => {
  const computerChoice = randomComputerChoice();
  let result;
  if (userChoice.name === "Rock") {
    result = computerChoice.name === "Scissors" ? "Winner!" : "Lose!";
  }
  if (userChoice.name === "Paper") {
    result = computerChoice.name === "Rock" ? "Winner!" : "Lose!";
  }
  if (userChoice.name === "Scissors") {
    result = computerChoice.name === "Paper" ? "Winner!" : "Lose!";
  }

  if (userChoice.name === computerChoice.name) result = "Tie game!";
  return [result, computerChoice];
};
const getResultColor = result => {
  if (result === "Winner!") return "green";
  if (result === "Lose!") return "red";
  return null;
};

export { CHOICES, getRoundOutcome, getResultColor };
