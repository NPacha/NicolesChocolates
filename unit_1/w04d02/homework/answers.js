const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

// Every
// 1. Determine if every number is greater than or equal to 0

console.log(smallNums.every(currentValue => currentValue >= 0 ))
console.log(nums.every(currentValue => currentValue >= 0))

// 2. Determine if every word shorter than 8 characters

console.log(panagram.every(word => word.length < 8));
console.log(panagrams.every(word => word.length < 8));




// Filter
// 1. filter the array for numbers less than 100

 console.log(smallNums.filter(num => num < 100));
console.log(nums.filter(num => num < 100));

// 2. filter words that have an even length

console.log(panagram.filter(word => (word.length % 2 === 0)));
console.log(panagrams.filter(word => (word.length % 2 === 0)));


// Find
// 1. Find the first value divisible by 5
console.log(smallNums.find(num => (num/5) % 1 === 0))
console.log(nums.find(num => (num/5) % 1 === 0))
// 2. find the first word that is longer than 6 characters

console.log(panagram.find(word => word.length > 6 ))
console.log(panagrams.find(word => word.length > 6))

// Find Index
// 1. find the index of the first number that is divisible by 3
console.log(smallNums.findIndex(num => (num/3 % 1 === 0)));
console.log(nums.findIndex(num => (num/3 % 1 === 0)));
// 2. find the index of the first word that is less than 2 charaters long
console.log(panagram.findIndex(word => word.length < 2));
console.log(panagrams.findIndex(word => word.length < 2));


// For Each
// 1. console.log each value of the nums array multiplied by 3
const multiply = (num) => {
  console.log(num * 3);
}
smallNums.forEach(multiply);

nums.forEach((num) => {console.log(num*3)});

// 2. console.log each word with an exclamation point at the end of it

panagram.forEach((word)=> {console.log(word + '!')})
panagrams.forEach((word)=> {console.log(word + '!')})


// Thought Questions

// What happened to the original array?
// Can you store the values from a forEach method in a new array?
//The original array stayed the same. We could store it in a new array by declaring an empty array to push the values into when the for each method iterates over each value.


// Map
// 1. make a new array of each number multiplied by 100
 const smallMultiplied = smallNums.map(num => num * 100)
console.log(smallMultiplied);

const numMultiplied = nums.map(num => num * 100);
console.log(numMultiplied);

// 2. make a new array of all the words in all uppercase
const panagramUpper = panagram.map(word => word.toUpperCase());
console.log(panagramUpper);

const panagramsUpper = panagrams.map(word => word.toUpperCase());
console.log(panagramsUpper)


// Thought Questions

// What happened to the original array?
//The original array says the same. 
// Can you store the values from a map method in a new array?
//Yes!! :) 


// Reduce
// Add all the numbers in the array together using the reduce method
const sum = smallNums.reduce((acc, currentValue)=> {
  return acc + currentValue;
})

console.log(sum);

const sumOfNums = nums.reduce((acc, currentValue)=> {
  return acc + currentValue;
})

console.log(sumOfNums);

// concatenate all the words using reduce

const concatPanagram = panagram.reduce((acc, currentVal)=> {
  return acc + ' ' + currentVal + ' '
},
'')


console.log(concatPanagram);
console.log(panagram);


// Thought Questions

// What happened to the original array?
// The original array stays the same.

// Some
// Find out if some numbers are divisible by 7

console.log(smallNums.some(num=> (num/7) % 1 === 0))

const test = num => (num/7) % 1 === 0 ;

console.log(nums.some(test));

// Find out if some words have the letter a in them
const hasA = (word) => {
  for (let i = 0; i < word.length; i++){
    console.log(word[i]);
    if (word[i] === 'a') {
      return true;
    }

  }
  return false;
}
console.log(panagram.some(hasA));

const panagramsHasA = (word) => {
  for (let i = 0; i < word.length; i++){
    console.log(word[i]);
    if (word[i] === 'a'){
      return true;
    }
  }
  return false;
}

console.log(panagrams.some(panagramsHasA));


// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log(smallNums.sort());
console.log(nums.sort());
//No, I do not get the result as I expected, because it is sorting based on the first place value within the number.


// Sort the numbers in ascending order
const smallNumsSort = smallNums.sort((num1, num2)=> {
  return num1 - num2;
})

console.log(smallNumsSort);

const numsSort = nums.sort((num1, num2)=> {
  return num1 - num2;
})
console.log(numsSort);


// Sort the numbers in descending order

const smallNumsDescend = smallNums.sort((num1, num2)=> {
  return num2- num1;
})
console.log(smallNumsDescend);

const numsDescend = nums.sort((num1, num2)=>{
  return num2 - num1;
})

console.log(numsDescend);

// Sort the words in ascending order

const panagramAscend = panagram.sort((word1, word2)=> {
  return word1.length - word2.length
})

console.log(panagramAscend);

const panagramsAscend = panagrams.sort((word1, word2) => {
  return word1.length - word2.length
})

console.log(panagramsAscend);

// Sort the words in descending order

const panagramDescend = panagram.sort((word1, word2)=> {
  return word2.length - word1.length
})

console.log(panagramDescend)

const panagramsDescend = panagrams.sort((word1, word2)=> {
  return word2.length - word1.length;
})

console.log(panagramsDescend);



// Thought Questions

// What happened to the original array?
console.log(panagram);
console.log(panagrams);
//The original arrays are mutated!