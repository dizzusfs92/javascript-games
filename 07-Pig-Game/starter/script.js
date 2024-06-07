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
let currentPlayerEl = current0El;

const changePlayer = (currentPlayer) => {
    currentPlayer === current0El ? (player1.classList.add('player--active'), player0.classList.remove('player--active')) : (player0.classList.add('player--active'), player1.classList.remove('player--active'));
    return (currentPlayer === current0El ? current1El : current0El);
}

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice != 1) {
        currentScore += dice;
        currentPlayerEl.textContent = currentScore;
    }
    else{
        currentPlayerEl.textContent = 0;
        currentPlayerEl = changePlayer(currentPlayerEl);
        currentScore = 0;
    }
});

btnHold.addEventListener('click', function(){
    console.log('dddas');
    currentPlayerEl === current0El ? score0El.textContent = Number(score0El.textContent) + currentScore : score1El.textContent = Number(score1El.textContent) + currentScore;
    currentPlayerEl = changePlayer(currentPlayerEl);
});






