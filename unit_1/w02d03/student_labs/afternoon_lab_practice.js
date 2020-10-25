//1. 

const maxOfThree = (num1, num2, num3) => {
let largestNum = num1;
if (num2 > num1){
    largestNum = num2
} else if (num3 > num1){
    largestNum = num3
}
return largestNum;
}

console.log(maxOfThree(10,100, 100));

//2. COME back to this!
const printLongestWord = (arrayOfStrings) => {
    let longestWord = arrayOfStrings[0];
    

    for(let i = 0; i < arrayOfStrings.length; i++ ){
        if (arrayOfStrings[i].length >  longestWord.length) {
            longestWord = arrayOfStrings[i];
        } 
    }
    return longestWord; 
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Peanutbutter1", "Peanutbutter2", "big", "blob"]));

//3.

const transmogrify = (num1, num2, num3) => {
let transmogrified = Math.pow((num1 * num2), num3);

return transmogrified;

}

console.log(transmogrify(5, 3, 2));

//4. 

const fibonacci = () => {

};


//5.

const findNeedle = (array) => {

let index = array.indexOf('needle');
let result = `Found the needle at position ${index} `;
if (index === -1){
    result = 'There is no needle here';
}

return result;
} 

console.log(findNeedle(['hay', 'needle', 'hay', 'hay', 'moreJunk', 'junk', 'randomJunk']));

//6.

const sumOfPositive = (array) => {
    let result = 0;

for (let i = 0; i < array.length; i++){
  
    if (array[i] > 0) {
        result = array[i] + result;
     
}

}
return result;
}

console.log(sumOfPositive([1,-4,-7,12]))
