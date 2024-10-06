let humanScore = 0;
let computerScore = 0;
let divContainer = document.createElement('div');

function getComputerChoice() {
    const compchoice = ["rock", "paper", "scissors"];
    const randomindex = Math.floor(Math.random() * compchoice.length);
    return compchoice[randomindex];
}

function playRound(humanSelection, computerSelection) {
    // humanSelection is already lowercase from the button text content
    if (humanSelection == "paper" && computerSelection == "rock") {
        divContainer.textContent = "You win! " + humanSelection + " beats " + computerSelection;
        humanScore++;
    } else if (humanSelection == "scissors" && computerSelection == "paper") {
        divContainer.textContent = "You win! " + humanSelection + " beats " + computerSelection;
        humanScore++;
    } else if (humanSelection == "rock" && computerSelection == "scissors") {
        divContainer.textContent = "You win! " + humanSelection + " beats " + computerSelection;
        humanScore++;
    } else if (humanSelection == computerSelection) {
        divContainer.textContent = "It's a tie!";
    } else {
        computerScore++;
        divContainer.textContent = "You lose! " + computerSelection + " beats " + humanSelection;
    }

    // Display the scores
    divContainer.textContent += ` | Human: ${humanScore}, Computer: ${computerScore}`;

    if(humanScore>=5){
        alert('the winner is Human');
    resetGame();
    }
    else if(computerScore>=5) {
        alert("the winner is computer");
        resetGame();
    }
}


function resetGame() {
    humanScore = 0;
    computerScore = 0;
    divContainer.textContent = "Game reset. Start playing again!";
}

const Buttons = document.querySelectorAll("button");
Buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    });
});

document.body.appendChild(divContainer);


    

