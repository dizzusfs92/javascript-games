'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Setting initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let currentPlayer = '0';
let scores = [score0El, score1El];
let playing = true;

const switchPlayer = function(player){
    document.querySelector('.player--'+player).classList.remove('player--active');
    currentPlayer = (player === '0' ? '1' : '0');
    document.querySelector('.player--'+currentPlayer).classList.add('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');
    
        if (dice != 1) {
            currentScore += dice;
            document.querySelector('#current--'+currentPlayer).textContent = currentScore;
        }
        else{
            document.querySelector('#current--'+currentPlayer).textContent = 0;
            switchPlayer(currentPlayer);
            currentScore = 0;
        }
    }
});

btnHold.addEventListener('click', function(){
    if (playing) {
        document.querySelector('#current--'+currentPlayer).textContent = 0;
        scores[currentPlayer].textContent = Number(scores[currentPlayer].textContent) + currentScore;
        if (Number(scores[currentPlayer].textContent) >= 20) {
            document.querySelector('.player--'+currentPlayer).classList.add('player--winner');
            document.querySelector('#name--'+currentPlayer).classList.add('player--winner','name');
            playing = false;
        }
        else {
            switchPlayer(currentPlayer);
        }
        currentScore = 0;
    }
});

btnNew.addEventListener('click', function(){
    document.querySelector('.player--'+currentPlayer).classList.remove('player--winner');
    document.querySelector('#name--'+currentPlayer).classList.remove('player--winner');
    currentPlayer = '0';
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    playing = true;
})




