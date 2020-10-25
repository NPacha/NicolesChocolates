
// const getItem = (item_placeholder) => {
// //     return item_placeholder;
// // }

// // const setItem = () => {
// //     const item = 'spicy meatball';
// //     return getItem(item);
// // }


// // console.log(setItem());



// const returnName = () => {
//     return 'Matt';
// }

// const returnGreeting = () => {
//     return `Hello ${returnName()}`;
// }

// // console.log(returnGreeting());


// const firstName = () => {
//     return 'Madeline';
// }

// const fullName = () => {
//     // return your firstName (using the function) + your last name
//     return `${firstName()} O'Moore`;
// }

// // console.log(fullName());


// // for (let i = 0; i < 9; i++) {
// //     let name = "Madeline";
// //     console.log('Inside the block: ', i);
// // }

// // console.log(name);

// const countdown = (num) => {
//     if (num != 0) {
//         console.log(num);

//         countdown(num - 1);
//     } else {
//         return
//     }
// }

// countdown(5);


const closure = () => {
    let privateVal = 5
    const innerFunc = () => {
        privateVal++
        // we would normally not do this because we want to keep the value private
        console.log(privateVal)
        // return privateVal > 10
    }
    return innerFunc;
}

const generatedFunc = closure();
generatedFunc();
generatedFunc();