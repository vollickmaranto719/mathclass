function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Example usage: Get a random integer between 1 and 10 (inclusive)
console.log(getRandomInt(10));

// Example usage: Generate a string of random characters (use the max parameter in getRandomInt to generate more characters)
let characters = '';
for (let i = 0; i < getRandomInt(5); i++) {
  characters += String.fromCharCode(getRandomInt(65) + Math.random() * (122 - 65));
}
console.log(characters);
