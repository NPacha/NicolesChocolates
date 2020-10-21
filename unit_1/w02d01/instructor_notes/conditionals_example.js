// const isCool = true; let isAwesome = false;

// if (isCool){ console.log('you can be in SEIR RUTH'); isAwesome = true; }

// if(isAwesome){ console.log('you have graduated SEIR Ruth'); }

// if (true){ let isAwesome = 'stuff'; function printAwesomeness (){
// console.log(typeof isAwesome) } } printAwesomeness();

let doesItMove = true; let shouldItMove = false;

/*

-------------------------does it move ------------------------ |
    | |                                   | NO (else)
Yes (if) 
*/

if(doesItMove){ // yes
    // Represents the right side
    if(shouldItMove){ console.log('no problem'); } else { // no
        console.log('get the duct tape'); } } else {
    // Represents the left side
    if(shouldItMove){ console.log('slide some oil to me.'); } else {
    console.log('no problem'); } }

let isAwake = true; let count = 0; while (isAwake){ console.log('I am awake');
count++; console.log('the hour is' + ' ' + count); if(count <= 24){ continue; }
isAwake = false; }

if (isAwake){ console.log('still awake'); } else {
    console.log('zzzzzzzzzzzzzzz'); }

