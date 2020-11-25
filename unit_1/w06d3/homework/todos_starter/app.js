$(() => {
console.log('I am linked');
    // DOM stuff
    
//Cache DOM Nodes
const $add = $('#submit');
const $inputContainer = $('#input-container');
const $input = $('#input-box');
const $thingsToDo = $('#to-do-list ul');
const $thingsDone = $('#completed ul');

//Event Handlers

const removeItem = (event) => {
    event.target.parentElement.remove();
}

const moveToDo = (event) => {
    event.preventDefault();
    $thingsDone.append(event.target.parentElement);
    $(event.target).text('REMOVE').css('background-color', '#B99197');
    $(event.target).on('click', removeItem)
    
}


const addToDo = (event) => {
    // event.stopPropogation();
    const $li = $('<li>').html($input.val());
    const $button = $('<button>').addClass('completed').text('COMPLETED');
    $li.append($button);
    $button.on('click', moveToDo);
    $thingsToDo.append($li);
    $input.val('');
    
}

//Event Listener

$add.on('click', addToDo);
$inputContainer.keypress((event) => {
    if (event.keyCode === 13){
        addToDo();
        
    }
});

})