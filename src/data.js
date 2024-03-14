/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentScore: 0,
  currentQuestionIndex: 0,

  questions: [
    {
      text: '1 - What is the capital of Australia?',
      answers: {
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Canberra',
        d: 'Brisbane',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: '2 - Which country is known for the Taj Mahal?',
      answers: {
        a: 'India',
        b: 'Egypt',
        c: 'Turkey',
        d: 'China',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: '3 - What is the largest desert in the world?',
      answers: {
        a: 'Sahara Desert',
        b: 'Gobi Desert',
        c: 'Arabian Desert',
        d: 'Antarctica',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: '4 - Which country is known as the Land of the Rising Sun?',
      answers: {
        a: 'China',
        b: 'Japan',
        c: 'Korea',
        d: 'Thailand',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: '5 - What is the largest continent by land area?',
      answers: {
        a: 'Europe',
        b: 'Asia',
        c: 'Africa',
        d: 'North America',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: '6 - Which is the largest ocean on Earth?',
      answers: {
        a: 'Atlantic Ocean',
        b: 'Indian Ocean',
        c: 'Pacific Ocean',
        d: 'Southern Ocean',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: '7 - Which country is known for its kangaroos and koalas?',
      answers: {
        a: 'New Zealand',
        b: 'Australia',
        c: 'South Africa',
        d: ' Brazil',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: '8 - Which country is famous for its tulips and windmills?',
      answers: {
        a: 'Norway',
        b: 'Netherlands',
        c: 'Belgium',
        d: 'Denmark',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: '9 - Which country is known for its maple syrup and hockey?',
      answers: {
        a: 'United States',
        b: 'United Kingdom',
        c: 'Canada',
        d: 'Germany',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: '10 - Which country is famous for its tango dance and beef?',
      answers: {
        a: 'Brazil',
        b: 'Argentina',
        c: 'Chile',
        d: 'Peru',
      },
      correct: 'b',
      selected: null,
    },
  ],
};
