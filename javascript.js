function computerPlay(){
    var choice = Math.floor(Math.random()*(3-1+1)+1);
    if(choice==1){
        return "Rock";
    }else if(choice==2){
        return "Paper";
    }else if(choice==3){
        return "Scissors";
    }else{
        console.log("ERROR!");
    }
}

var userScore = 0;
var cpuScore = 0;

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
        
rock.addEventListener("click",()=>playRound("Rock",computerPlay()));
paper.addEventListener("click",()=>playRound("Paper",computerPlay()));
scissors.addEventListener("click",()=>playRound("Scissors",computerPlay()));


function playRound(playerSelection, computerSelection){

    function context(playerSelection){
        return "You picked " + playerSelection + " and Computer picked " + computerSelection;
    }

    const textPrompt = document.getElementById("textPrompt");
    const scoreScreen = document.getElementById("scoreScreen");

    if(playerSelection==="Rock"&&computerSelection==="Scissors"){
        textPrompt.textContent = context(playerSelection) + ". You win!";
        userScore++;
        scoreScreen.textContent = "Player: "+userScore+"  |  Computer: "+cpuScore;

    }else if(playerSelection==="Paper"&&computerSelection==="Rock"){
        textPrompt.textContent = context(playerSelection) + ". You win!";
        userScore++;
        scoreScreen.textContent = "Player: "+userScore+"  |  Computer: "+cpuScore;
    }else if(playerSelection==="Scissors"&&computerSelection==="Paper"){
        textPrompt.textContent = context(playerSelection) + ". You win!";
        userScore++;
        scoreScreen.textContent = "Player: "+userScore+"  |  Computer: "+cpuScore;
    }else if(playerSelection===computerSelection){
        textPrompt.textContent = context(playerSelection) + ". Tie!";
    }else{
        textPrompt.textContent = context(playerSelection) + ". You lose!";
        cpuScore++;
        scoreScreen.textContent = "Player: "+userScore+"  |  Computer: "+cpuScore;
    }

    if(userScore==5){
        textPrompt.textContent = ("You beat the computer! Congrats! Choose an option to play again!")
        scoreScreen.textContent = "Player: "+userScore+"  |  Computer: "+cpuScore;
        userScore = 0;
        cpuScore = 0;
    }else if(cpuScore==5){
        textPrompt.textContent = ("You Lost. Choose an option to play again!")
        scoreScreen.textContent = "Player: "+userScore+"  |  Computer: "+cpuScore;
        userScore = 0;
        cpuScore = 0;
    }
    
}