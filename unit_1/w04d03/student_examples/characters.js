class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
      console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    smite () {
      console.log('i smited thee.');
    }
  }
//    const hobbit = new Character('Mr Baggins', 113, 'brown', 'black')
//   console.log(hobbit);

class Hobbit extends Character {
    constructor(name, age, eyes, hair, lovesCats = true, lovesDogs){
        super(name, age, eyes, hair, lovesCats = true, lovesDogs);
        this.isHobbit = true;
        this.home = 'the Shire';

    }
    steal (){
        console.log('I stole haha');

    }
    //will overwrite smite for the Hobbit class
    smite () {
        super.smite();
        this.steal();
    }
}

const frodo = new Hobbit('Frodo', 33, 'brown', 'black');

frodo.smite();
// frodo.steal();
// console.log(frodo);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  