//1.
const calculateCube = (num) => {
    return(Math.pow(num,3));
} 

console.log(calculateCube(5));

//2.

const vowels = ['a', 'e', 'i', 'o', 'u'];

const isAVowel = (string) => {
    string = string.toLowerCase();
    if (vowels.indexOf(string) !== -1){
        return true;
    } else {
    return false;}
}

console.log(isAVowel("j"));

//3. 
const getTwoLengths = (string1, string2) => {
    return [string1.length, string2.length];

}

console.log(getTwoLengths("Hank", "Hippopopalous"));

//4.
const getMultipleLengths = (arrayOfStrings) => {
    for (let i = 0; i < arrayOfStrings.length; i++){
        arrayOfStrings[i]= arrayOfStrings[i].length;  
    }
    return arrayOfStrings;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
