// // Me Me Me
const me = {
    firstName: "Madeline",
    lastName: "Omoore",
    age: 29,
    email: "m@gmail.com"
}

// console.log(me.firstName);
// age = 1000;
// console.log(me.age);
// me["place of residence"] = "LA";
// console.log(me['place of residence'])

// Fancy Greeting
// const fancyGreeting = (obj) => {
//     console.log(obj.firstName);
// }

// fancyGreeting(me);

// Slimer
// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
// }

// console.log(monster.name);
// monster.type = "creature";
// monster.age = 6;
// console.log(monster);

// Ogre

// const adventurer = {
//     name: "Simon",
//     hp: 10
// }

// const ogre = {
//     name: "Ogre",
//     hp: 10
// }

// const oAttack = () => adventurer.hp--;
// const aAttack = () => ogre.hp--;

// const randomTurn = () => Math.floor(Math.random() * 2);

// const startBattle = () => {
//     while (adventurer.hp >= 1 && ogre.hp >= 1) {
//         let randomPlayerTurn = randomTurn();
//         if (randomPlayerTurn === 0) {
//             oAttack();
//         } else {
//             aAttack();
//         }
//     }
//     const winner = adventurer.hp === 0 ? "adventurer" : "ogre";
//     return `The winner is: ${winner}`;
// }

// console.log(startBattle());



// Cat Combinator

const cat1 = {
    name: "Teeny",
    breed: "Calico",
    age: 2
}

console.log(cat1.age, cat1.breed);

const cat2 = {
    name: "Tiny",
    breed: "Rag Doll",
    age: 4
}

const combineCats = (mama, papa) => {
    // console.log(mama, papa);
    return {
        name: `${mama.name} ${papa.name}`,
        age: 1,
        breed: `${mama.breed} ${papa.breed}`,
    }
}

console.log(combineCats(cat1, cat2));
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));
