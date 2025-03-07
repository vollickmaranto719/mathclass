// Generate a random integer between 1 and 10
const randomInteger = Math.floor(Math.random() * 10) + 1;

// Generate a random operator (+, -, x, /)
const operators = ['+', '-', 'x', '/'];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

// Generate a random second operand between 1 and 10
const randomSecondOperand = Math.floor(Math.random() * 10) + 1;

// Combine the random integer, operator, and second operand into a string expression
const expression = `${randomInteger} ${randomOperator} ${randomSecondOperand}`;
