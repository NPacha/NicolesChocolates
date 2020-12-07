
//Create an Alphabet Array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

//Create a word box array to store the words
const wordsBox = [];


//Cache DOM nodes
const $letters = $('.letters');
const $wordBox = $('.words');
const $input = $('input');
const $addButton = $('#submit');
const $shuffleButton = $('#shuffle');
const $scoreBoard = $('.scoreBoard');
const $inputContainer = $('.input-container');
const $timerButton = $('#timer');


//Create a player class
class Player {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.wordsCreated = [];
    }
    increaseScore(wordLength){
        if(wordLength === 2){
            this.points += 10;
        }
        if(wordLength === 3){
            this.points += 20
        }
        if(wordLength === 4){
            this.points += 30
        }
        if(wordLength >= 5){
            this.points += 40
        }


    }
    decreaseScore(){

    }
}

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
console.log(player1, player2);

//Define who is the current player
let currentPlayer = player2;

//Updates the score board with current point score
const updateScoreBoard = () => {
    $scoreBoard.empty();
    const $scores = $('<p>').text(
    `Player 1: ${player1.points}
    Player 2: ${player2.points}`);
    $scoreBoard.append($scores);
}


//Create a letters box class
class LettersBox {
    constructor(){
        this.letters = [];
    }
    generateLetters() {
        this.letters = [];
        $letters.empty();
        for(let i = 1; i <= 7; i++){
            //Create random index variable to store random index
            const randomIndex = Math.floor(Math.random()*(alphabet.length-1));
            const $li = $('<li>').html(alphabet[randomIndex]);
            $letters.append($li);
            this.letters.push(alphabet[randomIndex]);
            console.log(randomIndex);
        }
        console.log(this.letters);
    }
    
}
const lettersBox = new LettersBox;


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
    currentPlayer.increaseScore($input.val().length);
    updateScoreBoard();
    $wordBox.append($li);
    $input.val('');

}

//Create 30 sec timer function 

let timeLeft = 15;

const timer = () => {
    
 
    const startTimer = () => {
        if(timeLeft === -1){
            clearTimeout(timerId);
        } else {
            $('.timer').html(timeLeft);
            timeLeft--;
        }
    }
    let timerId = setInterval(startTimer, 1000)
   
}


//EVENT LISTENERS && EVENT HANDLERS//
//Add event listener for ADD button
$addButton.on('click', ()=>{addWord()});
$inputContainer.keypress((event) => {
    if (event.keyCode === 13){
        addWord();
        
    }
});
$shuffleButton.on('click', ()=>{lettersBox.generateLetters()});
$timerButton.on('click', ()=>{timer()});


//Add delete on click listner
//Add delete event handler
//Add dispute on click listner
//Add dispute event handler

//Generate 7 random numbers
lettersBox.generateLetters();


//Create point scoreboard function
//Create increase player score function







// $(() => {
//     // put jQuery in here
   
// });








