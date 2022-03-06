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
function game(){
    var userScore = 0;
    var cpuScore = 0;

    function playRound(playerSelection, computerSelection){
        function context(playerSelection){
            return "You picked " + playerSelection + " and Computer picked " + computerSelection;
        }
        var pattern1 = new RegExp("Rock","i");
        var pattern2 = new RegExp("Paper","i");
        var pattern3 = new RegExp("Scissors","i");
        var patternCPU = new RegExp(computerSelection, "i");
        var checkChoice = pattern1.test(playerSelection) 
            || pattern2.test(playerSelection) || pattern3.test(playerSelection);


        if(pattern1.test(playerSelection)&&pattern3.test(computerSelection)){
            window.alert(context(playerSelection) + "\n" + "You win!");
            userScore++;
        }else if(pattern2.test(playerSelection)&&pattern1.test(computerSelection)){
            window.alert(context(playerSelection) + "\n" + "You win!");
            userScore++;
        }else if(pattern3.test(playerSelection)&&pattern2.test(computerSelection)){
            window.alert(context(playerSelection) + "\n" + "You win!");
            userScore++;
        }else if(patternCPU.test(playerSelection)){
            window.alert(context(playerSelection) + "\n" + "Tie!");
        }else if(checkChoice){
            window.alert(context(playerSelection) + "\n" + "You lose!");
            cpuScore++;
        }else{
            window.alert("That is not a valid choice!");
        }
    }

    for(let i = 0; i < 5; i++){
        var userChoice = prompt("Rock, paper or scissors?");
        playRound(userChoice,computerPlay());
    }
    alert("User Score: " + userScore + "\n" + "Computer Score: " + cpuScore);

}
game();