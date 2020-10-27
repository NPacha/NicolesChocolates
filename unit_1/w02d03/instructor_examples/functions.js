const printBoo = () => {
    console.log("Boo");
}
// printBoo();

const calculateArea = (num1, num2) => {
    // console.log(num1 * num2);
    if (num1 === "undefined") {
        return "Please add an argument for num1"
    }
    return num1 * num2;
}

// console.log(`The result is: ${calculateArea(3, 4)}`);

// const minusOne = (num) => {
//     console.log(num - 1);
// }

// minusOne(calculateArea(3, 4));


// const makeSentence = (wordOne, wordTwo, wordThree) => {
//     console.log(`${wordOne} ${wordTwo} ${wordThree}!`);
// }


// makeSentence("Hello", "Javascript", "Class");


// Is a Vowel?
// Write a function isAVowel that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, 
// false otherwise. 
// The vowel could be upper or lower case.

// console.log(isAVowel("a"));
const vowels = ["a", "e", "i", "o", "u"];

const isAVowel = (letter) => {
    letter = letter.toLowerCase();
    if (vowels.indexOf(letter) !== -1) {
        return true;
    } else {
        return false;
    }
}

console.log(isAVowel("j"))
