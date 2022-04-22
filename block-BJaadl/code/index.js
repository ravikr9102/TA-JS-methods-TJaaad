let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

let findLongestWord = words.sort((a,b) => a.length - b.length).pop();

// - Convert the above array "words" into an array of length of word instead of word.



// - Create a new array that only contains word with atleast one vowel.

let vowelWord = words.filter((word) => {
  if(
    word.toLowerCase().includes("a") ||
    word.toLowerCase().includes("e") ||
    word.toLowerCase().includes("i") ||
    word.toLowerCase().includes("o") ||
    word.toLowerCase().includes("u") 
  ) {
    return true;
  } else {
    return false;
  }
});

// - Find the index of the word "rhythm"

console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.



// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let sum = numbers.reduce((acc,num) => {
  return acc + num;
},0);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

function triple(num){
  return num * 3;
}
let tripleNumbers = numbers.map(triple);

// - Create a new array that contains only even numbers

function isOdd(num){
  return num % 2 === 0;
}

let oddNumbers = numbers.filter(isOdd);

// - Create  a new array that contains only odd numbers.

function isEven(num){
  return num % 2 !== 0;
}

let evenNumbers = numbers.filter(isEven);

// - Create a new array that should have true for even number and false for odd numbers.



// - Sort the above number in assending order.

let clone = [...numbers]
clone.sort((a,b) => a - b);

// - Does sort mutate the original array?

// Yes sort mutate the array.

// - Find the sum of the numbers in the array.

let sum2 = numbers.reduce((acc,num) => {
  return acc + num;
},0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
