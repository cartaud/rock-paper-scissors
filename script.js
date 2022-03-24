const msg = document.querySelector('.msg');
msg.textContent = 'will i update?';


//function that randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computerPlay() {
    let rand = Math.floor((Math.random()*3));
    let arr = ['rock', 'paper', 'scissors'];
    return arr[rand];
}

//DOM

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
            displayResult(`You win! Rock beats scissors.`);
        }
        else if (playerSelection == 'rock' && computerSelection == 'paper'){
            displayResult(`You lose! Paper beats rock.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            displayResult(`You lose! Rock beats scissors.`);
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            displayResult(`You win! Scissors beats paper.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            displayResult(`You win! Paper beats rock.`);
        }
        else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            displayResult(`You lose! Scissors beats paper.`);
        }
        else {
            displayResult(`Please make sure you enter rock, paper, or scissors`);
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


