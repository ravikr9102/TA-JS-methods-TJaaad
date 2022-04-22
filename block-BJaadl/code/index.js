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

let wordsLength = words.map((w) => w.length);

// - Create a new array that only contains word with atleast one vowel.

// let vowelWord = words.filter((word) => {
//   if(
//     word.toLowerCase().includes("a") ||
//     word.toLowerCase().includes("e") ||
//     word.toLowerCase().includes("i") ||
//     word.toLowerCase().includes("o") ||
//     word.toLowerCase().includes("u") 
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// });

function checkVowel(words){
  return (
    words.toLowerCase().includes("a") ||
    words.toLowerCase().includes("e") ||
    words.toLowerCase().includes("i") ||
    words.toLowerCase().includes("o") ||
    words.toLowerCase().includes("u") 
  );
}
let vowelFilter = words.filter((w) => checkVowel(w));

// - Find the index of the word "rhythm"

words.findIndex((w) => w == "rhythm");

// - Create a new array that contians words not starting with vowel.

let notWithVowel = words.filter((w) => !checkVowel(w[0]));

// - Create a new array that contianse words not ending with vowel

let notEndingWithVowel = words.filter((w) => !checkVowel(w[w.length-1]));

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

let oddOrEven = numbers.map((num) => num % 2 === 0);

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

function averageNumbers(array){
  return array.reduce((acc,cv) => {
    acc = acc + cv;
    return acc;
  },0) / array.length
}


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


function averageWordLength(words){
  return (
    words
    .map((w) => w.length) 
    .reduce((acc,cv) => {
      return acc + cv;
    },0) / words.length
  );
}