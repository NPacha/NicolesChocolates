
const house = {
    doors: 6,
    color: 'tan',
    location: 'denver',
    isBig: false,
    windows: 9,

}; //This is an object literal (no data inside)


// for (let i = 0; i <= house.doors; i++){
//     console.log(i);
// }

// console.log(house);
// console.log(house.location); //This is dot notation

// house.location = "wroclaw";
// // console.log(house);

// house.cats = 2;
// // console.log(house);
// house.hasGarden = true;
// // console.log(house);

// house.hasGarden = false;
// console.log(house);

if (house.hasGarden){
    console.log("Has Garden")
} else {
    console.log("no garden");
}

for (let i = 0; i < 2; i++){
    house[i] = i;
}

for (let key in house){
    console.log(house[key])
}

// console.log(house)
// console.log(house["1"]);