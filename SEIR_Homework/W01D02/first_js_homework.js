// SECTION 1
// 1. DRY stands for "Don't Repeat Yourself". We need to pay attention to this so that our code is easier to read, and is less prone to having many bugs. Some programming tools we have learned to create DRY code is for loops and while loops.
// 2. const is used for variables that we know will not change in our program. let is the most current syntax used for declaring variables that are mutable. var is an outdated syntax used to declare variables that are mutable. 
// SECTION 2
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;

 console.log(a !== b);
  

console.log(c > d);

console.log('Name' === 'Name');

console.log(a < b < c);

console.log(a * a === d);

console.log(e !== 'Kevin');

console.log(48 == '48');

console.log(f !== e);

// Set a new variable g to 0

let g = 0;

// console.log g

console.log(g);

// Then set the variable g to be equal to b + c
g = b + c;

// console.log g
console.log(g);

// 10 = g;

// 1. I used let, because it is the most current syntax for JS, and the variable is mutable, so I was able to reassign it. 
// 2. When I remove let, I do not get an error, and receive the same output in the console. Tested this also in code pen and saw the same result.
// 3. I receive an error- SyntaxError: Invalid left-hand side in assignment

//Bonus
console.log (4 < (53 || false));

//TRUE


console.log((53 || false) > !false);

//TRUE

console.log('Kelvin' < 57);

//FALSE

console.log (4 < (53 || false) > !false && 'Kelvin' === 57);

//FALSE ==> Wracking my brain on this one! Can we please go over in class? 


// SECTION 3
// 1. I believe the code below is an infinite loop, because there is no indication of there being a point in which the condition becomes false. The condition seems to remain true only. 
// 2. I think that this would be an infinite loop, because although there is a point in which the conditional statment is assigned to become false, the variable that we use is 'const', so we will be unable to reassign it to become false. 
// The expected output would be to console log 'Do not run this loop' once, then have the variable reassigned to false, but since it is a const variable that will not execute.

//Declare variable 'letters' to be equal to a string 'A'
let letters = "A";
//Declare variable i to be equal to 0
let i = 0;

//start a while loop, run the loop while i (or the starting point of 0) is less than 20. Stop loop when i is equal to 19.
while (i < 20) {
    //reassign the variable 'letters' to be the current value of letters, plus "A"
    letters += "A";
    //increment i by 1
	i++;
}
//logs the variable letters after the while loop completes
console.log(letters);

//EXPECTED RESULT
// "AAAAAAAAAAAAAAAAAAAAA"
// ACTUAL RESULT
// AAAAAAAAAAAAAAAAAAAAA
// The result is what I expected, except that I expected the result to contain quotation marks since the variable letters was a string. I learned that strings will appear in the console without quotes. 


//SECTION 4
// 1. The difference between a while loop and a for loop is that a for loop's syntax specifies more about the loop within the control panel, and we don't have to declare a variable outside of the loop like we do for while loops. For loops are less prone to infinite loops. Similarities: both perform an iteration, both have a postfix operator, both have a conditional. 
// 2. Components of control panel: 1st- initial condition (starting point/value) 2nd- while condition (condition under which the loop runs) 3rd- repeating expression(tells the loop what to do at the end of the iteration, usually instruction to alter starting value)

for ( let i = 0; i <= 999; i ++){
    console.log(i);
}

// BONUS 
// The backslash tells the computer that the single quotation is a part of the string, and is not meant as a signifier that the string has ended (escape charachter).
// Forward slash is used to comment out code or write pseudo code. 

for (let i = 999; i >= 0; i--){
    console.log(i);
}

for (let i = 1; i <= 10; i++){
    console.log("The value of i is: " + i + " of 10");
}
// BONUS
for (let i = 1; i <= 10; i++){
    console.log(`The value of ${i} is: ${i} of 10`);
}
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++){
    console.log(StarWars[i]);
}

for (let i = 0; i < StarWars.length; i++){
    console.log("Value of i: " + i + " Name of character: " + StarWars[i])
}

// BONUS
for (let i = 0; i < StarWars.length; i+= 2){
    console.log(StarWars[i]);
}


