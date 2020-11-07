// const player = {
//     name: 'Jake the great',
//     health: 1000,
//     power: 1000, 
//     stamina: 1000
// }

// const bigBadBoss = {
//     name: 'Alex the Merceless',
//     health: 100000000000000000,
//     power: 10000000000,
//     stamina: Infinity
// }

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newPlayer
//   }

//   const kellie = createPlayer('Kellie', 100000000000, 1000000000000000, Infinity);
//   const german = createPlayer('German', 1000, 10000000, 2345);
//   console.log(german);

//   console.log(kellie);  
  
  class Character {
      constructor(name, legs, arms, eyes, hair, lovesCats = false, lovesDogs){
          this.name = name;
          this.legs = legs;
          this.arms = arms;
          this.eyes = eyes;
          this.hair = hair;
          this.lovesCats = lovesCats;
          this.lovesDogs = lovesDogs || false;
      }
    greet(){
        console.log('hi');
    }
    sayBye(){
        console.log('bye');
    }
    eat(string){
        console.log(`I am eating ${string}`);
    }
    age(num){
        console.log(`I am ${num} years old`);
    }

    slap(){
        console.log('Player was slapped')
    }
    setHair (hairColor) {
        this.hair = hairColor;
    }

    sayHello(character){
        console.log(`My name is ${this.name} and I am saying hi to ${character.name}`);
    }
    dyeFriendsHair(character, color){
        character.hair = color;
        console.log(`${character.name} was given a ${color} dye job by ${this.name}`);
    }


  }

  //characterArthur
  //CharacterArthur

  // instances of the class
const me = new Character('Arthur', 2, 2, 'brown', 'dark brown', true);
const you = new Character('Joshua', 2, 2, 'brown', 'dark brown');

me.setHair('gray');
you.setHair('red');
console.log(me);
console.log(you);
// console.log(typeof me);
// console.log(me instanceof Character);
//instance of operator, if particular object is an instance of a certain class

const player1 = new Character();
const player2=  new Character();
const player3= new Character();


player1.greet();
player2.sayBye();
player1.eat('sandwhich');
player2.age(19);
player1.slap();

const arthur = new Character('Arthur', 2, 2, 'brown', 'dark brown', true);
const joshua = new Character('Joshua', 2, 2, 'brown', 'dark brown');

arthur.sayHello(joshua);
arthur.dyeFriendsHair(joshua, 'purple');
