
const classArray = ['Javascript','HTML','CSS','Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];

const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

// Every
const isBelowTen = (currentValue) => currentValue >= 0;
console.log(numberArray.every(isBelowTen))

const isOverTwo = (currentValue) => currentValue.length > 2;
console.log(classArray.every(isOverTwo))

//Real life:looking at a list of peopel to get into a club, every value must be over 21...

// Filter

console.log(classArray.filter(currentValue => currentValue.length > 4))

//Real life: 

// Find

console.log(numberArray.find(number => number > 100))
//Real life: Finding all of the grades over a certain number, all passing grades.

// Find Index

const isCSS = (value) => value === 'CSS';
console.log(classArray.findIndex(isCSS));

//Real life: Maybe in retail when you need to find a certain brand of a shirt

// For Each
const addOne = (value) => (value + 1);
console.log(numberArray.forEach(addOne))
// Map (come up with a new example!)
// Reduce
// Some
// Sort (research how to use sort with a callback)


