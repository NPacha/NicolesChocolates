// const adventurer = {
//     name: "Sharon",
//     hitpoints: 250,
//     power: 30,
//     belongings: ['great sword', 'health potion', 'advil'],
//     companion: {
//         name: "Mimi",
//         type: "Screaming Dog",
//         companion: {
//             name: "Sungeun",
//             type: "RDN",
//             belongings: ['bread', 'stethoscope', 'notepad', 'muji pen']
//         }
//     },
//     attack(enemy) {
//         enemy.hitpoints = enemy.hitpoints - this.power 
//         console.log(`I have attacked ${enemy.name} and they now have ${enemy.hitpoints}`)
//         if(enemy.hitpoints < 0) {
//             console.log(`${enemy.name} has been defeated`);
//         }
//     },
//     level: 10
// };

// const adventurer2 = {
//     name: "Flumples",
//     hitpoints: 3,
//     belongings: ['Rune scimitar', "Guthix rest", "M4A1-S", "cheat codes"],
//     companion :{
//         name: "nintendog",
//         type: "pokemon",
//         companion :{
//             name: "Companion is not defined",
//             type: "Syntax Error",
//         }
//     }
// };

// adventurer.attack(adventurer2);
// adventurer.attack(adventurer2);

//console.log(adventurer.belongings[0]);

// // using for of loop 
// for (let item of adventurer.belongings) {
//     console.log(item);
// };
// //using regular for loop
// for (let i = 0; i <adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// };

// console.log(adventurer.companion.companion.belongings[0]);


// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"],
// ];

// for (let row of foo) {
//     console.log(row)
//     for (let element of row) {
//         console.log(`${element}`)
//     }
// };

/*
1st loop
- 1st get the first console log which will show us the first row
-2,3,4th which will show us the current element of the inner loop
- SO WHAT SHOULD PRINT is the first row, and then the elements in that first row, then the second row and then its elements, and then the 3rd row and its elements. The outer loop runs, which prints the first row/array and then the inner loop runs before going to the next row, which is why the elements of the first row print before moving onto the next iteration and printing the second array/row. Always do the outer loop then the inner loop, then repeat outer/inner then outer/inner and so on. 
*/


// const summonBird = (name) => {
//     return {
//         name: name,
//         color: 'blue'
//     }
// };

// console.log(summonBird('Exodia').color.split('')[0]);

// const createBag = ()=>{
//     return ['apple','banana','pear'];
// };

// console.log(createBag()[1]);

// const arr = createBag();
// arr[0] = arr[0].split('')
// arr[1] = arr[1].split('')
// arr[2] = arr[2].split('')
// console.log(arr);

//or you can do for of loop
// for (let element of arr) {
//     element = element.split('')
// }

const generateSpell = (spellName)=>{
    return ()=>{
        console.log(spellName);
    }
};

generateSpell('fireball')(); //need two parentheses cause theres 2 functions being called. if you dont do the second set of (), youre not calling the function inside of generateSpell

const adventurer = {
    name: "Sharon",
    hitpoints: 250,
    power: 30,
    belongings: ['great sword', 'health potion', 'advil'],
    companion: {
        name: "Mimi",
        type: "Screaming Dog",
        companion: {
            name: "Sungeun",
            type: "RDN",
            belongings: ['bread', 'stethoscope', 'notepad', 'muji pen']
        }
    },
    attack(enemy) {
        enemy.hitpoints = enemy.hitpoints - this.power 
        console.log(`I have attacked ${enemy.name} and they now have ${enemy.hitpoints}`)
        if(enemy.hitpoints < 0) {
            console.log(`${enemy.name} has been defeated`);
        }
    },
    level: 10
};

adventurer.spell = generateSpell('Obliterate'); // this will assign a new key called spell in my adventurer object and it will have the value of generateSpell which prints obliterate. So in my adventurer object, spell: obliterate

adventurer.spell();
console.log(adventurer) // for spell, prints function (anonymous) because the function in generateSpell had no name, it was just return blahblah

const arrs = [() => {console.log('hello world')}];
arrs[0]();
