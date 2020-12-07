
//Create an Alphabet Array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

//Cache DOM nodes
const $letters = $('.letters');
const $wordBox = $('.words');
const $input = $('input');
const $addButton = $('#submit');

//Create a player class
class Player {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.wordsCreated = [];
    }
}

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
console.log(player1, player2);


//Create a letters box class
class LettersBox {
    constructor(){
        this.letters = [];
    }
    generateLetters() {
        for(let i = 1; i <= 7; i++){
            //Create random index variable to store random index
            const randomIndex = Math.floor(Math.random()*alphabet.length-1);
            this.letters.push(alphabet[randomIndex])
        }
        $letters.append(this.letters)
    }
    
}
const lettersBox = new LettersBox;


//Create a word box array to store the words
const wordsBox = [];


//Create a score board object
const scoreBoard = {
    name: 'Score Board',
    player1Points: 0,
    player2Points: 0
}

//Generate 7 random numbers
lettersBox.generateLetters();
console.log(lettersBox)

//Event Handlers
const addWord = () => {
    // event.stopPropogation();
    const $li = $('<li>').html($input.val());
    const $disputeButton = $('<button>').addClass('dispute').text('DISPUTE');
    const $deleteButton = $('<button>').addClass('dispute').text('DELETE');
    $li.append($disputeButton);
    $li.append($deleteButton);
    // $disputeButton.on('click', displayDictionary);
    // $deleteButton.on('click', deleteWord)
    $wordBox.append($li);
    $input.val('');

}

//Add event listener for ADD button
$addButton.on('click', ()=>{addWord()})





$(() => {
    // put jQuery in here
   
});








