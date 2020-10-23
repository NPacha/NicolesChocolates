//PART 1:HTML & CSS//

//Rank I Give Myself After Watching the Videos:
//4- I feel pretty good about the material, but some extra review would help

//PART 2: JavaScript Reps//

///////////////////////////Easy Going////////////////////////////

for(let i = 1; i <= 20; i++){
    console.log(i);
}
    //Commit message recorded on terminal to "Easy Going answered"

///////////////////Get Even///////////////////////////

for (let i = 0; i <= 200; i+= 2){
    console.log(i);
}
    //Commit message recorded on terminal to "Get Even answered"

////////////////////////Fix Buzz///////////////////////////

for (let i = 1; i <= 100; i++){

if ((i % 3) === 0){
    if ((i % 5) === 0) {
        console.log("FizzBuzz")
    } else {console.log("Fizz");}
} else if ((i % 5) === 0){
    console.log("Buzz");
} else {
    console.log(i);
}
    
}

////////////////////////Wild Wild Life/////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//1.
plantee[2]= 5001;
console.log(plantee);

//2.
wolfy[3]= "Gotham City";
console.log(wolfy);

//3.
dart.push("Hawkins");
console.log(dart);

//4.
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

///////////////////////Yell at the Ninja Turtles////////////////////
//1.
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
//2.
for (const string of ninjaTurtles){
    console.log(string.toUpperCase());   
}
console.log(ninjaTurtles)

/////////////////////Methods, Revisited/////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//Index of Titanic
let titanicIndex = favMovies.indexOf('Titanic');
console.log(titanicIndex);
//1.
// favMovies.sort();
// console.log(favMovies);
//This method did permanently alter the array, it does mutate the array instead of copy it. 

//2. 
favMovies.pop();
console.log(favMovies);


//3.
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//4.
favMovies.reverse();
console.log(favMovies);

//5.
favMovies.shift();
console.log(favMovies);

//6.
favMovies.unshift('Amelie');
console.log(favMovies);

//7.
console.log(favMovies.indexOf('Django Unchained'));
favMovies.splice(15, 1, 'Avatar');
console.log(favMovies);

//8.
let middleIndex = (favMovies.length-1) / 2;
console.log(Math.round(middleIndex));
let endIndex = favMovies.length - 1;
console.log(endIndex); //End index is 18, we need to slice one number added to this
favMovies.slice(9, 19);
console.log(favMovies); //Slice did not permanently alter our array

//9. 
let slicedArray = favMovies.slice(9, 19);
console.log(slicedArray);

//10. COME BACK TO THIS QUESTION!!! 
console.log(favMovies);

//The value we get when we look for the index of something that is not in the array is -1. ***PLEASE NOTE: This only worked for me when I comment out the sort method in question #1. If I sort the array, because it permanently affects the array, I still see Fast and Furious in the array and I am able to find the index. 
console.log(favMovies.indexOf('Fast and Furious')); 

///////////////////Where is Waldo///////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
//Remove Eggbert
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);   
//Change "Neff" to "No One"
let firstArray = whereIsWaldo[1];
firstArray[2] = "No One"
console.log(whereIsWaldo);
//Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);

////////////////////Excited Kitten/////////////////////

const message = "Love me, pet me! HSSSSS";
const otherMessage = ["...human... why you taking pictures of me?...",
                    "...the catnip made me do it...",
                    "...why does the red dot always get away..."
];


for (let i = 1; i <= 20; i++){ 
    let randomIndex = Math.floor(Math.random() * otherMessage.length);
    if (i % 2 === 0){
        console.log(i + " " + otherMessage[randomIndex])
    } else {console.log(i + " " + message)}
};

//////////////////////Find the Median/////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let isOddArr = (nums.length % 2 === 1);

    isOddArr ? console.log(nums[(Math.ceil(nums.sort().length/2))-1]) : console.log( (nums[(nums.sort().length/2)-1] + nums[(nums.sort().length/2)])/2
);


//**Initial if else statement below, decided to challenge myself with ternary operators instead above
    // if(nums.length % 2 === 1){
    //   let dividedArr = (nums.sort().length/2);
    //   let median = Math.ceil(dividedArr);
    //   console.log(nums[median - 1]);
      
    // } else {
    //     let dividedArr = (nums.sort().length/2);
    //         let firstMiddleValue = nums[dividedArr-1];
    //         let secondMiddleValue = nums[dividedArr];
    //         let median = (secondMiddleValue + firstMiddleValue)/2;
    //     let median = nums[dividedArr - 1]

    // }

