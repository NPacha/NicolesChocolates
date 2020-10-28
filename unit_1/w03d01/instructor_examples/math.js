let cartTotal = 16.10000.toFixed(0);
// let roundedUpCart = Math.ceil(cartTotal)
// let donation = (roundedUpCart - cartTotal).toFixed(3);
// console.log(cartTotal)

const myArray = [12, 0, 45, 10];

// destructure the array

// console.log(Math.max(12,0,45,10));
console.log(Math.max(...myArray));

const arrayOne = [1, 2, 3];
const arrayTwo = [3, 4, 5];
let newArr = [...arrayOne, ...arrayTwo];
console.log(newArr);

