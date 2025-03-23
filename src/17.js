function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let nums = [];

for(let i = 0; i < 15; i++) {
    let num = getRandomInt(10);
    nums.push(num);
}
console.log(nums);

// Or if you want to generate numbers between 0-9
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = [];
for(let i = 0; i < 6; i++) {
    let num = getRandomNumber(0, 9);
    numbers.push(num);
}
console.log(numbers);

// Or if you want to generate random numbers between 0-9
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomIntegers = [];
for(let i = 0; i < 4; i++) {
    let num = getRandomInteger(0, 15);
    randomIntegers.push(num);
}
console.log(randomIntegers);

// Or if you want to generate numbers between 2-9
function getEvenNumbers(max) {
    return Math.floor(Math.random() * (max - 2 + 1)) + 2;
}

let evenNumbers = [];
for(let i = 0; i < 4; i++) {
    let num = getRandomInteger(2, 9);
    if(num % 2 === 0) {
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);

// Or generate random numbers between 1-3 (inclusive)
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let betweenNumbers = [];
for(let i = 0; i < 4; i++) {
    let num = getRandomBetween(1, 3);
    if(num === 2 || num === 3) {
        betweenNumbers.push(num);
    }
}
console.log(betweenNumbers);

// Or generate random numbers in a specific range
function getRandomInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

let randomNumberInRange = [];
for(let i = 0; i < 4; i++) {
    let num = getRandomInRange(1, 9);
    if(num === 7 || num === 8) {
        randomNumberInRange.push(num);
    }
}
console.log(randomNumberInRange);

// Or generate numbers between -5 and 5
function getPositiveIntegers() {
    return Math.floor(Math.random() * (5 + 1)) - 5;
}

let positiveNumbers = [];
for(let i = 0; i < 4; i++) {
    let num = getRandomInteger(-5, 5);
    if(num >= 0) {
        positiveNumbers.push(num);
    }
}
console.log(positiveNumbers);
