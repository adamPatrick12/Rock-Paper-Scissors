function computerPlay () {
   let rockPaperScissors;
   let chocieSelection = Math.floor(Math.random() * 3 + 1);
    
   if (chocieSelection == 1){
    rockPaperScissors = "rock"
   }else if (chocieSelection == 2){
    rockPaperScissors = "paper"
   }else if (chocieSelection == 3){
        rockPaperScissors = "scissors"
   }

   rockPaperScissors = rockPaperScissors.toUpperCase();
   return rockPaperScissors;
}

function PlayerChoice (){
    do {

    playerDecision = prompt("Please enter Rock, Paper or Scissors");
    

    } while (playerDecision.toUpperCase() !== "ROCK" && playerDecision.toUpperCase() !== "PAPER" && playerDecision.toUpperCase() !== "SCISSORS" )
    
    playerDecision = playerDecision.toUpperCase();
    return playerDecision; 
}



function PlayGame (computerSelection, playerSelection){

    
        if (computerSelection === "ROCK" && playerSelection === "SCISSORS"){
            console.log(`The computer choose ${computerSelection}! You LOSE`)
        } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
            console.log(`The computer choose ${computerSelection}! You WIN`)
        }else if (computerSelection === "ROCK" && playerSelection === "PAPER"){
            console.log(`The computer choose ${computerSelection}! You WIN`)
        }else if (computerSelection === "PAPER" && playerSelection === "ROCK"){
            console.log(`The computer choose ${computerSelection}! You LOSE`)
        }else if (computerSelection === "PAPER" && playerSelection === "SCISSORS"){
            console.log(`The computer choose ${computerSelection}! You WIN`)
        }else if (computerSelection === "SCISSORS" && playerSelection === "PAPER"){
            console.log(`The computer choose ${computerSelection}! You LOST`)
        }else{
            console.log("It was a Tie")
        }

    
    

}

PlayGame(computerPlay(),PlayerChoice());

computerPlay(); 

PlayGame(computerPlay(),PlayerChoice());