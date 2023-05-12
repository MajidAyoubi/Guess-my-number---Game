'use strict';

// console.log(document.querySelector('.right').textContent);
// document.querySelector('.message').textContent = 'Hello World!';
// document.querySelector('.guess').value = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (point) {
  document.querySelector('.score').textContent = point;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When player wins
  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#38E11E';
    document.querySelector('.number').style.width = '250px';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is just one number away
  else if (guess === secretNumber + 1) {
    if (score > 1) {
      displayMessage('🔥 You are just one number away!');
      score--;
      displayScore(score);
    } else {
      document.querySelector('.message').textContent = '☹ You Lost The Game ';
      displayScore(0);
    }
  }

  // When guess is just one number away
  else if (guess === secretNumber - 1) {
    if (score > 1) {
      displayMessage('🔥 You are just one number away!');
      score--;
      displayScore(score);
    } else {
      document.querySelector('.message').textContent = '☹ You Lost The Game ';
      displayScore(0);
    }
  }

  // When number is bigger than 20
  else if (guess > 20 || guess === 0) {
    displayMessage('⚠️ Please choose a number between 1 and 20!');
  }
  // when guess is too high or too low
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      document.querySelector('.message').textContent = '☹ You Lost The Game ';
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '150px';
});
