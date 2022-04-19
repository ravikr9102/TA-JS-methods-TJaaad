let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end

fruits.push('papaya');

// Remove the last element from fruits array

fruits.pop();

// Log the current length of fruits array

console.log(fruits);

// Remove the first element from fruits and log the value of fruits (use delete arr[0])

fruits.shift();
console.log(fruits);

// Log the element on index 0 and 1

console.log(fruits[0]);
console.log(fruits[1]);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)

if(fruits[0] === 'undefined' && fruits[1] === 'Banana') {
    fruits.shift();
}

// Add a new element to the start ('Guava') and shift the index of all other to one higher value

fruits.unshift('Guava');
fruits.shift();

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

fruits.unshift('Dragon Fruit');
fruits.shift();

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

if(fruits[0] === 'Dragon Fruit' && fruits[1] === 'Guava') {
    console.log(true);
}
else {
    console.log(false);
}

// Update the value of index 1 to `Pears`

fruits.splice(1,0,'pears');

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)



// Remove (slice) all the element from index 5

fruits.splice(5);

// Create another array named moreFruits with values ['Berries', 'Melons']

let moreFruits = ['Berries', 'Melons'];

// Concat moreFruits into fruits array (re-assign so the value gets updated)

fruits.concat(moreFruits);
console.log(fruits);

// Log the name of all fruit in console

fruits.forEach(function(fruits){
    console.log(fruits);
})

// Convert each fruit name to lowercase and log it

fruits.toLowerCase();
console.log(fruits)

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

fruits.toLowerCase();
let lowercaseFruits = []
const value = console.log(fruits);
value.push(lowercaseFruits);

// Convert all fruits name into uppercase and store in new array named uppercaseFruits

fruits.toLowerCase();
let uppercaseFruits = []
const value2 = console.log(fruits);
value.push(uppercasecaseFruits);



let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

numbers.flat();

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

numbersTwo.flat(2);

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

numbersThree.flat(4);

// Use forEach to log all the elements of numberThree array

numbersThree.forEach(function(numbersThree){
    console.log(numbersThree);
})

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map


let doubleNumbers = numbersThree.map(numbers =>{
    return numbers * 2;
})
console.log(doubleNumbers);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

let tripleNumbers = numbersThree.map(numbers => {
    return numbers * 3;
})
console.log(tripleNumbers);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

let halfNumbers = numbersThree.map(numbers => {
    return numbers % 2;
})
console.log(halfNumbers);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

let oddNumbers = numbersThree.filter(num => {
    return num % 2 === 0;
})
console.log(oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

let evenNumbers = numbersThree.filter(num => {
    return num % 2 !== 0;
})
console.log(evenNumbers);


// Find the index of 10 in numbersThree array

numbersThree.indexOf(10);

// Reverse the values of numbersThree array

numbersThree.reverse();

// Reverse the values of numbersTwo array

numbersTwo.reverse();

// Join all fruits with '-', convert to uppercase and log it

fruits.join('-');
console.log(fruits.toUpperCase());

// Join all fruits with '&', convert to lowercase and log it

fruits.join('&');
console.log(fruits.toLowerCase());
