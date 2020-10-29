

//Declare an object to store information about the user
let landscaper = {
    name: null,
    money: 0,
    toolsAvailable: ['teeth'],
}
    
//Declare an object to store information about the tools
const tools = {
            teeth: {
                cost: 'free',
                earns: 1
            },
            scissors: {
                cost: 5,
                earns: 5
            },

            pushLawnmower: {
                cost: 25,
                earns: 50
            },

            newLawnmower: {
                cost: 250,
                earns: 100
            },

            students: {
                cost: 500,
                earns: 250
            } 
}
//Declare a variable to store the amount of money needed to win the game
const winningAmount = 1000;
//Declare variable to store the current day we are on
let day = 1;

//Welcome Message
const playerName = prompt("Hello Landscaper! Ready to get to work?", "Type name to get started");

landscaper.name = playerName;

alert(`Okay ${playerName}, here\'s the deal. We need to mow some lawns and make some money. The more money you have, the better tools you can buy, the more money you can make! `);
alert(`Right now, all you have is your ${landscaper.toolsAvailable}, and you have ${landscaper.money}. Lets get started!`)


const mowLawnTeeth = () => {
    while (landscaper.money <= 5){
    alert(`Day ${day}. Total dollars: ${landscaper.money} Click ok to mow the lawn with your ${landscaper.toolsAvailable}`)
    landscaper.money += tools.teeth.earns;
    day++ 
    }
}

mowLawnTeeth();

const buyTool = () => {
    if (landscaper.money === 5){
        alert()
    }

}

//If the only tool you have is your teeth
if (landscaper.toolsAvailable[0] === 'teeth') {
    //you will make $1 mowing the lawn in 1 day
}
    //add $1 daily to the amount you have saved
//Continue mowing the lawn daily with your teeth until you have enough money to buy another tool

//Once you make $5, you can buy a pair of scissors
    //you have $5 less 
//Or you can continue to cut grass with your teeth

//If you have scissors as a tool
    //you will make $5 mowing the lawn in 1 day
        //add $5 daily to the amount you have saved
    //Continue mowing the lawn daily with your teeth until you have enough money to buy another tool


    //Once you make $25, you can buy an old lawnmower for $25
        //you have $25 less in your saved amount
    //Or you can continue to cut grass with the scissors

//If you have old lawnmower as a tool
    //You will make $50 cutting the lawn in 1 day
    //After each day, add $50 to your savings
    //Continue mowing the lawn daily until you have enough money to buy another tool

//Once you make $250, you can buy a new lawnmower for $250
 //take away $250 from your savings
 //Or you can continue to cut grass with the old one

 //If you have a new lawnmower
    //You will make $100 cutting the lawn in 1 day
    //After each day, add $100 to your savings
    //Continue mowing the lawn until youhave money to buy another tool

    //Once you make $500, you can hire a team of students
    //take away $500 from your savings
    //Or continue as you were mowing the lawn with the same tool

    //If you have a team of students
        //You will make $250 cutting the lawn each day
        //After each day add $250 to your savings
        //Continue cutting the lawn

    //If your savings amount reaches $1000 and you have a team of students
    //you have won! You are a brilliant business person! 