// //Syntax
// //{} curly braces define the object
// // : separates the key from the value
// // , separates each key-value pair
// // 

// //Me, Me, Me
// //1. 2.
// const me = {
// firstName: "Nicole",
// lastName: "Pacha",
// age: 28,
// email: "nicolekpacha@gmail.com",
// };

// console.log(me);
// //3.
// console.log(me.firstName)
// //4.
// me.age = 1000;
// //5.
// console.log(me.age)
// //6.
// me["place of residence"]= "Denver";
// console.log(me);
// //7.
// console.log(me["place of residence"]);

// //Fancy Greeting

// const fancyGreeting = (object) => {
// console.log(`Greetings, ${me.firstName} ${me.lastName}`)
// }

// fancyGreeting(me);

// //Slimer
// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
//  }

//  //1.
//  console.log(monster.name);
//  //2.
//  monster.type = 'creature';
//  console.log(monster);
//  //3.
//  monster.age = 6;
//  console.log(monster);
 

 //Ogres
 const adventurer = {
     name: 'Adam',
     hitpoints: 100,
     damage: 15, 
     healthregen: "apple"
 }

 const ogre = {
     name: 'Ollie',
     hitpoints: 80,
     damage: 10,
 }

// Did Ogre hit the adventurer? 
// If yes, then subtract 10 points from the adventurers hit points
// If not, do nothing. 
// Did the adventurer hit the ogre? 
// If yes, then subtract 15 points from the hitpoints of the Ogre

let hitOptions = [true, false];

const randomHit = () => {
    let hitOpponent = hitOptions[Math.floor(Math.random() * 2)];
    return hitOpponent;
}


const ogreFires = () => {
    if (randomHit() === true){
    adventurer.hitpoints = adventurer.hitpoints - ogre.damage;
    console.log(`Adam was striked hitpoints left: ${adventurer.hitpoints}`) }
    
        console.log ("Ogre missed")
    
}




const adamFires = () => {
    if (randomHit() === true){
    ogre.hitpoints = ogre.hitpoints - adventurer.damage;
    console.log(`Ollie was striked hitpoints left: ${ogre.hitpoints}`)
    } else {
        console.log ("Adam missed")
    }
}


const battle = () => {
    while(adventurer.hitpoints > 0 && ogre.hitpoint > 0){
        ogreFires();
        adamFires();
        }
    }


console.log(randomHit() + "here I am");
console.log(ogreFires() + "here I am!");






// //Cat Combinator
// //1. Mama cat

// const cat1 = {
//     name: 'Fluffy',
//     breed: 'Siamese',
//     age: 1,
// }

// console.log(cat1.age);
// console.log(cat1.breed);

// //2. Papa cat
// const cat2 = {
//     name: 'John',
//     breed: 'Orange',
//     age: 1,
// }

// //3. Combine
// const combineCats = (mama, papa) => {
//     let cats = {};
//    let name = `${mama.name}-${papa.name}`;
//    let breed = `${mama.breed}-${papa.breed}`;
//    let age = mama.age;
//    cats.name = name;
//    cats.breed = breed;
//    cats.age = age;
//    return(cats);

// }

// combineCats(cat1,cat2);


// let combineCats1 = combineCats(cat1, cat2);
// let combineCats2 = combineCats(cat1, cat2);
// let combineCats3 = combineCats(combineCats1, combineCats2);
// console.log(combineCats1);
// console.log(combineCats2);
// console.log(combineCats3);


// //Cat Brain Bender

// console.log(combineCats(combineCats1, combineCats3));

