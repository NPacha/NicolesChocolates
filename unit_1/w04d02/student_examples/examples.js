// const teachers = ['Madeline', 'Nando', 'Bruno', 'Arthur'];
// teachers.push('Andrea');
// console.log(teachers)

// //Higher Order Array Method
// const myFunc = (item) => console.log(item)
// teachers.forEach(myFunc)


const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Butter Pecan'];

const updatedIceCreams = iceCreams.map((iceCream)=>{
    return iceCream + ' Ice Cream'
})

// console.log(updatedIceCreams)

const allIceCreams = iceCreams.reduce((acc, iceCream)=>{
    return acc + iceCream + ',';
},
'')

console.log(allIceCreams)

// '' =====> '' +Vanilla + ',' =====> Vanilla, 
// 'Vanilla,' =====> 'Vanilla,' + 'Chocolate' + ',' =========> Vanilla, Chocolate,

//Bracket notation for objects
const obj = {};
const iceCream = 'Vanilla'
obj.iceCream= true;
obj[iceCream] = true;