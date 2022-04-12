let playerScore = 0;
let computerScore = 0;

const optionBtn = document.querySelectorAll('div.optionBtn button')
const buttons = document.querySelectorAll("#btn")


function computerPlay() {
    let array = ['rock', 'paper', 'scissors']
    let computerPlay = array[Math.floor(Math.random() * array.length)];
    return computerPlay;
}


function playRound(playerSelection,computerSelection){
    if (playerSelection === "rock") {
            if (computerSelection === "rock") {
            document.getElementById('welcome').innerText = ("Draw!");
        } else if (computerSelection === "paper") {
            computerScore++
            document.getElementById('computerScoreDisplay').innerText = computerScore;
            document.getElementById('welcome').innerText = ("You lose! Paper beats Rock")
        } else if (computerSelection === "scissors") {
            playerScore++;
            document.getElementById('playerScoreDisplay').innerText = playerScore;
            document.getElementById('welcome').innerText = ("You Win! Rock beats Scissors!")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            document.getElementById('playerScoreDisplay').innerText = playerScore;
            document.getElementById('welcome').innerText = ("You Win! Paper beats Rock!")
        } else if (computerSelection === "paper") {
            document.getElementById('welcome').innerText = ("Draw!");
        } else if (computerSelection === "scissors") {
            computerScore++;
            document.getElementById('computerScoreDisplay').innerText = computerScore;
            document.getElementById('welcome').innerText = ("You lose! Scissors beats Paper")
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++
            document.getElementById('playerScoreDisplay').innerText = playerScore;
            document.getElementById('welcome').innerText = ("You Win! Scissors beats Paper!")
        } else if (computerSelection === "rock") {
            computerScore++;
            document.getElementById('computerScoreDisplay').innerText = computerScore;
            document.getElementById('welcome').innerText = ("You lose! Rock beats Scissors")
        } else if (computerSelection === "scissors") {
            document.getElementById('welcome').innerText = ("Draw!");
                    }
                }
            }
                
function game() {
    buttons.forEach((button1) => {
        button1.addEventListener('click', () => {
            let computerSelection = computerPlay();
            if (button1.id === "btn") {
                playRound(button1.value, computerSelection)
            }
            if (playerScore === 5) {
                document.getElementById('congrats').innerText = `You won the game! You scored ${playerScore } points and the computer scored ${computerScore } points!`
            }
            else if (computerScore === 5) {
                document.getElementById('congrats').innerText `You lost the game! You scored ${playerScore } points and the computer scored ${computerScore } points!`

            }
            if (playerScore === 5 || computerScore === 5) {
                buttons.forEach((button) => {
                    button.removeAttribute("id")
                })
            }
        })
    })
}
function playAgain() {
    const playAgain = document.querySelector('#playAgain');
    playAgain.addEventListener('click', () => {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("playerScoreDisplay").innerText = playerScore;
        document.getElementById("computerScoreDisplay").innerText = computerScore;
        document.getElementById('welcome').innerText = "Click any of the buttons below to start playing again."
        document.getElementById("congrats").innerText = ""
        buttons.forEach((button) => {
            button.setAttribute("id", "btn")
        })
    });
}
game()
playAgain()
