$(() => {
console.log('I am linked');
    // DOM stuff
    
//Cache DOM Nodes
const $add = $('#submit');
const $inputContainer = $('#input-container');
const $input = $('input-box');

//Event Handlers
const addToDo = (event) => {
    event.preventDefault();
    console.log($input.val());
    console.log(event.currentTarget)
    console.log(event.target)

}

//Event Listener

$inputContainer.on('click', addToDo);

// $add.on('click', addToDo)


})