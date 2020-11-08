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