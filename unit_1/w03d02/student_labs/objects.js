//Syntax
//{} curly braces define the object
// : separates the key from the value
// , separates each key-value pair
// 

//Me, Me, Me
//1. 2.
const me = {
firstName: "Nicole",
lastName: "Pacha",
age: 28,
email: "nicolekpacha@gmail.com",
};

console.log(me);
//3.
console.log(me.firstName)
//4.
me.age = 1000;
//5.
console.log(me.age)
//6.
me["place of residence"]= "Denver";
console.log(me);
//7.
console.log(me["place of residence"]);

//Fancy Greeting

const fancyGreeting = (object) => {
console.log(`Greetings, ${me.firstName} ${me.lastName}`)
}

fancyGreeting(me);

//Slimer
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
 }

 //1.
 console.log(monster.name);
 //2.
 monster.type = 'creature';
 console.log(monster);
 //3.
 monster.age = 6;
 console.log(monster);
 

 //Ogres
 const adventurer = {
     name: 'Adventure Adam',
     hitpoints: 100,
     damage: 15, 
     healthregen: "apple"
 }

 const ogre = {
     name: 'Ollie',
     hitpoints: 80,
     damage: 10,
 }

//Did Ogre hit the adventurer? 
//If yes, then subtract 10 points from the adventurers hit points
//If not, do nothing. 
//Did the adventurer hit the ogre? 
//If yes, then subtract 15 points from the hitpoints of the Ogre

const players = ['Adam', 'Ollie'];
const whoWasHit= players[Math.floor(Math.random() * 2)];


const ogreHits = () => {
    if (whoWasHit === 'Adam'){
    ogre.hitpoints = ogre.hitpoints - adventurer.damage;
    console.log(`Adam was striked hitpoints left: ${adventurer.hitpoints}`)
    } else {
        console.log ("Ogre missed")
    }
}



const adamHits = () => {
    if (whoWasHit === 'Ollie'){
    adventurer.hitpoints = adventurer.hitpoints - ogre.damage;
    console.log(`Ollie was striked hitpoints left: ${ogre.hitpoints}`)
    } else {
        console.log ("Adam missed")
    }
}


const battle = () => {
    while(adventurer.hitpoints > 0){
        ogreHits();
        adamHits();
        }
    }


//Cat Combinator
//1. Mama cat

const cat1 = {
    name: 'Fluffy',
    breed: 'Siamese',
    age: 10,
}

//2. Papa cat
const cat2 = {
    name: 'John',
    breed: 'Orange',
    age: 5,
}

//3. Combine
const combineCats = (mama, papa) => {
console.log(mama, papa);
}

combineCats(cat1, cat2)






