// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101);


// - Find the last index of `9` in numbers

numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.join(" ");

// - Add two new words in the strings array "called" and "sentance"

let clone = [...strings]
clone.push("called");
clone.push("sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

clone = clone.join(" ");

// - Remove the first word in the array (strings)

let value = [...strings]
value.shift();

// - Find all the words that contain 'is' use string method 'includes'

// strings.includes('is');

let allIs = strings.filter((string) =>
string.includes("is")
);

// - Find all the words that contain 'is' use string method 'indexOf'

let allIsAgain = strings.filter((string) =>
string.indexOf("is") !== -1
);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

// let ret = numbers.every(function(number){
//   return number / 2;
// });

let value2 = numbers.every((num ) => {
  if (num % 3 == 0){
    return true
  }
  else {
    return false
  }
});

// number.every((num) => num % 3 === 0);

// -  Sort Array from smallest to largest

numbers.sort((a,b) => a - b);

// - Remove the last word in strings

let val = [...strings];
val.pop();

// - Find largest number in numbers

// let num2 = [...numbers]
// num2.sort(function compareFunction(a,b){
//   return b - a
// });

let largest = numbers.sort((a,b) => a - b).pop();

// - Find longest string in strings

let longestString = strings.sort((a,b) => a.length - b.length).pop();

// - Find all the even numbers

function isEven(num){
  return num % 2 === 0;
}
let evenNumbers = numbers.filter(isEven);

// - Find all the odd numbers

function isOdd(num){
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);


// - Place a new word at the start of the array use (unshift)

strings.unshift("Hi");

// - Make a subset of numbers array [18,9,7,11]

let number = numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']

let str = strings.slice(3,5);

// - Replace 12 & 18 with 1221 and 1881

numbers.splice(numbers.indexOf(12),1,"1221");
numbers.splice(numbers.indexOf(18),1,"1821");

// numbers.map((num) => {
//   if(num === 12) {
//     return 1221;
//   } else if(num === 18){
//     return 1821;
//   } else {
//     return num;
//   }
// });

// - Replace words in strings array with the length of the word

let stringsLength = strings.map((string) => string.length);

// - Find the sum of the length of words using above question

stringsLength.reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
} , 0);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let filteredCustomer = customers.filter((customer) =>
customer.firstname.startsWith("J")
);

// - Create new array with only first name

let firstnameCustomer = customers.map((customer) =>
customer.firstname
);

// - Create new array with all the full names (ex: "Joe Blogs")

let fullnameCustomer = customers.map((customer) =>
customer.firstname.lastname.fullnameCustomer
);

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
