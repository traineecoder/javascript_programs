/************** Project #3: Pig Game **************/
'use strict';

// selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let score0 = 0;
let score1 = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let flag = false;
let winner = false;

// roll dice
const rollDice = function () {
  if (!winner) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(random);
    if (diceEl.classList.contains('hidden')) {
      diceEl.classList.remove('hidden');
    }
    diceEl.src = `images/dice-${dice}.png`;
    //   switch (dice) {
    //     case 1:
    //       diceEl.src = `images/dice-1.png`;
    //       break;
    //     case 2:
    //       diceEl.src = `images/dice-2.png`;
    //       break;
    //     case 3:
    //       diceEl.src = `images/dice-3.png`;
    //       break;
    //     case 4:
    //       diceEl.src = `images/dice-4.png`;
    //       break;
    //     case 5:
    //       diceEl.src = `images/dice-5.png`;
    //       break;
    //     case 6:
    //       diceEl.src = `images/dice-6.png`;
    //       break;
    //   }
    if (dice !== 1) {
      if (player0.classList.contains('player--active')) {
        currentScore0 += dice;
        currentScore0El.textContent = currentScore0;
      }
      if (player1.classList.contains('player--active')) {
        currentScore1 += dice;
        currentScore1El.textContent = currentScore1;
      }
    } else {
      currentScore0 = currentScore1 = 0;
      currentScore1El.textContent = currentScore0El.textContent = 0;
      if (flag) {
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
        flag = false;
      } else {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        flag = true;
      }
    }
  }
};

const hold = function () {
  if (!winner) {
    if (flag) {
      score1 += currentScore1;
      score1El.textContent = score1;
      currentScore1 = 0;
      currentScore1El.textContent = 0;
      player0.classList.add('player--active');
      player1.classList.remove('player--active');
      flag = false;
    } else {
      score0 += currentScore0;
      score0El.textContent = score0;
      currentScore0 = 0;
      currentScore0El.textContent = 0;
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
      flag = true;
    }
  }
  if (score0 >= 10) {
    diceEl.classList.add('hidden');
    player0.classList.add('player--winner');
    winner = true;
  } else if (score1 >= 10) {
    diceEl.classList.add('hidden');
    player1.classList.add('player--winner');
    winner = true;
  }
};

const newGame = function () {
  score0 = score1 = currentScore0 = currentScore1 = 0;
  flag = false;
  winner = false;
  diceEl.classList.add('hidden');
  currentScore0El.textContent = currentScore1El.textContent = 0;
  score0El.textContent = score1El.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  if (!player0.classList.contains('player--active')) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
};
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', newGame);
