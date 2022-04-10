let playerScore = 0;
let computerScore = 0;



function computerPlay() {
    let array = ['rock', 'paper', 'scissors']
    let computerPlay = array[Math.floor(Math.random() * array.length)];
    return computerPlay;
}


let computerSelection = computerPlay();


function capitalizeFirstLetter(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function playRound(playerSelection,computerSelection){
    
    
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock!"
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else if (computerSelection === "scissors") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++
            return "You Win! Scissors beats Paper!";
        } else if (computerSelection === "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors!";
        } else if (computerSelection === "scissors") {
            return "Draw!";
        }
    }
 
    
}
function game() {
    for (let i=0; i <5; i++) {
        let computerSelection = computerPlay()
        playerSelection = prompt("Choose: rock, paper, or scissors.");
        console.log(playRound(playerSelection,computerSelection));
        if ((i === 4) && (playerScore < computerScore)) {
            return "You have lost the game!";
        } else if ((i === 4) && (playerScore > computerScore)) {
            return "You have won the game!";
        } else if ((i === 4) && (playerScore === computerScore)) {
            return "It's a Draw!";
        }
    }
    }




