// const printBoo = () => {
//     console.log('Boo');

// }

// printBoo();

// const sum = (num1, num2) => {
//     console.log(num1 + num2);
// }

// sum(10, 10);

// const calculateArea = (num1, num2) => {
//     return num1 * num2;
// }

// calculateArea (3, 4);

// const minusOne = (calculateArea) => {
// return (calculateArea - 1);
// }

// minusOne(calculateArea);

// console.log(minusOne(calculateArea));


// minusOne(100);
// minusOne(Infinity);

// const makeSentence = (string1, string2, string3) => {
//     console.log(`Oh boy, do ${string1} ${string2} ${string3} or what?`);
// }

// makeSentence('I', 'want', 'chimichangas');

// const returnName = () => {
//     return 'Nicole';
// }

// const returnGreeting = () => {
//     return `Hello ${returnName()}`;
// }

// console.log(returnGreeting());

// const firstName = () => {
//     return 'Nicole';
// }

// const fullName = () => {
//     return `${firstName()} Pacha`;
// }

// console.log(fullName());


// for (let i = 0; i <= 5; i++){
//     let name = 'Nicole';
//     console.log( `Inside of the block: ${i}`);
//         }
//         console.log(name);

        const countdown = (num) => {
            if(num != 0){
                console.log(num);
                countdown(num - 1 );
            } else {
                return
            }
        }
            countdown(5);