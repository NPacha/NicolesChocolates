//Verbal Questions//
//1. The difference between a parameter and an argument is that a parameter is established during function declaration (an input of sorts that modifies the functions behavior), while an argument is established when you invoke, or call a function (uses specific data values).
//2. Console.log prints the result of somethign within the function to the console, which most users will not be seeing. Return on the other hand, stops the function, and sends the value of your function stored within the computers memory (not on the console).


//////////////////Palindrome///////////////////

const checkPalindrome = (string) => {
    let lowerCase = string.toLowerCase();
    if (lowerCase.split("").reverse().join("") === lowerCase) {
        return true;
    }
    return false;
}
console.log(checkPalindrome("Radar"));

console.log(checkPalindrome("Borscht"));

//////////////////Sum Array//////////////////
const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

////////////////////Prime Numbers////////////////////////// 
 const checkPrime = (num) => {
     
     //Get number that we need to divde our input up to ,rounded
          let divider = Math.round(Math.sqrt(num));

          for (let i = 2; i <= divider; i++){
            //If the number divided by the current number in our loop is a whole number (check using modulo 1)
              if ((num/i) % 1 === 0  ){
                  //This is not a prime number
                  return false;
                  } 
                }
             //This is a prime number
              return true;
          }
            
 console.log(checkPrime(18));

 //Step Two
  const printPrimes = (num) => {
       for (let i = 0; i <= num; i++){
         if (checkPrime(i)=== true){
           console.log(i);
         }
       }
      }


  printPrimes(50);


///////////////Rock Paper Scissors///////////////////

// Create array to hold computer choices
const computerChoices = ['rock', 'paper', 'scissors'];
  
//Create array to hold user options
const userChoices = ['rock', 'paper', 'scissors'];
  
//Create variable to hold user choice
let userSelection = 'rock';

//Create variable to hold computer choice
let computerSelection = 0;

//Create a function that will choose a random value for the computer. 
let randomIndexNum = Math.floor(Math.random() * computerChoices.length);

   const computerChooses = () => {
       computerSelection = computerChoices[randomIndexNum];
       }

//Call the function 
   computerChooses();

   //Sanity check
   console.log(computerSelection)

//Create a function that will compare computer choice and user choice, then console log the result
  const compareChoices = () => {
      if (computerSelection === 'rock'){
      if (userSelection === 'rock') {
          console.log( `It's a tie! The computer chose ${computerSelection} and the player chose ${userSelection}.`)
      } else if (userSelection === 'paper') {
          console.log(`The user won! ${userSelection} beats ${computerSelection}.`)} else {console.log(`The computer won! ${computerSelection} beats ${userSelection}.`)}
      } else if (computerSelection === 'paper'){
          if (userSelection === 'paper'){
              console.log(`It's a tie! The computer chose ${computerSelection} and the player chose ${userSelection}.`)
          } else if (userSelection === 'rock'){
              console.log(`The computer won! ${computerSelection} beats ${userSelection}.`)
          } else {console.log(`The user won! ${userSelection} beats ${computerSelection}.`)}
      } else if (computerSelection === 'scissors'){
          if (userSelection === 'scissors'){
            console.log(`It's a tie! The computer chose ${computerSelection} and the player chose ${userSelection}.`)
          } else if (userSelection === 'paper'){
            console.log(`The computer won! ${computerSelection} beats ${userSelection}.`)
          } else {console.log(`The user won! ${userSelection} beats ${computerSelection}.`)}
      }
    
    }

    compareChoices();


