function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getPlayerChoice() {
  document.getElementById("submitBtn").addEventListener("click", function() {
    const playerInput = document.getElementById("inputValue").value;
    const a = playerInputValidation(playerInput)
    console.log(a);
  });
}

function playerInputValidation(playerInput) {
  const options = ['rock', 'paper', 'scissors'];
  const choice = downcasePlayerInput(playerInput);
  options.includes(choice) ? console.log('valid') : invalidPlayerInput();
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



console.log(getComputerChoice());
console.log(getPlayerChoice());

