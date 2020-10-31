//////DATATYPES REFRESHER/////
// // 1. A light switch that can be either on or off.
// => datatype: boolean 
// => data structure example: const lightOn = true; 
// // 2. A user's email address.
// => datatype: string 
// => data structure example: const emailaddress = 'nicolekpacha@gmail.com'; 
// // 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// => datatype: object 
// => data structure example: const spaceship = {
//     parts: ['hull', 'laser blaseter', 'tractor beam', 'warp drive']
// }
// // 4. A list of student names from our class.
// => datatype: array
// => data structure example: const studentNames = ['Nicole', 'Sawyer', 'James'] 
// // 5. A list of student names from our class, each with a location.
// => datatype: array of objects
// => data structure example: const students = [
//     {
//         name: 'Nicole',
//         location: 'Denver',
//     },
//     {
//         name: 'Sawyer',
//         location: 'NY'
//     },
//     {
//         name: 'James',
//         location: 'Chicago'
//     }
// ]
// // 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// => datatype: array of objects
// => data structure example: => const students = [
//     {
//         name: 'Nicole',
//         location: 'Denver',
            // favMovies: ['ameri', 'sfda']
//     },
//     {
//         name: 'Sawyer',
//         location: 'NY',
            // favMovies: ['asf','asdf']
//     },
//     {
//         name: 'James',
//         location: 'Chicago'
            // favMovies: ['asf','asdf']
//     }
// ]

/////////////////TAKE IT EASY/////////////////
//1.
const rainbow = ['red', 'green', 'orange', 'yellow', 'purple', 'blue']

//2.
for (let i = 0; i < rainbow.length; i++){
if(rainbow[i] === 'blue'){
    console.log(rainbow[i]);
}
}

//3.
const Nicole = {
    favFood: 'Italian',
    hobbies: ['guitar', 'hiking', 'spending time with family'],
    hometown: 'Denver',
    favDataType: 'Objects of course'
}
//4.
console.log(Nicole.hobbies)

