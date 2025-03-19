// Random JS Code
const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const getRandomOperation = () => {
  const operations = ["+", "-", "*", "/"];
  return operations[Math.floor(Math.random() * operations.length)];
}

const getRandomExpression = () => {
  const left = getRandomNumber();
  const operation = getRandomOperation();
  const right = getRandomNumber();
  return `${left} ${operation} ${right}`;
}

const solveExpression = (expression) => {
  const [left, operation, right] = expression.split(" ");
  if (operation === "+") {
    return parseInt(left) + parseInt(right);
  } else if (operation === "-") {
    return parseInt(left) - parseInt(right);
  } else if (operation === "*") {
    return parseInt(left) * parseInt(right);
  } else {
    return parseInt(left) / parseInt(right);
  }
}

const main = () => {
  const expression = getRandomExpression();
  console.log(`${expression} = ${solveExpression(expression)}`);
}
