var userChoice = null;
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} 

 function choice() {
        $('#rock').click(function() {
            userChoice = "rock"
            compare(userChoice, computerChoice);
        });
        $('#paper').click(function() {
            userChoice = "paper";
            compare(userChoice, computerChoice);
        });
        $('#scissors').click(function() {
            userChoice = "scissors";
            compare(userChoice, computerChoice);
        });
 };

function compare(choice1, choice2) {
    if (choice1 === choice2) {
     alert("You chose " + choice1 + " and the computer chose " + choice2 +
        ", The result is a tie!");
    }
    else if (choice1 === 'rock') {
        if (choice2 === 'scissors'){
            alert(
                "You chose " + choice1 + " and the computer chose " + choice2 +
        ', rock wins');
        }
        else if (choice2 === 'paper') {
            alert(
                "You chose " + choice1 + " and the computer chose " + choice2 +
        ", paper wins");   
        }
    }
    else if (choice1 === 'paper'){
        if (choice2 === 'rock'){
            alert(
                "You chose " + choice1 + " and the computer chose " + choice2 +
        ", paper wins");
        }
        else if (choice2 === 'scissors') {
            alert(
                "You chose " + choice1 + " and the computer chose " + choice2 +
        ", scissors wins");   
        }
    }
    else if (choice1 === 'scissors'){
        if (choice2 === 'rock'){
            alert(
                "You chose " + choice1 + " and the computer chose " + choice2 +
        ", rock wins");
        }
        else if (choice2 === 'paper') {
            alert(
                "You chose " + choice1 + " and the computer chose " + choice2 +
        ", scissors wins");   
        }
    }
    else if (choice1 !== 'rock' || choice1 !== 'paper' || choice1 !== 'scissors') {
        alert(
            "You chose " + choice1 + " and the computer chose " + choice2 +", invalid choce");
    }
}

choice()