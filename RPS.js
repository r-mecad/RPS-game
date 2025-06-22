console.log("WELCOME MY FRIEND.")

function getComputerChoice()
{
    let choice = Math.random();
    if (choice > 0 && choice <= 0.33)
        return "rock";
    else if (choice > 0.33 && choice <=0.67)
        return "paper";
    else
        return "sissors"
}

function getHumanChoice(){
    while (true){
        choice = prompt("Enter rock, paper or sissors:").toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "sissors")
            return choice;
        else 
            console.log("Wrong input, Enter again:")      
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
   if((human == "rock" && computer =="paper") || (human == "paper" && computer =="sissors") || (human =="sissors" && computer =="rock")) 
    {
        console.log(`You lose! ${computer} beats ${human}`);
        computerScore += 1;
    } 
    else if ((computer == "rock" && human =="paper") || (computer == "paper" && human =="sissors") || (computer =="sissors" && human =="rock"))
    {
        console.log(`You Win! ${human} beats ${computer}`);
        humanScore += 1;
    }
    else{
        console.log(`ITS A TIE!! ${human} and ${computer}`);
    }

  }
  
function playGame(){
    for( let i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human = ${humanScore}, Computer= ${computerScore}`);
    }

    if (humanScore > computerScore){
        console.log("CONGTARULATIONS!!! YOU WON THE GAME.");
    }
    else if(humanScore < computerScore){
        console.log("ALAS! YOU LOST THE GAME.");
    }
    else{
        console.log("GAME TIED");
    }
}
