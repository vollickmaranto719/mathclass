function getRandomMathProblem() {
let operators = ['+', '-', '*', '/'];
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let operator = operators[Math.floor(Math.random() * operators.length)];
return `${num1} ${operator} ${num2}`;
}
getRandomMathProblem();