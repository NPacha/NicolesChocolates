
//Create an Alphabet Array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

const $letters = $('.letters');
console.log($letters);

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

//Generate 7 random numbers
lettersBox.generateLetters();
console.log(lettersBox)

//Create a letters box class

//Create a score board object
const scoreBoard = {
    name: 'Score Board',
    player1Points: 0,
    player2Points: 0
}



$(() => {
    // put jQuery in here
   
});








