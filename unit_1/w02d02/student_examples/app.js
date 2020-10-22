const body = document.querySelector('body');
//grabs the div tag with id of app and assigns it to a variable app//
const app = document.getElementById('app');

// const isCool = true;
// const myName = "Nicole";
// const verb = "dance";
// const superAwesome = true;

// body.innerHTML = `
//     <h1>Hello from ${myName} . I love to ${verb}. ${ superAwesome? 'and I am super awesome' : 'and I am not super aewsome'} </h1>

//     `
const data = [
    'Marty is awesome',
    'Natalia is spectacular',
    'Cody is tubular',
    'German is fantastic',
    'Josh is the goat duh',
    'Bruno is incredible',
    'Nando is amazing',
    'Arthur is okay I guess'

];

 const list = document.createElement('ul'); // creating an empty ul and storing it in a variable called list


 for(let i = 0; i < data.length; i++){
     const text = document.createTextNode(data[i]);
     const listItem = document.createElement('li');
     listItem.appendChild(text);
     list.appendChild(listItem);
     if (i === (data.length - 1)){
         app.appendChild(list);
     }
 }

console.log( Array.isArray(data));

//Create a sum variable set equal to 0 

//Loop over all of the even integers starting from 0 to 10
    //Add the current value of i to the value of sum. 

//Return or console.log sum


//**ARRAYS**//
