const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
document.getElementById('play-again').addEventListener('click', resetGame);

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computer-choice').textContent = computerChoiceEmoji(computerChoice);

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You won!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }

    updateScore();
    document.getElementById('result-message').textContent = result;
    document.getElementById('play-again').style.display = 'block';
}

function computerChoiceEmoji(choice) {
    switch(choice) {
        case 'rock':
            return '🪨';
        case 'paper':
            return '📄';
        case 'scissors':
            return '✂️';
    }
}

function updateScore() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function resetGame() {
    document.getElementById('computer-choice').textContent = '❓';
    document.getElementById('result-message').textContent = '';
    document.getElementById('play-again').style.display = 'none';
}
