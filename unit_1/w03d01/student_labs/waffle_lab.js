//Do we have waffles? if statement- true or false
//If yes, grab a waffle from the freezer and conitnue to toasting-- boolean
//If no, have another dessert. --else, string data type
//Put the waffle in the toaster, wait for 2 mins for the waffle to toast (loop )
//In the meantime, grab a plate from the cupboard- assertion, boolean
//Grab the toppings you want for the waffle- assertion, boolean
//Toppings include strawberries, bananas, whipped cream, nutella -- array
//Once toast is done, remove the waffle, put it on plate-- if statement, assertions
//Choose which toppings you want. array
//Add strawberries, nutella, bannanas, and whipped cream. assertion, boolean
//grab a napkin and enjoy! assertion, boolean

const checkForWaffles = prompt("Do you want waffles?", "yes/no");
const toastTime = 120;

const toastWaffle = () => {
if (checkForWaffles === 'yes'){
    alert("Great! Let's toast it up!");
    for (let i = 0; i <= 120; i++){
        console.log(i);
    };
    alert("Ding ding! Your waffle is toasted!")
    return true;
    } else {
        alert("Alirght, make another dessert because this is the land of waffles")
        return false;
    }
}
toastWaffle();

const toppings= ['strawberries', 'bananas', 'whipped cream', 'nutella'];
const myToppings= [];
for (let i = 0; i < toppings.length; i++){
let toppingChoice = prompt("Do you want any " + toppings[i], "yes, no");
if (toppingChoice === "yes") {
    myToppings += toppings[i];
}

}

alert(myToppings);



// const action = prompt("Do you want a waffle?", "yes/no");

// while (action !== "stop") {
//     if (action === "no"){
//         prompt("why are you here? Get lost", "type stop");
//         action = prompt;
//     } else if (action === "yes"){
//         prompt("Do you want to eat one?", "yes/no")
//         }
        
// }
    
// if (action === "yes"){
//     prompt("Do you want to eat one?", "yes/no")
//     }


