import { quizData } from './data.js';

export const progress = {
  saveIndex: () => {
    localStorage.setItem('questionIndex', quizData.currentQuestionIndex + 1);
  },
  saveScore: () => {
    localStorage.setItem('score', quizData.currentScore);
  },
  loadIndex: () => {
    quizData.currentQuestionIndex = parseInt(
      localStorage.getItem('questionIndex')
    );
  },
  loadScore: () => {
    quizData.currentScore = parseInt(localStorage.getItem('score'));
  },
  saveUserName: (userName) => {
    localStorage.setItem('userName', userName);
  },
  loadUserName: () => {
    localStorage.getItem('userName');
  },
  resetProgress: () => {
    localStorage.setItem('questionIndex', 0);
    quizData.currentQuestionIndex = 0;
    localStorage.setItem('score', 0);
    quizData.currentScore = 0;
    localStorage.setItem('userName', '');
  },
};
