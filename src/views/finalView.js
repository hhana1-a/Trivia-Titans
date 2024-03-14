import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';

export const createFinalElement = (score, maxScore, userName = 'Guest') => {
  const element = document.createElement('div');
  element.classList.add('last-page-div');
  const text = document.createElement('h3');
  text.innerText = `Better luck next time, ${userName}. You earned ${score} points out of ${maxScore} points`
  element.appendChild(text);
  const gif = document.createElement('img');
  gif.classList.add('gif-style');
  element.appendChild(gif)

  //different text depending on a score
  if (score === 0) {
    gif.src = './public/images/tryAgain.gif';
  } else if (score > 0 && score <= 4) {
    gif.src = './public/images/wellDone.gif';
  } else {
    gif.src = './public/images/missionDone.gif';
  }

  element.innerHTML += String.raw`
    <button id="${RESTART_QUIZ_BUTTON_ID}"> New Game</button>
    `;

  return element;
};
