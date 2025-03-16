const mathclass = {
  randomProblem: () => {
    // Generate a random problem and return it as a string
    const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return `${num1} ${operator} ${num2}`;
  },
};