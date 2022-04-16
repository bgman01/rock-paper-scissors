let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('.button')
const main = document.querySelector('main')

function computerPlay() {
    let array = ['rock', 'paper', 'scissors']
    let computerPlay = array[Math.floor(Math.random() * array.length)];
    return computerPlay;
}

function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock") {
            if (computerSelection === "rock") {
            document.getElementById('message').innerText = "Draw!";
        } else if (computerSelection === "paper") {
            computerScore++
            document.getElementById('computer-score').innerText = computerScore;
            document.getElementById('message').innerText = "You lose! Paper beats Rock"
        } else if (computerSelection === "scissors") {
            playerScore++;
            document.getElementById('player-score').innerText = playerScore;
            document.getElementById('message').innerText = "You Win! Rock beats Scissors!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            document.getElementById('player-score').innerText = playerScore;
            document.getElementById('message').innerText = "You Win! Paper beats Rock!"
        } else if (computerSelection === "paper") {
            document.getElementById('message').innerText = "Draw!";
        } else if (computerSelection === "scissors") {
            computerScore++;
            document.getElementById('computer-score').innerText = computerScore;
            document.getElementById('message').innerText = "You lose! Scissors beats Paper"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++
            document.getElementById('player-score').innerText = playerScore;
            document.getElementById('message').innerText = "You Win! Scissors beats Paper!"
        } else if (computerSelection === "rock") {
            computerScore++;
            document.getElementById('computer-score').innerText = computerScore;
            document.getElementById('message').innerText = "You lose! Rock beats Scissors"
        } else if (computerSelection === "scissors") {
            document.getElementById('message').innerText = "Draw!";
                    }
                }
            }

function game() {
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img');
        playerSelection = img.alt;
        let computerSelection = computerPlay()
        playRound(playerSelection,computerSelection);

        if (playerScore === 5) {
            document.getElementById('congrats').innerText = `You won the game! You scored ${playerScore } points and the CPU scored ${computerScore } points!`
        }
        
        else if (computerScore === 5) {
            document.getElementById('congrats').innerText = `You lost the game! You scored ${playerScore } points and the CPU scored ${computerScore } points!`
        }

        })
    })

}

function playAgain() {
    const playAgain = document.querySelector('#playAgain');
    playAgain.addEventListener('click', () => {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("player-score").innerText = playerScore;
        document.getElementById("computer-score").innerText = computerScore;
        document.getElementById('message').innerText = "Game has been reset. Make your choices again!"
        document.getElementById("congrats").innerText = ""
        buttons.forEach((button) => {
            button.setAttribute("id", "btn")
        })
    });
}
game()
playAgain()