/////////////OUR HERO////////////////
class Hero {
    constructor(name, health = 100, weapons){
        this.name = name;
        this.health = health;
        this.weapon = weapons || {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza',
        'you can\'t count my calories']
    }
    talkSass(){
        
        let randomIndex = Math.floor(Math.random() * this.catchPhrases.length);
        let newElement = document.createElement('p');
        newElement.innerHTML = ` ${this.catchPhrases[randomIndex]}  `
        const parentDiv = document.getElementById('thering');
        parentDiv.appendChild(newElement);
    }
    announceHealth(){
        let newElement= document.createElement('p');
        newElement.innerHTML = `Current Health: ${this.health}`;
        const parentDiv = document.getElementById('thering');
        parentDiv.appendChild(newElement);
        
    }
    fight(enemy){
        const weaponsAvail= (Object.keys(this.weapon));
        let randomIndex = Math.floor(Math.random() * weaponsAvail.length);
        let currentWeapon = weaponsAvail[randomIndex];
        console.log(`Current weapon: ${currentWeapon}, Hit Points: ${this.weapon[currentWeapon]}`);
        enemy.health -= this.weapon[currentWeapon];
        console.log(`${enemy.name} got hit by ${currentWeapon}! His health is now at ${enemy.health} `)
      
    }
}

const newHero = new Hero('Dougie the donut');
console.log(newHero);


/////////////////OUR ENEMY///////////////////
class Enemy {
    constructor(name, health = 100, weapons, catchPhrases){
        this.name = name;
        this.health = health;
        this.weapons = weapons || {
            pepperoniStars: 5,
            cheeseGrease: 10    
        },
        this.catchPhrases = catchPhrases || ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer'];
    }
    talkSmack(){
        let randomIndex = Math.floor(Math.random() * this.catchPhrases.length);
        console.log(this.catchPhrases[randomIndex])
    }
    announceHealth(){
        console.log(`Current Health: ${this.health}`)
    }
    fight(enemy){
        const weaponsAvail= (Object.keys(this.weapons));
        let randomIndex = Math.floor(Math.random() * weaponsAvail.length);
        let currentWeapon = weaponsAvail[randomIndex];
        console.log(`Current weapon: ${currentWeapon}, Hit Points: ${this.weapons[currentWeapon]}`);
        enemy.health -= this.weapons[currentWeapon];
        console.log(`${enemy.name} got hit by ${currentWeapon}! His health is now at ${enemy.health} `)
    }
}

const newEnemy = new Enemy('Pizza Rat');
console.log(newEnemy);


////////////DOM//////////

const talkSassButton = document.getElementById('talksass');
talkSassButton.addEventListener('click', ()=> newHero.talkSass() );

const talkSmackButton = document.getElementById('talksmack');
talkSmackButton.addEventListener('click', ()=> newEnemy.talkSmack() );

const healthDougieButton = document.getElementById('healthDoug');
healthDougieButton.addEventListener('click', ()=> newHero.announceHealth() );

const healthRatButton = document.getElementById('healthRat');
healthRatButton.addEventListener('click', ()=> newEnemy.announceHealth() );

const fightDougButton = document.getElementById('fightDoug');
fightDougButton.addEventListener('click', ()=> newEnemy.fight(newHero));


const fightRatButton = document.getElementById('fightRat');
fightRatButton.addEventListener('click', ()=> newHero.fight(newEnemy));





//////////FIGHT///////////////

// const winner = () => {
//     if (newEnemy.health <= 0){
//         console.log( `The winner is ${newHero.name}!!!!`)
//         return true;
//     }
//     if (newHero.health <= 0) {
//         console.log(`The winner is ${newEnemy.name}.... boo`)
//         return true;
//     }
//     return false;
// }



// const playGame = () => {
//    while (winner() === false){
//        newHero.fight(newEnemy);
//        newEnemy.fight(newHero);
//    }
// }

// playGame();
