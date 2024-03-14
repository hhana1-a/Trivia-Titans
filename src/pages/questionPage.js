import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';
import { initFinalPage } from './finalPage.js';
import { progress } from '../localStorage.js';

export const initQuestionPage = (isContinue = false) => {
  if (isContinue === true) {
    progress.loadIndex();
    progress.loadScore();
  }

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  const scoreElement = createScoreElement(
    quizData.currentScore,
    quizData.questions.length
  );
  userInterface.appendChild(scoreElement);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SKIP_QUESTION_BUTTON_ID)
    .addEventListener('click', skipQuestion);

  for (const answerElement of answersListElement.children) {
    answerElement.addEventListener('click', selectEventHandler);
  }


   //restart via enter

   const button2 = document.getElementById('next-question-button');
   document.addEventListener('keydown', function(event) {
    if (event.key === " " && quizData.currentQuestionIndex < 10) {
      nextQuestion();
    }
  });
 
 

};

function selectEventHandler() {
  selectAnswer(this);
}

const selectAnswer = (selectElement) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  currentQuestion.selected = selectElement.innerHTML.split(':')[0].trim();

  if (answerIsCorrect(currentQuestion)) {
    quizData.currentScore++;

    document.getElementById(
      'show-score'
    ).innerText = `Your result is ${quizData.currentScore} / ${quizData.questions.length}`;
  } else {
    selectElement.classList.add('wrong');
  }

  removeAnswerClickEvents(selectElement.parentElement);
  showCorrectAnswer(currentQuestion);
};

const removeAnswerClickEvents = (answersListElement) => {
  for (const answerElement of answersListElement.children) {
    answerElement.removeEventListener('click', selectEventHandler);
    answerElement.style.pointerEvents = 'none';
  }
};

const answerIsCorrect = (question) => {
  return question.selected === question.correct;
};

const showCorrectAnswer = (question) => {
  const answersList = document.getElementById(ANSWERS_LIST_ID);
  for (const answerElement of answersList.children) {
    if (answerElement.innerHTML.trim().startsWith(question.correct)) {
      answerElement.classList.add('correct');
    }
  }
};

const skipQuestion = () => {
  showCorrectAnswer(quizData.questions[quizData.currentQuestionIndex]);
  removeAnswerClickEvents(document.getElementById(ANSWERS_LIST_ID));
};

const nextQuestion = () => {
  progress.saveIndex();
  progress.saveScore();
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex === quizData.questions.length) {
    initFinalPage(quizData.currentScore, quizData.questions.length);
  } else {
    initQuestionPage();
  }
};
