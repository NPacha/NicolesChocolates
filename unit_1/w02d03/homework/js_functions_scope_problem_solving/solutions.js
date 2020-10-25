//Verbal Questions//
//1. The difference between a parameter and an argument is that a parameter is established during function declaration (an input of sorts that modifies the functions behavior), while an argument is established when you invoke, or call a function (uses specific data values).
//2. Console.log prints the result of somethign within the function to the console, which most users will not be seeing. Return on the other hand, stops the function, and sends the value of your function stored within the computers memory (not on the console).
//Palindrome

const checkPalindrome = (string) => {
    let lowerCase = string.toLowerCase();
    if (lowerCase.split("").reverse().join("") === lowerCase) {
        return true;
    }
    return false;
}
console.log(checkPalindrome("Radar"));

console.log(checkPalindrome("Borscht"));

//3.Sum Array
const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));