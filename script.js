let cpuScore = 0;
let playerScore = 0;

const msg = document.querySelector('.msg');
msg.textContent = 'You dare challenge me? First one to five wins! Rock, paper, scissors SHOOT...';

const getCpuScore = document.querySelector('.cpuScore');
getCpuScore.textContent = 0;
const getPlayerScore = document.querySelector('.playerScore');
getPlayerScore.textContent = 0;

const winner = document.querySelector('.winner');



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
        winner.textContent = "";
    }

    //all possible conditions for a game of rock paper scissors
    else {
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++
            displayScore(cpuScore, playerScore);
            displayResult(`You win! Rock beats scissors.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore++
            displayScore(cpuScore, playerScore++);
            displayResult(`You win! Scissors beats paper.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore++
            displayScore(cpuScore, playerScore);
            displayResult(`You win! Paper beats rock.`);
        }
        else if (playerSelection == 'rock' && computerSelection == 'paper'){
            cpuScore++
            displayScore(cpuScore, playerScore);
            displayResult(`You lose! Paper beats rock.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            cpuScore++
            displayScore(cpuScore++, playerScore);
            displayResult(`You lose! Rock beats scissors.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            cpuScore++
            displayScore(cpuScore, playerScore);
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
    if (playerScore == 5) {
        winner.style.color = "green";
        winner.textContent = "You win! This time.... ";
    }
    else if (cpuScore == 5) {
        winner.style.color = "red";
        winner.textContent = "formulating response.... ";
        const pause = setTimeout(cpuResponse, 5000);
        function cpuResponse() {
            let rand = Math.floor((Math.random()*3));
            let arr = ['Better luck next time loser!', 'Wow you stink!', 'Hacking into savings account'];
            winner.textContent = `${arr[rand]}`;
        }
    }
}

