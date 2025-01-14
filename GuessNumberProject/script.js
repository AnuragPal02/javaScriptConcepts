const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');
const resultDisplay = document.createElement('p');
const form = document.querySelector('form');

// const prevGuess = document.querySelector('.guesses');

// console.log(prevGuess);
// const randomNum = Math.floor(Math.random() * 100) + 1;

const randomNum = 5;

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const guessNUm = parseInt(userInput.value);
  validate(guessNUm);
});
form.appendChild(resultDisplay);
const validate = function (guessNum) {
  if (guessNum === randomNum) {
    resultDisplay.innerHTML = `Matched..`;
    gotMatched();
    return;
    // newGame();
  } else if (guessNum < randomNum) {
    resultDisplay.innerHTML = `too low..`;
  } else {
    resultDisplay.innerHTML = `too high..`;
  }
  document.querySelector('.guesses').innerHTML += `${guessNum}, `;

  let remChances = document.querySelector('.lastResult');

  remChances.innerHTML -= 1;

  document.querySelector('.lastResult').innerHTML = remChances.innerHTML;

  if (remChances.innerHTML <= 0) {
    resultDisplay.innerHTML = `Game over. The right answer is ${randomNum}`;
    gotMatched();
    return;
  }
  userInput.value = '';
};

const start = document.createElement('p');

const gotMatched = function () {
  start.innerHTML = `reStart`;
  document.querySelector('.resultParas').appendChild(start);
  submitButton.style.display = 'none';
};

start.addEventListener('click', (e) => {
  e.preventDefault();
  submitButton.style.display = 'block';
  submitButton.style.backgroundColor = 'green';
  start.style.display = 'none';
  userInput.value = '';
  
});
