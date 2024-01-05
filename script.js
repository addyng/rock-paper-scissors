function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let ind = Math.floor(Math.random() * choices.length);
    return choices[ind];
}

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

const choices = document.getElementById('options');
const answer = document.getElementById('choices');
const playScore = document.getElementById('playerScore');
const compScore = document.getElementById('computerScore');
const buttons = document.getElementsByClassName('opt');
const results = document.getElementById('results');

//Uses bubbling
choices.addEventListener('click', (event) => {
    let target = event.target;

    if (target.matches('#rock, #paper, #scissors')) {
        switch(target.id) {
            case 'rock':
                playerChoice = "rock";
                break;
            case 'paper':
                playerChoice = "paper";
                break;
            case 'scissors':
                playerChoice = "scissors";
                break;
        }

        computerChoice = getComputerChoice();
        singlePlay(playerChoice, computerChoice);

        if (computerScore === 5 || playerScore === 5) {
            gameEnd();
        }
    }
});

function singlePlay(player, computer) {
    console.log(player);
    if (player === computer) {
        answer.textContent = `You both chose ${player}. Try again!`;
        return;
    }
    else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        answer.textContent = `You chose ${player} and the computer chose ${computer}. You won!`;
        playerScore++;
        playScore.textContent = `Player: ${playerScore}`;
    }
    else {
        answer.textContent = `You chose ${player} and the computer chose ${computer}. You lost!`;
        computerScore++;
        compScore.textContent = `Computer: ${computerScore}`;
    }
}

function gameEnd() {
    Array.from(buttons).forEach((btn) => {
        btn.disabled = true;
    });

    let playAgain = document.createElement('button');
    playAgain.className = "playAgain";
    playAgain.textContent = "Play Again?";
    results.appendChild(playAgain);

    playAgain.addEventListener('click', (e) => {
        Array.from(buttons).forEach((btn) => {
            btn.disabled = false;
        });

        playerScore = 0;
        computerScore = 0;
        playerChoice = "";
        computerChoice = "";
        answer.textContent = "";
        compScore.textContent = "Computer: 0";
        playScore.textContent = "Player: 0";
        results.removeChild(playAgain);
    });
}