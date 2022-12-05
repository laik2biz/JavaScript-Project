//Rock Papers Scissors

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Invalid input");
  }
};

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  console.log(num);

  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else if (num === 2) {
    return "scissors";
  } else {
    console.log("Invalid!");
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else if (computerChoice !== "paper") {
      return "User won!";
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer won!";
      } else if (computerChoice === "rock") {
        return "User won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer won!";
      } else if (computerChoice === "paper") {
        return "User won!";
      }
    }
  }
}

function playGame() {
  userChoice = getUserChoice("ROCK");
  computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
