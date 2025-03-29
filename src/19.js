let numbers = [1, 2, 3, 4, 5];
let squares = [];
for (let i = 0; i < numbers.length; i++) {
    let square = numbers[i] * numbers[i];
    squares.push(square);
}
console.log(squares);
