'use strict';

let secretNumber = Math.trunc(Math.random()*20);
let score = 20;
let highscore = 0;

function handleStateGame(message) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
        document.querySelector('.message').textContent = "You lost the game!";
        document.querySelector('.check').disabled = true;
    }
    else{
        document.querySelector('.message').textContent = message;
    }
}

document.querySelector('.check').addEventListener('click', function(){
    let guess = document.querySelector('.guess').value;
    if (!guess) {
        document.querySelector('.message').textContent = "No number!";
    }
    else if (guess < secretNumber){
        handleStateGame('Too low');
    }
    else if (guess > secretNumber) {
       handleStateGame('Too high');
    }
    else{
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('body').style.backgroundColor = "#60b247";
        document.querySelector('.number').textContent = secretNumber;
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "";
    document.querySelector('.check').disabled = false;
})

