function getRandomMathProblem() {
  const operators = ["+", "-", "*", "/"];
  const numbers = [10, 20, 30];
  const result = [];
  
  // Generate a random operator
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  // Generate two random numbers
  const num1 = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  const num2 = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  
  // Generate a random solution
  let solution;
  switch (operator) {
    case "+":
      solution = num1 + num2;
      break;
    case "-":
      solution = num1 - num2;
      break;
    case "*":
      solution = num1 * num2;
      break;
    case "/":
      solution = num1 / num2;
      break;
  }
  
  // Return the problem and solution
  return {
    problem: `${num1} ${operator} ${num2}`,
    solution: solution,
  };
}
