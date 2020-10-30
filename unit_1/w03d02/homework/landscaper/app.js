const pickTool = () => {
    let pickedTool = prompt(`Tools Available: ${landscaper.toolsAvailable} \n Type name of tool you want to use`, `${landscaper.toolsAvailable}`);
    for (let i = 0; i < tools.length; i++){
                console.log(tools[i].name);
                if (tools[i].name === pickedTool){
                    currentToolObj = tools[i];
                }
            }
            console.log(currentToolObj);
            
       }

             

const buyTool = () => {
    console.log(landscaper.toolsAvailable.includes('scissors'));
    if (landscaper.money >= 5 && landscaper.money < 25 && landscaper.toolsAvailable.includes('scissors') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy some ${tools[1].name} for ${tools[1].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= tools[1].price;
            //Add new tool to the available tools
            landscaper.toolsAvailable.push(tools[1].name);
            console.log(landscaper);
            pickTool();
            mowLawn();
        } else {
            alert(`Okay, suit yourself!`);
            mowLawn();
        }
    } else if (landscaper.money >= 25 && landscaper.money < 250 && landscaper.toolsAvailable.includes('push lawnmower') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy a ${tools[2].name} for ${tools[2].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= tools[2].price;
            landscaper.toolsAvailable.push(tools[2].name);
            console.log(landscaper);
            pickTool();
            mowLawn();
        } else {
            alert(`Okay, suit yourself!`);
            mowLawn();
        }
    } else if(landscaper.money >= 250 && landscaper.money < 500 && landscaper.toolsAvailable.includes('new lawnmower') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy some ${tools[3].name} for ${tools[3].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= tools[3].price;
            //Add new tool to the available tools
            landscaper.toolsAvailable.push(tools[3].name);
            console.log(landscaper);
            pickTool();
        } else {
            alert(`Okay, suit yourself!`);
            mowLawn();
        }
        
    } else if(landscaper.money >= 500 && landscaper.money < 1000 && landscaper.toolsAvailable.includes('students') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy some ${tools[4].name} for ${tools[4].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= tools[4].price;
            //Add new tool to the available tools
            landscaper.toolsAvailable.push(tools[4].name);
            console.log(landscaper);
            pickTool();
        } else {
            alert(`Okay, suit yourself!`);
        }

    }
    

}

const winner = () => {
    if (landscaper.money >= winningAmount){
         alert(`You win! You amazing business person you!`);
         return true;
        
    }
    return false;
}

const mowLawn = () => {
    
        let mowStart = prompt(`Day: ${day}. \n Tool you are using: ${currentToolObj.name} \n Amount of money you have: ${landscaper.money} \n Type 'go' to mow lawn and make money. \n Type 'another tool' to change tools`, `go/another tool`); 
        if (mowStart === 'go'){
            landscaper.money += currentToolObj.earns;  
            day++;
            console.log(landscaper.money);      
        } else if (mowStart === 'another tool'){
            pickTool();
        }
            
         
    }

const playGame = () => {
    console.log('test');
    console.log(winner());
    pickTool();
while (winner() === false) {
    mowLawn();
    winner();
    buyTool();
    }
}

   

//Declare an object to store information about the user
let landscaper = {
    name: null,
    money: 0,
    toolsAvailable: ['teeth'],
}
    
//Declare an object to store information about the tools
const tools = [
             {  name: 'teeth',
                price: 'free',
                earns: 1
            },
            {   name: 'scissors',
                price: 5,
                earns: 5
            },

            {   name: 'push lawnmower',
                price: 25,
                earns: 50
            },

           {    name: 'new lawnmower',
                price: 250,
                earns: 100
            },

            {   name: 'students',
                price: 500,
                earns: 250
            }, 
        ]
//Declare a variable to store the amount of money needed to win the game
const winningAmount = 1000;
//Declare variable to store the current day we are on
let day = 1;

//Welcome Message
const playerName = prompt("Hello Landscaper! Ready to get to work?", "Type name to get started");

landscaper.name = playerName;

let currentToolObj = null;

alert(`Okay ${playerName}, here\'s the deal. We need to mow some lawns and make some money. \n The more money you have, the better tools you can buy, the more money you can make! \n Right now, all you have is your ${landscaper.toolsAvailable}, and you have ${landscaper.money}. Lets get started! `);

let result = prompt(`Day ${day}. Total dollars you have: ${landscaper.money}. \n Type 1 to pick tool to start mowing the lawn. \n`, `Type 1`)

playGame();











// const mowLawnTeeth = () => {
//     while (landscaper.money < 5){
//     prompt(`Day ${day}. Total dollars you have: ${landscaper.money}`, `Click ok to mow the lawn with your ${landscaper.toolsAvailable}`)
//     landscaper.money += tools[0].earns;
//     day++ 
//     }
// }

// let toolSelected = prompt("You can buy a new tool")

// const buyTool = () => {
//     if (landscaper.money >= 5){
//         prompt(`You can buy scissors now for ${tools[1].price}.`, "Type 'buy now' to get scissors!")
//     }
//     landscaper.money -= tools[1].price;
//     landscaper.toolsAvailable += tools[1].name
// }

// const addTool = () => {

// }

// const subtractMoney = () => {

// }


// mowLawnTeeth();
// buyTool();

// console.log(landscaper.money)


//Index. 1 will equal to mow lawn
        //2. will equal to check money and tools you have
        //3. will equal to buy tool








//If the only tool you have is your teeth

    //you will make $1 mowing the lawn in 1 day

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