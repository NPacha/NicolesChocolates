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
    fight(){
        console.log('I\'m ready to rumble')
    }
}

const newHero = new Hero('Dougie the donut');
console.log(newHero);

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
        console.log(`Current Healt: ${this.health}`)
    }
    fight(){
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
    }
}

const newEnemy = new Enemy('Pizza Rat');
console.log(newEnemy);