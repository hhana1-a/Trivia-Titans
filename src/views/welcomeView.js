import { START_QUIZ_BUTTON_ID, CONTINUE_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = (canContinue = false) => {
  const element = document.createElement('div');
  const welcomeTitle = 'welcome-title';
  element.classList.add('block_white');


  element.innerHTML = String.raw`

  
    <h1 id="${welcomeTitle}">Welcome</h1>

    <label for="userName" class="name-label">What should we call you?</label>
     
      <input type="text" id="userName" name="userName" required class="name-input">
     
      <br>

    <button id="${START_QUIZ_BUTTON_ID}">START</button>

    ${
      canContinue ? `<button id="${CONTINUE_QUIZ_BUTTON_ID}">CONTINUE</button>` : ''
    }
    

  `;


  return element;
};