// const adventurer = {
//     name: "Nicole",
//     hitpoints: 225,
//     belongings: [
//         {
//             name: "excalibur",
//             price: 100000
//         },
//         {
//             name: "potion of healing",
//             price: 250
//         },
//         {
//             name: "tums",
//             price: 20
//         }
        
//     ],
//     //es6 method
//     getPrice(name){
//         let selectedItem;
//         for(let belonging of this.belongings){ //each belonging is an individual object inside of the array of objects(.belongings)
//                 if(belonging.name.trim().toLowerCase() === name.trim().toLowerCase()){
//                     selectedItem = belonging
//                 }
//         }
//         return selectedItem.price

// }
// }

// console.log('This is the price of the potion of healing:'+ adventurer.getPrice('potion of healing'))

// for (let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i].price);
// }

// for (let i = 0; i < adventurer.belongings.length; i++){

//     if(adventurer.belongings[i].name === "excalibur"){
//         console.log(adventurer.belongings[i].price)
//     }
   
// }

// console.log(adventurer.belongings[0].price);


// adventurer.belongings.push({
//     name: "Mjolnir",
//     price: 999999

// }); 



// console.log(adventurer.belongings.length); 

// for (let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongsings[i])
// }

// const dog = {
//     name:'Spike',
//     from: 'Rugrats'
//     toys: [
//         {
//             name: 'binky'
//         },
//         {
//             name: 'bone'
//         },
//         {
//             name: 'ball'
//         }
//     ]
// }

// const cat = {
//     name: 'Kitt',
//     companions: [
//         {
//             name: 'Spike',
//             companions: [
//                 {
//                     name: 'Bruce'
//                 }
//             ]
//         }
//     ]
// }

// cat.companions[0].companions[0];

// Object.keys(cat)[0];//will give you all of the keys at index 0


//TIC TAC TOE GAME
//to see if someone won you need to loop over the array

// const arr = [
//     [[],[],[]],
//     [[], [], []],
//     [[],[], []]
// ]

// arr[0,0]

const adventurer = {
    name: 'Nicole',
    hitpoints: 300,
    power: 20,
    belongings: ['magic potion', 'light saber', 'coffee'],
    companion: {
        name: 'Miko',
        type: 'Wolf Dog',
        companion: {
            name: 'Sam the Stick',
            type: 'wood',
            belongings: ['beetles', 'moss', 'dirt']
        }
    },
    attack(enemy) {
        enemy.hitpoints = enemy.hitpoints - this.power;
        console.log(`Ì have hit the ${enemy.name}! They have ${enemy.hitpoints} left`);
        if (enemy.hitpoints < 0){
            console.log(`${enemy.name} has been defeated`);
        }

    }, 
    level: 12
};

const adventurer2 = {
    name: 'John',
    hitpoints: 300,
    power: 15,
    belongings: ['sword', 'bow and arrow', 'advil'],
    companion: {
        name: 'Felix',
        type: 'dragon',
        companion: {
            name: 'Moe the mouse',
            type: 'rodent',
            belongings: ['leaf', 'cheese', 'cape']
        }
    }, 
    attack(enemy) {

    }, 
    level: 10

}

console.log(adventurer.attack(adventurer2));