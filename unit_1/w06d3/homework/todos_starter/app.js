$(() => {
console.log('I am linked');
    // DOM stuff
    
//Cache DOM Nodes
const $add = $('#submit');
const $inputContainer = $('#input-container')

//Event Handlers
const addToDo = (event) => {
    event.preventDefault();
    console.log(event.currentTarget)
    console.log(event.target)

}

//Event Listener

$inputContainer.on('submit', addToDo);


})