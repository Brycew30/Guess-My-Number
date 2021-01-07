'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (text) {
  document.querySelector('.number').textContent = text;
};

const styleBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const resizeNumber = function (size) {
  document.querySelector('.number').style.width = size;
};

const displayScore = function (number) {
  document.querySelector('.score').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //   When there is no input
    displayMessage('No number! ⛔️');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    displayNumber(secretNumber);
    styleBackground('#60b347');
    resizeNumber('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 😞' : 'Too low! 😞');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game 👎🏼');
      displayScore(0);
    }
  }
});

// Restore initial conditions to play again
document.querySelector('.again').addEventListener('click', function () {
  styleBackground('#222');
  resizeNumber('15rem');
  displayNumber('?');
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
