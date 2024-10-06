let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){

    const compchoice = ["rock","paper","scissors"];
    const randomindex = Math.floor(Math.random()*compchoice.length);
    

    return compchoice[randomindex];
}

function getHumanChoice(){

    const playerChoice = prompt("Enter your choice");


    if (playerChoice == "rock"||playerChoice=="paper"||playerChoice=="scissors"){
return playerChoice;

    }
    else{
alert("enter a valid choice");
getHumanChoice();
    }

}

function playRound(humanChoice,ComputerChoice){
const humanChoiceInsensetive = "humanChoice".toLowerCase();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



if (humanSelection=="paper"&&computerSelection=="rock"){
    console.log("you win! " + humanSelection + " beats " + computerSelection);
    humanScore++;
}
else if (humanSelection=="scissors"&&computerSelection=="paper"){
    console.log("you win! " + humanSelection + " beats " + computerSelection);
    humanScore++;
}
else if (humanSelection=="rock"&&computerSelection=="scissors"){
    console.log("you win! " + humanSelection + " beats " + computerSelection);
    humanScore++;
}
else if (humanSelection==computerSelection){
    console.log("Its a Tie");
}
else{
   computerScore++;
    console.log("you Lose! " + computerSelection + " beats " + humanSelection);
}



}

function playGame(){

for(let round=0;round<5;round++){
 playRound();   
}

alert("Results --> Human Score: " + humanScore + " Computer Score: " + computerScore);

}

playGame();