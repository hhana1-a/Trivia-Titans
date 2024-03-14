import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { progress } from './localStorage.js';

const loadApp = () => {
  progress.loadIndex();

  if (quizData.currentQuestionIndex === 0) {
    initWelcomePage();
  } else {
    initWelcomePage(true);
  }
};

window.addEventListener('load', loadApp);
