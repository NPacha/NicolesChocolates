const house = {
    doors: 6,
    windows: 9,
    furniture: ["chair", "couch"]
};

console.log(house.windows);

for (let i = 0; i < 2; i++) {
    // house["key" + i] = i;
    house[i] = i;
}
// console.log(house["1"]);
const myWindow = "windows";
console.log(house[myWindow]);

for (let x in house) {
    console.log(house[x]);
}

// house.windows = 30;
// house.hasGarden = true;
// house.hasGarden = false;
// console.log(house.hasGarden);

// if (house.hasGarden) {
//     console.log("Has Garden")
// } else {
//     console.log("no garden");
// }

// console.log(house.furniture[0]);




// for (let i = 0; i <= house.doors; i++) {
//     console.log(i);
// }

