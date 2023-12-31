function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let ind = Math.floor(Math.random() * choices.length);
    return choices[ind];
}

function singlePlay() {
    playerSelection = prompt("Paper, scissors, rock?: ").toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("You tied! Play again!");
        return singlePlay();
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lost! Rock loses to paper!");
        return 0;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! Rock wins against scissors!");
        return 1;
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! Paper wins against rock!");
        return 1;
    }
    if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("You tied! Play again!");
        return singlePlay();
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost! Paper loses to scissors!");
        return 0;
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost! Scissors loses to rock!");
        return 0;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! Scissors wins against paper!");
        return 1;
    }
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("You tied! Play again!");
        return singlePlay();
    }
}

function game() {
    let player = 0;
    let bot = 0;

    for (let i = 0; i < 5; i++) {
        let result = singlePlay();
        if (result === 1) {
            player++;
        }
        else {
            bot++;
        }
    }

    if (player > bot) {
        console.log("You won by " + (player - bot) + " games!");
    } else {
        console.log("You lost by " + (bot - player) + " games!");
    }
}

game();