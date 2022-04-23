let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopelName = persons.map((p) => p.sex);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((val) => val.grade);

// Create an array peopleSex and store the value of sex key from persons array


// Log the filtered named of people in peopleName that starts with 'J' or 'P'

function peopelName2(value){
  if(value.name.startsWith ('J') || value.name.startsWith ('P')){
    return value.name;
}
}
console.log(persons.filter(peopelName2));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

function peopelWithAC(value){
  for ( let i = 0 ; i < value.length ; i++ ){
    if(value[i].name.startsWith ('A') || value[i].name.startsWith ('C')){
      console.log(value[i].name.length,value[i].name)
  }
  }
};

// Log all the filtered male ('M') in persons array

function findMale(val){
  if(val.sex === 'M'){
    return val;
}
}
console.log(persons.filter(findMale));


// Log all the filtered female ('F') in persons array

function findFemale(val){
  if(val.sex === 'F'){
    return val;
}
}
console.log(persons.filter(findFemale));


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let value = persons.filter((val) => {
  if(val.sex === 'F'){
    return val;
}
});

console.log(value);

 let value2 = value.filter((cv) => {
  if(cv.name.startsWith('C') || cv.name.startsWith ('J') ){
    return cv;
}
});

console.log(value2);

// Log all the even numbers from peopleGrade array

let peopleGrade2 = persons.map((val) => val.grade);

let value1 = peopleGrade2.filter((cv) => {
  if( cv % 2 === 0){
    return cv;
  }
});
console.log(value1);

// Find the first name that starts with 'J' in persons array and log the object

let personWithJ = persons.filter((val) => {
  if(val.name[0] === 'J') {
    return val;
  }
});

// Find the first name that starts with 'P' in persons array and log the object

let personWithP = persons.filter((val) => {
  if(val.name[0] === 'P') {
    return val;
  }
});

// Find the first name that starts with 'J', grade is greater than 10 and is a female

let value4 = persons.filter((value) => {
  if(value.name[0] === 'J' && value.grade > 10 && value.sex === 'F'){
    return value;
  }
});

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((val) => {
  if(val.sex === 'F'){
    return val;
}
});

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((val) => {
  if(val.sex === 'M'){
    return val;
}
});

// Find the sum of all grades and store in gradeTotal

let peopleGrade3 = persons.map((val) => val.grade);

 function sumArray(array){
  return array.reduce((acc,cv) => {
    acc = acc + cv;
    return acc;
  },0);
}
let result = sumArray(peopleGrade3);

// Find the average grade

function averageGrade(array){
  return array.reduce((acc,cv) => {
    acc = acc + cv;
    return acc;
  },0) / array.length;
}
let result2 = averageGrade(peopleGrade3);

// Find the average grade of male

let gradeMale = malePersons.map((val) => val.grade);

function averageGradeOfMale(array){
  return array.reduce((acc,cv) => {
    acc = acc + cv;
    return acc;
  },0) / array.length;
}
let result3 = averageGradeOfMale(gradeMale);


// Find the average grade of female

let gradeFemale = femalePersons.map((val) => val.grade);

function averageGradeOfFemale(array){
  return array.reduce((acc,cv) => {
    acc = acc + cv;
    return acc;
  },0) / array.length;
}
let result4 = averageGradeOfFemale(gradeFemale);


// Find the highest grade

function findLongestGrade(array){
  return[...array]
  .sort((a,b) => a.length - b.length)
  .pop()
}
 let grade = findLongestGrade (peopleGrade3);

// Find the highest grade in male

function findHighgestGradeMale(arr){
  return [...arr]
  .sort((a,b) => a.length - b.length)
  .pop()
}
let HighgestGradeMale = findHighgestGradeMale(gradeMale);

// Find the highest grade in female

function findHighgestGradeFemale(arr){
  return [...arr]
  .sort((a,b) => a.length - b.length)
  .pop()
}
let HighgestGradeFemale = findHighgestGradeFemale(gradeFemale);


// Find the highest grade for people whose name starts with 'J' or 'P'


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

let sortedGrade = [...peopleGrade].sort((a,b) => a - b);

// Sort the peopleGrade in descending order


let sortedGrade2 = [...peopleGrade].sort((a,b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let sortedGrade3 = peopleGrade.sort((a,b) => b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`

let peopelName1 = persons.map((p) => p.name);

let peopeWithAscending = [...peopelName1].sort((a,b) => a - b);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

let peopeWithAscending1 = peopelName1.sort((a,b) => a - b);