let number = Math.floor(Math.random() * 10) + 1;
let operation = Math.floor(Math.random() * 4);
if (operation == 0) {
  console.log("The sum of " + number + " and " + number + " is " + (number + number));
} else if (operation == 1) {
  console.log("The difference between " + number + " and " + number + " is " + (number - number));
} else if (operation == 2) {
  console.log("The product of " + number + " and " + number + " is " + (number * number));
} else {
  console.log("The quotient of " + number + " divided by " + number + " is " + (number / number));
}
