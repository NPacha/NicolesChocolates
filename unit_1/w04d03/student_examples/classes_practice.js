class Monsters {
    constructor(name, weapon, damage, hitPoints, magicPower, armor, habitat ){
        this.name = name;
        this.weapon = weapon;
        this.damage = damage;
        this.hitPoints = hitPoints;
        this.magicPower = magicPower;
        this.armor = armor;
        this.habitat = habitat;
    }
    attack(character){
        character.hitPoints = character.hitPoints - this.damage;
        console.log(`${this.name} has attacked ${character.name} with ${this.weapon}, and now ${character.name} is dead. The ${character.name} has ${character.hitPoints} hitpoints left. It did ${this.damage} damage.`)
    }
    introduceSelf(){
        console.log(`Hello traveler, my name is ${this.name}, and I come from the ${this.habitat}`)
    }

    takeWeapon(character){
        this.weapon += ' ,' + character.weapon;
        console.log(this.weapon);
    }

}

const SwampCreature = new Monsters('Jim', 'club', 5, 70, 5000, 'no armor', 'the stinking Mire');
const mountainLion = new Monsters('Max', 'claws', 6, 80, 6000, 'steel suit', 'enchanted forest');
SwampCreature.introduceSelf();
mountainLion.attack(SwampCreature);
mountainLion.takeWeapon(SwampCreature);