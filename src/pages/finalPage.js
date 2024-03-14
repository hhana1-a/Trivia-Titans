import { quizData } from '../data.js';
import { createFinalElement } from '../views/finalView.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { initWelcomePage } from './welcomePage.js';
import { progress } from '../localStorage.js';

export const initFinalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const userName = localStorage.getItem('userName');
  const finalElement = createFinalElement(
    quizData.currentScore,
    quizData.questions.length,
    userName
  );
  userInterface.appendChild(finalElement);

  const restartButton = document.getElementById('restart-quiz-button');
  restartButton.addEventListener('click', () => {
    quizData.currentScore = 0;
    quizData.currentQuestionIndex = 0;
    resetProgress();
    initWelcomePage();
  });
};

const resetProgress = () => {
  progress.resetProgress();
};
