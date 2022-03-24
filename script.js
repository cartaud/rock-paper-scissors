let cpuScore = 0;
let playerScore = 0;

const msg = document.querySelector('.msg');
msg.textContent = 'You dare challenge me? Rock, paper, scissors SHOOT...';

const getCpuScore = document.querySelector('.cpuScore');
getCpuScore.textContent = 0;
const getPlayerScore = document.querySelector('.playerScore');
getPlayerScore.textContent = 0;

//function that randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computerPlay() {
    let rand = Math.floor((Math.random()*3));
    let arr = ['rock', 'paper', 'scissors'];
    return arr[rand];
}



//function that plays a single round of Rock Paper Scissors. 
function playRound(playerSelection, computerSelection) {
    //first checks if it is a tie, if it is, the if statement will run
    
    if (playerSelection == computerSelection) { 
        displayScore(cpuScore, playerScore);
        displayResult(`It's a tie!.`);
    }

    //When user hits the new game button, it resets both scores back to 0
    else if (playerSelection == 'reset') {
        cpuScore = 0;
        playerScore = 0;
        displayScore(cpuScore, playerScore);
        displayResult(`You dare challenge me? Rock, paper, scissors SHOOT...`);
    }

    //all possible conditions for a game of rock paper scissors
    else {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            displayScore(cpuScore, playerScore++);
            displayResult(`You win! Rock beats scissors.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            displayScore(cpuScore, playerScore++);
            displayResult(`You win! Scissors beats paper.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            displayScore(cpuScore, playerScore++);
            displayResult(`You win! Paper beats rock.`);
        }
        else if (playerSelection == 'rock' && computerSelection == 'paper'){
            displayScore(cpuScore++, playerScore);
            displayResult(`You lose! Paper beats rock.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            displayScore(cpuScore++, playerScore);
            displayResult(`You lose! Rock beats scissors.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            displayScore(cpuScore++, playerScore);
            displayResult(`You lose! Scissors beats paper.`);
        }
    }
}

function displayResult(str) {
    msg.textContent = str;
}

function displayScore(cpuScore, playerScore){
    getCpuScore.textContent = cpuScore;
    getPlayerScore.textContent = playerScore;
}

/*Write a NEW function called game(). Call the playRound function inside of this one to play a 5 
round game that keeps score and reports a winner or loser at the end.*/

/*
function game(){
    let cpuScore = 0;
    let playerScore = 0;     

    for (let round = 1; round <= 5; round++){
        let turn = playRound(playerPlay(), computerPlay());
        if (turn[4] == 'w'){
            playerScore++; 
            if (playerScore == 3) {
                displayResult(`Darn you win! The final score is player: ${playerScore} computer: ${cpuScore}`);
                break
            }
            else {
                 displayResult(`${turn} The score of round ${round} is player: ${playerScore} computer: ${cpuScore}`);
            }
        }
        else if (turn[4] == 'l') {
            cpuScore++;
            if (cpuScore == 3) {
                displayResult(`Looks like the machine is superior this time! The final score was: player: ${playerScore} computer: ${cpuScore}`)
                break
            }
            else {
                displayResult(`${turn} The score of round ${round} is player: ${playerScore} computer: ${cpuScore}`);
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
*/


