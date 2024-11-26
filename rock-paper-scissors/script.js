function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  const buttons = document.querySelectorAll('button');
  const resultDiv = document.getElementById('result');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerSelection = button.id; // 'rock', 'paper', or 'scissors'
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      resultDiv.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}. ${result}`;
    });
  });
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      return "You win!";
    } else {
      computerScore++;
      return "You lose!";
    }
  }
  