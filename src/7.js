const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const mathProblems = [
  {
    question: "What is 2 + 2?",
    answer: "4"
  },
  {
    question: "What is 5 - 3?",
    answer: "2"
  },
  {
    question: "What is 10 x 2?",
    answer: "20"
  }
];

const getRandomMathProblem = () => mathProblems[getRandomNumber()];

console.log(getRandomMathProblem());
