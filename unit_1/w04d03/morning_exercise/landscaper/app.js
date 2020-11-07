console.log(`app.js is properly connected`); // Before doing anything else, open your index.html in the browser, open your developer tools and make sure this console log is showing in the browser console. If it's not, check to make sure your files are properly connected. 

// Next: Read through all the code below so you know what you have and what you're working with before getting started. Check your work in the browser as you go. You may find yourself jumping around instead of just coding from top to bottom.

// TOOLBOX ===============
const tools = [
  {
    name: 'Teeth',
    wage: 1,
    price: 0
  },
  {
    name: 'Scissors',
    wage: 5,
    price: 5
  },
  {
    name: 'An old-timey push lawnmower',
    wage: 50,
    price: 35
  },
  {
    name: 'A battery-powered lawnmower',
    wage: 100,
    price: 250
  },
  {
    name: 'A team of starving students',
    wage: 250,
    price: 500
  }
] // Thought question: What kind of data type is this? Make sure you understand that before you proceed. 

// PLAYER OBJECT  ===============
const player = {
  currentTool: tools.shift(), // what does this do? What does the tools array look like after the shift? You will need to understand this to proceed. References: google 'javascript .shift' and look for w3Schools or MDN 
  bankAccount: 0,
  day: 0
}

// FUNCTION TO START THE GAME ===============
const startGame = () => {
  alert('Hello there, Landscaper!');
  // finish filling out this function so it:
    // shows status
    // asks for action
}

// =============== GAME METHODS ===============

// SHOW STATUS =====
const showStatus = () => {
  // Line 53 will trigger a syntax error until you remove the comments and fill it in properly. Comment line 53 back in when you're ready to work with it. 

  // alert(`Day: ${/* access the day number */} || Current Tool: ${/* access the player's current tool */} || Bank Account: $${ /* access the player's bank account */ }`);
}

// ASK FOR ACTION =====
const askForAction = () => {
  let playerChoice; // initializes an empty variable;
  playerChoice = prompt(`What do you want to do?`, `work (w), shop (s), quit (q)`); // What is happening here? Make sure you understand this before you proceed.

  // Finish filling out this function so:
  // if playerChoice is w 
    // cut the grass
  // if playerChoice is s
    // shop
  // if playerChoice is q
    // end the game, stop the function from executing 
}

// cut grass =====
const cutGrass = () => {
  // finish filling out this function so:
  // the day incriments by 1
  // the bank account incriments by the current tool's wage
  // show status to confirm it's working properly

  // NOTE: We want this function to be dynamic so it works regardless of which tool the player is using. Do not hardcode the wage, access it dynamically. 
}

const shop = () => {
  // Fill out this function so:
  // If the player has enough money in the bank account to purchase the next tool (remember the thought question on line 32, which index number is the next tool at in the tools array, now that we've used tools.shift() ?)
    // the player's bank account is decrimented by the next tool's price
    // the player's current tool is updated to the next tool
    // alert the player of which tool they just bought and how much it cost (where is this info now stored? how do we access it dynamically?)
    // show status
    // ask for action 
  // If the player does not have enough money in the bank account to purchase the next tool
    // alert the player that they cannot afford the next tool (access the name dynamically) and tell them to keep working!
    // ask for action
}

// check win =====
const checkWin = () => {
  // Our win condition is our exit condition.
  // Fill out this function so:
  // if the player has at least 1000 in the bank and a team of starving students
    // it alerts the player that they've won and exits the game (exits the function)
  // if the player has not met the win condition, it asks for an action 

  // NOTE: I have not told you where to run the checkWin function. Where in your code does it make the most sense?
}


// START GAME ON PAGE LOAD ===============
// What do you need to put here to actually start the game when the page loads?
// Hungry for more: Does it have to be at the bottom of the page? If yes, why? If no, why not?