/////////////OUR HERO////////////////
class Hero {
    constructor(name, health = 100, weapons, catchPhrases){
        this.name = name;
        this.health = health;
        this.weapon = weapons || {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = catchPhrases || ['i\'m fresher than day old pizza',
        'you can\'t count my calories']
    }
    talkSass(){
        let randomIndex = Math.floor(Math.random() * this.catchPhrases.length);
        console.log(this.catchPhrases[randomIndex])
    }
    announceHealth(){
        console.log(`Current Health: ${this.health}`)
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

//////////WALKING DOWN THE STREEET///////////
//1.
newHero.talkSass();
//2.
newEnemy.talkSmack();
//3.
newHero.announceHealth();
//4.
newEnemy.announceHealth();

//////////FIGHT///////////////
//1.
newEnemy.fight(newHero);
//2.
newHero.fight(newEnemy);
//3.
newHero.announceHealth();
newEnemy.announceHealth();