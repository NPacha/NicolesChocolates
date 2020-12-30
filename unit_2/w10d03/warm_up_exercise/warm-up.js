//first split the string into individual characters
//create a loop that pushes the last character out of the array into new array
//join all of the characters together
//FIRST EXAMPLE
// const string = 'hello';
// const reverse = (str) => {
//     console.log(str.split('').reverse().join(''));
// }

// reverse(string);

// const reverse = (str) => {
//     str.split('').reverse().join('');
// }

//SECOND EXAMPLE
const string = 'apple';

const reverse = (str) => {
    const array = [...str].reverse();
    console.log(array);
    return array.reduce((acc, word) =>{
        word + acc, ''
    }, '');


}

reverse(string);


//WORD FREQUENCY//

const findWordFrequencies = (str) => {
    const strToArray = str.split(' ');
    console.log(strToArray);
    const obj = {};

    for (item of strToArray){
        item = item.toLowerCase();
        if(obj[item]){
            obj[item] += 1;
        } else{
            obj[item] = 1;
        }
    }
    return obj;
}


