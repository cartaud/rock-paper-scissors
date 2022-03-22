//functon that randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
let cpuScore = 0;
let playerScore = 0;

function computerPlay() {
    let rand = Math.floor((Math.random()*3));
    let arr = ['rock', 'paper', 'scissors'];
    return arr[rand];
}

//function that gets players input
function playerPlay() {
    let choice = prompt('Rock, Paper, Scissors?: ');
    return choice.toLowerCase();
}
//function that plays a single round of Rock Paper Scissors. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { 
        return 'Its a tie!'
    }
    else {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            return 'You win! Rock beats scissors.'
        }
        else if (playerSelection == 'rock' && computerSelection == 'paper'){
            return 'You lose! Paper beats rock.'
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            return 'You lose! Rock beats scissors.'
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            return 'You win! Scissors beats paper.'
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            return 'You win! Paper beats rock.'
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            return 'You lose! Scissors beats paper.'
        }
        else {
            return 'Please make sure you enter rock, paper, or scissors'
        }
    }
    
}




/*Write a NEW function called game(). Call the playRound function inside of this one to play a 5 
round game that keeps score and reports a winner or loser at the end.*/
function game(){
    
    for (let round = 1; round <= 5; round++){
        let turn = playRound(playerPlay(), computerPlay());
        if (turn[4] == 'w'){
            playerScore++; 
            console.log(turn + '\nThe score of round ' + round + ' is:\nplayer: ' + playerScore + ' \ncomputer: ' + cpuScore);
            if (cpuScore == 3) {
                return 'Looks like the machine is superior this time! The final score was: \nplayer: ' + playerScore + ' \ncomputer: ' + cpuScore
            }
            else if (playerScore == 3) {
                return 'Darn you win! The final score was: \nplayer: ' + playerScore + ' \ncomputer: ' + cpuScore
            }
        }
        else if (turn[4] == 'l') {
            cpuScore++;
            console.log(turn + '\nThe score of round ' + round + ' is:\nplayer: ' + playerScore + ' \ncomputer: ' + cpuScore);
            if (cpuScore == 3) {
                return 'Looks like the machine is superior this time! The final score was: \nplayer: ' + playerScore + ' \ncomputer: ' + cpuScore
            }
            else if (playerScore == 3) {
                return 'Darn you win! The final score was: \nplayer: ' + playerScore + ' \ncomputer: ' + cpuScore
            }
        }
        else if (turn[0] == 'I') {
            round--;
            console.log(turn + '\nThis round doesn\'t count.');
        }
        else {
            round--;
            console.log('This round doesn\'t count. Please make sure you enter rock, paper, or scissors');
        }
        
    }
}

console.log(game())
