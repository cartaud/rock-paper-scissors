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

//function that resets the scores to zero
function newGame() {
    getPlayerScore.textContent = 0;
    getCpuScore.textContent = 0;
}

//function that plays a single round of Rock Paper Scissors. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { 
        return 'Its a tie!'
    }
    else {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            getPlayerScore.textContent = `${playerScore++}`
            displayResult(`You win! Rock beats scissors.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            getPlayerScore.textContent = `${playerScore++}`
            displayResult(`You win! Scissors beats paper.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            getPlayerScore.textContent = `${playerScore++}`
            displayResult(`You win! Paper beats rock.`);
        }
        else if (playerSelection == 'rock' && computerSelection == 'paper'){
            getCpuScore.textContent = `${cpuScore++}`
            displayResult(`You lose! Paper beats rock.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            getCpuScore.textContent = `${cpuScore++}`
            displayResult(`You lose! Rock beats scissors.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            getCpuScore.textContent = `${cpuScore++}`
            displayResult(`You lose! Scissors beats paper.`);
        }
    }
}

function displayResult(str) {
    msg.textContent = str;
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


