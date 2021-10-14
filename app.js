let playerScore = 0;
let compScore = 0;

   function computerPlay () {
   let rockPaperScissors;
   let chocieSelection = Math.floor(Math.random() * 3 + 1);
    
   if (chocieSelection == 1){
    rockPaperScissors = "ROCK"
   }else if (chocieSelection == 2){
    rockPaperScissors = "PAPER"
   }else if (chocieSelection == 3){
        rockPaperScissors = "SCISSORS"
   }

   return rockPaperScissors;
}

winnerDiv = document.querySelector(".winner")    
winner = document.createElement("h2") 
winner.textContent = `Choose Rock Paper or Scissors`
winnerDiv.appendChild(winner)

playerScoreDiv = document.querySelector(".playerScoreDiv")
score = document.createElement("p")
score.textContent = "0"
playerScoreDiv.appendChild(score);

compScoreDiv = document.querySelector(".compScoreDiv")
score2 = document.createElement("p")
score2.textContent = "0"
compScoreDiv.appendChild(score2);


function PlayGame (computerSelection, playerSelection){

        
        winnerDiv.removeChild(winner)


        if (computerSelection === "ROCK" && playerSelection === "SCISSORS"){
            winner.textContent = `The computer choose ${computerSelection}! You LOSE`
            winnerDiv.appendChild(winner);
            compScore++;
        } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {        
            winner.textContent = `The computer choose ${computerSelection}! You WIN`
            winnerDiv.appendChild(winner);
            playerScore++
        }else if (computerSelection === "ROCK" && playerSelection === "PAPER"){
            winner.textContent = `The computer choose ${computerSelection}! You WIN`
            winnerDiv.appendChild(winner);
            playerScore++
        }else if (computerSelection === "PAPER" && playerSelection === "ROCK"){
            winner.textContent = `The computer choose ${computerSelection}! You LOSE`
            winnerDiv.appendChild(winner);
            compScore++;
        }else if (computerSelection === "PAPER" && playerSelection === "SCISSORS"){
            winner.textContent =`The computer choose ${computerSelection}! You WIN`
            winnerDiv.appendChild(winner);
            playerScore++;
        }else if (computerSelection === "SCISSORS" && playerSelection === "PAPER"){
            winner.textContent = `The computer choose ${computerSelection}! You LOST`
            winnerDiv.appendChild(winner);
            compScore++;
        }else{
            winnerDiv.appendChild(winner);
            winner.textContent = `The computer choose ${computerSelection} so it's a tie`
        }    

        score.textContent = `${playerScore}`
        playerScoreDiv.appendChild(score);

        score2.textContent = `${compScore}`
        compScoreDiv.appendChild(score2);

        if (playerScore == 5 ){
        winnerDiv.removeChild(winner)
        winner.textContent = "YOU WIN"
        winner.classList.toggle("winnerText")
        winnerDiv.appendChild(winner);
        }else if (compScore == 5 ){
        winnerDiv.removeChild(winner)
        winner.textContent = "YOU LOSE"
        winner.classList.toggle("loserText")
        winnerDiv.appendChild(winner);
        }
    }

let btnRock = document.querySelector('.rock');

 btnRock.addEventListener('click', function(){
    computerChoice = computerPlay();
    playerChoice = "ROCK"
    PlayGame (computerChoice, playerChoice);
    console.log(playerScore)
    console.log(compScore)
 
    if(playerScore == 5 || compScore == 5){
        document.querySelector('.scissors').disabled = true;
        document.querySelector('.paper').disabled = true;
        document.querySelector('.rock').disabled = true;
        }

        
 });

 let btnPaper = document.querySelector('.paper');

 btnPaper.addEventListener('click', function(){
    computerChoice = computerPlay();
    playerChoice = "PAPER"
    PlayGame (computerChoice, playerChoice);
    console.log(playerScore)
    console.log(compScore)
 
    if(playerScore == 5 || compScore == 5){
        document.querySelector('.scissors').disabled = true;
        document.querySelector('.paper').disabled = true;
        document.querySelector('.rock').disabled = true;
        }
     

 });

 let btnScissors = document.querySelector('.scissors');

 btnScissors.addEventListener('click', function(){
    computerChoice = computerPlay();
    playerChoice = "SCISSORS"
    PlayGame (computerChoice, playerChoice);
    console.log(playerScore)
    console.log(compScore)

    if(playerScore == 5 || compScore == 5){
    document.querySelector('.scissors').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.rock').disabled = true;
    }
 
 });


 





