let cpuScore = 0;
let playerScore = 0;

const playerHand = document.querySelector('#player');
const cpuHand = document.querySelector('#cpu');
playerHand.style.fontSize = '80px';
cpuHand.style.fontSize = '80px';
playerHand.textContent = `❓`;
cpuHand.textContent = `❓`;

const msg = document.querySelector('.msg');
msg.textContent = 'First one to five wins! Rock, paper, scissors SHOOT...';

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

//function that plays a round of Rock Paper Scissors. 
function playRound(playerSelection, computerSelection) {

    //When user hits the new game button (game must be over), it resets all values back to starter code
    if (playerSelection == 'reset' && (playerScore == 5 || cpuScore ==5)) {
        cpuScore = 0;
        playerScore = 0;
        displayScore(cpuScore, playerScore);
        displayResult(`First one to five wins! Rock, paper, scissors SHOOT...`);
        winner.textContent = "";
        playerHand.textContent = `❓`;
        cpuHand.textContent = `❓`;
        playerHand.style.borderColor = 'black';
        cpuHand.style.borderColor = 'black';
    }

    
    //prevents game from going past score of 5
    else if (playerScore < 5 && cpuScore < 5) {
        //first checks if it is a tie, if it is, the if statement will run
        if (playerSelection == computerSelection) { 
            displayPlayerChoice(playerSelection)
            displayCpuChoice(computerSelection)
            displayScore(cpuScore, playerScore);
            displayResult(`It's a tie!.`);
            playerHand.style.borderColor = 'black';
            cpuHand.style.borderColor = 'black';
        }

        //all possible conditions for a game of rock paper scissors
        else {
            if (playerSelection == 'rock' && computerSelection == 'scissors') {
                playerScore++
                displayPlayerChoice(playerSelection)
                displayCpuChoice(computerSelection)
                displayScore(cpuScore, playerScore);
                displayResult(`You win! Rock beats scissors.`);
                playerHand.style.borderColor = 'green';
                cpuHand.style.borderColor = 'red';

            }
            else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                playerScore++
                displayPlayerChoice(playerSelection)
                displayCpuChoice(computerSelection)
                displayScore(cpuScore, playerScore);
                displayResult(`You win! Scissors beats paper.`);
                playerHand.style.borderColor = 'green';
                cpuHand.style.borderColor = 'red';
            }
            else if (playerSelection == 'paper' && computerSelection == 'rock') {
                playerScore++
                displayPlayerChoice(playerSelection)
                displayCpuChoice(computerSelection)
                displayScore(cpuScore, playerScore);
                displayResult(`You win! Paper beats rock.`);
                playerHand.style.borderColor = 'green';
                cpuHand.style.borderColor = 'red';
            }
            else if (playerSelection == 'rock' && computerSelection == 'paper'){
                cpuScore++
                displayPlayerChoice(playerSelection)
                displayCpuChoice(computerSelection)
                displayScore(cpuScore, playerScore);
                displayResult(`You lose! Paper beats rock.`);
                playerHand.style.borderColor = 'red';
                cpuHand.style.borderColor = 'green';
            }
            else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                cpuScore++
                displayPlayerChoice(playerSelection)
                displayCpuChoice(computerSelection)
                displayScore(cpuScore, playerScore);
                displayResult(`You lose! Rock beats scissors.`);
                playerHand.style.borderColor = 'red';
                cpuHand.style.borderColor = 'green';
            }
            else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                cpuScore++
                displayPlayerChoice(playerSelection)
                displayCpuChoice(computerSelection)
                displayScore(cpuScore, playerScore);
                displayResult(`You lose! Scissors beats paper.`);
                playerHand.style.borderColor = 'red';
                cpuHand.style.borderColor = 'green';
            }
        }
    }
}

function displayPlayerChoice(playerSelection) {
    if (playerSelection == 'rock') {
        playerHand.textContent = '✊'
    }
    else if (playerSelection == 'paper') {
        playerHand.textContent = '✋'
    }
    else if (playerSelection == 'scissors'){
        playerHand.textContent = '✌️'
    }
}

function displayCpuChoice(computerSelection) {
    if (computerSelection == 'rock') {
        cpuHand.textContent = '✊'
    }
    else if (computerSelection == 'paper') {
        cpuHand.textContent = '✋'
    }
    else if (computerSelection == 'scissors'){
        cpuHand.textContent = '✌️'
    }
}

function displayResult(str) {
    msg.textContent = str;
}

function displayScore(cpuScore, playerScore){
    getCpuScore.textContent = cpuScore;
    getPlayerScore.textContent = playerScore;

    //checks to see if player win
    if (playerScore == 5) {
        winner.style.color = "green";
        winner.textContent = "You win! This time.... ";
    }

    //checks to see if cpu win
    else if (cpuScore == 5) {
        winner.style.color = "red";
        winner.textContent = "formulating response.... ";
        const pause = setTimeout(cpuResponse, 3000);
        function cpuResponse() {
            let rand = Math.floor((Math.random()*3));
            let arr = ['Better luck next time loser!', 'Wow you suck!', 'Hacking into your savings account'];
            winner.textContent = `${arr[rand]}`;
        }
    }
}

