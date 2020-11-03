const pickTool = () => {
    let pickedTool = prompt(`Tools Available: ${landscaper.toolsAvailable} \n Type name of tool you want to use`, `${landscaper.toolsAvailable}`);
    for (let i = 0; i < toolsObj.length; i++){
                if (toolsObj[i].name === pickedTool){
                    currentToolObj = toolsObj[i];
                    currentTool.innerHTML = `${currentToolObj.name}`;
                }
            }  
            console.log(currentToolObj)     
       }

             

const buyTool = () => {
    if (landscaper.money >= 5 && landscaper.money < 25 && landscaper.toolsAvailable.includes('scissors') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy some ${toolsObj[1].name} for ${toolsObj[1].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= toolsObj[1].price;
            landscaper.toolsAvailable.push(toolsObj[1].name);
            tool.innerHTML = ` ${landscaper.toolsAvailable} `;
            
        } else {
            alert(`Okay, suit yourself!`);
            
        }
    } else if (landscaper.money >= 25 && landscaper.money < 250 && landscaper.toolsAvailable.includes('push lawnmower') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy a ${toolsObj[2].name} for ${toolsObj[2].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= toolsObj[2].price;
            landscaper.toolsAvailable.push(toolsObj[2].name);
            tool.innerHTML = ` ${landscaper.toolsAvailable} `;
            console.log(landscaper);
            
        } else {
            alert(`Okay, suit yourself!`);
            
        }
    } else if(landscaper.money >= 250 && landscaper.money < 500 && landscaper.toolsAvailable.includes('new lawnmower') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy some ${toolsObj[3].name} for ${toolsObj[3].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= toolsObj[3].price;
            //Add new tool to the available tools
            landscaper.toolsAvailable.push(toolsObj[3].name);
            tool.innerHTML = ` ${landscaper.toolsAvailable} `;
            console.log(landscaper);
        
        } else {
            alert(`Okay, suit yourself!`);
            
        }
        
    } else if(landscaper.money >= 500 && landscaper.money < 1000 && landscaper.toolsAvailable.includes('students') === false){
        let addTool = prompt(`You unlocked the ability to buy a new tool! Do you want to buy some ${toolsObj[4].name} for ${toolsObj[4].price} dollars? Type 'yes' or 'no'`, `yes/no`);
        if (addTool === 'yes'){
            landscaper.money -= toolsObj[4].price;
            //Add new tool to the available tools
            landscaper.toolsAvailable.push(toolsObj[4].name);
            tool.innerHTML = ` ${landscaper.toolsAvailable} `;
            console.log(landscaper);
            
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

        buyTool();
        let mowStart = document.createElement('p');
        mowStart.innerHTML = `Day: ${day}. \n You earned: $${currentToolObj.earns}`;
        let lawn = document.getElementById('lawn');
        lawn.appendChild(mowStart);
        landscaper.money += currentToolObj.earns;  
        totalMoney.innerHTML = `$${landscaper.money}`;
        day++;
        winner();   
        
            };

   

//Declare an object to store information about the user
let landscaper = {
    name: null,
    money: 0,
    toolsAvailable: ['teeth'],
}
    
//Declare an object to store information about the tools
const toolsObj = [
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

let currentToolObj = 'none';

const mowLawnButton = document.querySelector('.mowlawn');
mowLawnButton.addEventListener('click', mowLawn);

let tool = document.createElement('p');
tool.innerHTML = `${landscaper.toolsAvailable}`;
let tools = document.getElementById('tools');
tools.appendChild(tool);

let totalMoney = document.createElement('p');
totalMoney.innerHTML = `${landscaper.money}`;
let total = document.getElementById('total');
total.appendChild(totalMoney);

let currentTool = document.createElement('p');
currentTool.innerHTML = `${currentToolObj}`;
let current = document.getElementById('currenttool');
current.appendChild(currentTool);


const pickToolButton = document.querySelector('.picktool');
pickToolButton.addEventListener('click', pickTool);









