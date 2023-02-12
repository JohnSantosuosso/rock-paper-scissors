const options = ['rock', 'paper', 'scissors'];
var playerSelection = '';
var playerScore = 0;
var computerScore = 0;
var tieScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const choice = options[randomIndex];
  return options.indexOf(choice);
}

function getPlayerChoice() {
  document.getElementById("submitBtn").addEventListener("click", function() {
    clearMessage()
    clearDisplayScore()
    clearWinnerMessage()
    const playerInput = document.getElementById("inputValue").value;
    return playerInputValidation(playerInput)
  });
}

function playerInputValidation(playerInput) {
  const choice = downcasePlayerInput(playerInput);
  options.includes(choice) ? showPlayerInput(choice) : invalidPlayerInput();
}

function downcasePlayerInput(playerInput) {
  const downcased = playerInput.toLowerCase();
  return downcased;
}

function invalidPlayerInput() {
  var validInput = document.getElementById("validate")
  var errorMessage = document.createElement('p');

  errorMessage.innerText = 'Invalid input, please try again';
  validInput.appendChild(errorMessage);
}

function showPlayerInput(choice) {
  var validInput = document.getElementById("validate")
  var confirmChoice = document.createElement('p');

  confirmChoice.innerText = `You have selected "${choice}"...`;
  validInput.appendChild(confirmChoice);
  return enumeratePlayerInput(choice);
}

function enumeratePlayerInput(choice) {
  var playerSelection = options.indexOf(choice);
  compareChoices(playerSelection);
}

function compareChoices(playerSelection) {
  var computerSelection = getComputerChoice();
  setTimeout(function() {
    showComputerInput(options[computerSelection]);
  }, 2000);
  if (playerSelection === computerSelection ) {
    tieScore += 1;
    displayScore(playerScore, computerScore, tieScore)
    checkWinner()
  } else if (computerSelection === (playerSelection + 1) % options.length) {
    computerScore += 1;
    displayScore(playerScore, computerScore, tieScore)
    checkWinner()
  } else {
    playerScore += 1;
    displayScore(playerScore, computerScore, tieScore)
    checkWinner()
  }
}

function showComputerInput(computerSelection) {
  const findMessage = document.getElementById("validate")
  const computerMessage = document.createElement('p');
  computerMessage.innerText = `Computer has selected "${computerSelection}"...`;
  findMessage.appendChild(computerMessage);
}

function clearMessage() {
  const validate = document.getElementById("validate");
  while (validate.firstChild) {
    validate.removeChild(validate.firstChild);
  }
}

function displayScore(playerScore, computerScore, tieScore){
  const findScore = document.getElementById("score")
  const displayScore = document.createElement('p');
  displayScore.innerText = `You have won ${playerScore} games and Computer has won ${computerScore} games.  You have tied ${tieScore} games.`
  setTimeout(function() {
    findScore.appendChild(displayScore);
  }, 3000);
}

function clearDisplayScore() {
  const clearScore = document.getElementById("score");
  while (clearScore.firstChild) {
    clearScore.removeChild(clearScore.firstChild);
  }
}

function clearWinnerMessage() {
  const clearWinner = document.getElementById("winner");
  while (clearWinner.firstChild) {
    clearWinner.removeChild(clearWinner.firstChild);
  }
}

function checkWinner() {
  if (playerScore == 5 || computerScore == 5) {
    playerScore == 5 ? playerWins() : computerWins();
  } else {
    nextRoundMessage();
  }
}

function playerWins() {
  const playerWinner = document.getElementById("winner")
  const winMessage = document.createElement('p');
  winMessage.innerText = `You win!!`;
  setTimeout(function() {
    playerWinner.appendChild(winMessage);
  }, 4000);
}

function computerWins() {
  const computerWinner = document.getElementById("winner")
  const winMessage = document.createElement('p');
  winMessage.innerText = `Computer wins!!`;
  setTimeout(function() {
    computerWinner.appendChild(winMessage);
  }, 4000);
}

function nextRoundMessage() {
  const winnerMessage = document.getElementById("winner")
  const message = document.createElement('p');
  message.innerText = `Next round!!`;
  setTimeout(function() {
    winnerMessage.appendChild(message);
  }, 4000);
}

getPlayerChoice();
