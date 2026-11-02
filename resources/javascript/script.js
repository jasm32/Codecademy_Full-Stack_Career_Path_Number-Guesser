let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//to generate random target number
function generateTarget () {
    return Math.floor(Math.random()*10);
}

//to determine who is closer to target number
function compareGuesses (userHumanGuess,computerGuess,target) {
    if ( ( (Math.abs(target - userHumanGuess)) == (Math.abs(target - computerGuess)) ) || ( Math.abs(target - userHumanGuess) < target ) ) {
        return true
    } else {
        return false
    }
}

//to update the score element for user and computer
function updateScore (winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

//to increase valua of 'Round 1'
function advanceRound () {
    return currentRoundNumber += 1;
}

//for when user input is beyond the limit
function numberRange (userHumanGuess) {
    if ( (userHumanGuess > 10) || (userHumanGuess < 0) ) {
        alert("Number is over the set range...please change it.");
        return false;
    }
    return true;
}