/************** Project #1: Guess My Number **************/
'use strict';

// console.log(document.querySelector('.header--question').textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = Number(document.querySelector('.score').textContent);
let score = 20;
// document.querySelector('.header--question').textContent = secretNumber;
let highscore = 0;

// check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.main--guess').value);
  if (!guess) {
    // if there is no number
    document.querySelector('.main--message').textContent = 'No Number!';
  }
  // if the number is correct
  else if (guess === secretNumber) {
    document.querySelector('.main--message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(green,grey)';
    document.querySelector('.header--question').style.width = '20%';
    document.querySelector('.header--question').textContent =
      String(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = String(highscore);
    }
  }
  //   if the number is incorrect
  else if (score <= 1) {
    document.querySelector('.main--message').textContent = 'You Lose';
    document.querySelector('.header--question').textContent =
      String(secretNumber);
  } else if (guess < secretNumber) {
    document.querySelector('.main--message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = String(score);
  } else if (guess > secretNumber) {
    document.querySelector('.main--message').textContent = 'Too high';
    score--;
    document.querySelector('.score').textContent = String(score);
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.header--question').textContent = '?';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(black,gray)';
  document.querySelector('.header--question').style.width = '15%';
  document.querySelector('.main--message').textContent = 'Start Guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.main--guess').value = null;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
