// const isCool = true;
// let isAwesome = false;
// if (isCool){
//     console.log('You can be in SEIR Ruth');
//     isAwesome = false;
// }

// if (isAwesome){
//     console.log('You have graduated SEIR Ruth');
// }

// if (true){
//     let isAwesome = 'stuff';
//     function printAwesomeness (){
//         console.log(typeof isAwesome)
//     }
// }
// printAwesomeness();

let doesItMove = true;
let shouldItMove = false;

/*
-----------------------------does it move---------------------
            |                                       |
            |                                       |
            No (else)                               Yes (if)                                  
*/

if (doesItMove){
        //Represents the right side
if (shouldItMove){
        console.log('no problem')
    } else {
        console.log('get the duck tape')
    }
} else {
        //Represents the left side
if(shouldItMove){
        console.log('slide some oil to me.')
    } else { 
        console.log('no problem')
    }
}


let isAwake = true;
let count = 0;

while (isAwake){
    console.log('I am awake');
    count ++;
    console.log('the hour is ' + count);
    if(count <= 24){
        continue;
    }
    isAwake = false;
}

if (isAwake){
    console.log('still awake');
} else {
    console.log('zzzzz');
}

