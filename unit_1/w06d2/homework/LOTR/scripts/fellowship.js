console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $middleEarth = $('<section>').attr('id', 'middle-earth');

  // 2. append the section to the body of the DOM.

  $('body').append($middleEarth);

  // 3. use a for loop to iterate over the lands array that does the following:
  for (land of lands){
  //   3a. creates an article tag (there should be one for each land when the loop is done)
  //   3b. gives each land article an `id` tag of the corresponding land name
  //   3c. includes an h1 with the name of the land inside each land article
  //   3d. appends each land to the middle-earth section
      let $land = $('<article>').attr('id', land).html(`<h1>${land}</h1>`);
      $middleEarth.append($land);

}

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  console.log('making the hobbits');

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  const $hobbitsList = $('<ul>');

  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
   // 3. also, give each hobbit (`li`) a class of "hobbit"

  for (hobbit of hobbits){
    const $hobbit = $('<li>').addClass('hobbit').text(hobbit);
    $hobbitsList.append($hobbit);
  }

  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
    $('#The-Shire').append($hobbitsList);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
console.log('keep it secret, keep it safe')
  // 1. create an empty div with an id of 'the-ring'
  const $div = $('<div>').attr('id', 'the-ring');
  console.log($div)

  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  let $hobbitClassElements = $('.hobbit');
  const $frodo = $hobbitClassElements[0];
  console.log($frodo);
  $($hobbitClassElements[0]).append($div);

  
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  console.log('makeBaddies');

  // 1. display an unordered list of baddies in Mordor
   // 2. give each of the baddies a class of "baddy"
  const $listOfBaddies = $('<ul>');
    for (baddy of baddies){
      const $baddie = $('<li>').addClass('baddy').text(baddy);
      $listOfBaddies.append($baddie);
    }

  // 3. remember to append the ul to Mordor

  $('#Mordor').append($listOfBaddies);



};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  console.log('makeBuddies');

  // 1. create an aside tag and append it to middle-earth below mordor
  const $aside = $('<aside>');
  $('#middle-earth').append($aside);

  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
  const $buddyList = $('<ul>');

  for ( buddy of buddies){
    const $buddy = $('<li>').addClass('buddy').text(buddy);
    $($buddyList).append($buddy);

  
  }

  // 4. don't forget to append them to the aside

  $aside.append($buddyList);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  console.log('leave the Shire')
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

      const $hobbitChildren = $('#The-Shire ul');
      console.log($hobbitChildren);
      $($hobbitChildren).detach();
      $('#Rivendell').append($hobbitChildren);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
console.log('beautiful stranger')
  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'
     const $strider = $('aside').children().children()[3];
    const $aragorn = $($strider).text('Aragorn');
     console.log($aragorn);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
console.log('forge the fellowship')
  // 1. create a new div with an id 'the-fellowship'
  const $fellowshipDiv = $('<div>').attr('id', 'the-fellowship');
  // 2. add an h1 with the text 'The Fellowship' to this new div
const $fellowshipH1 = $('<h1>').text('The FellowShip');
$fellowshipDiv.append($fellowshipH1);
  // 3. append the fellowship to middle-earth
  $('#middle-earth').append($fellowshipDiv)
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

  const $hobbitsInRivendell = $('#Rivendell ul')
  $hobbitsInRivendell.detach();
  $($fellowshipDiv).append($hobbitsInRivendell);

  const $buddiesUL = $('aside ul');
  $buddiesUL.detach();
  $($fellowshipDiv).append($buddiesUL);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
console.log('the balrog')
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  const $buddies = $('#the-fellowship ul .buddy');
  const $gandalf = $buddies[0];
  $($gandalf).text('Gandalf the White').addClass('the-white');

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
console.log('horn of Gondor')
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert('The horn of gondor has been blown!')

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const $boromir = $('#the-fellowship ul .buddy')[4];
  $($boromir).css('text-decoration', 'line-through');

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
const $uruk = $('#Mordor ul .baddy')[2];
$($uruk).remove();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
console.log(`its dangerous to go alone`)
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  const $frodo = $('#the-fellowship ul .hobbit')[0];
  $($frodo).detach();
  const $sam = $('#the-fellowship ul .hobbit')[0];
  $($sam).detach();

  $('#Mordor').append($sam, $frodo);

  // 2. add a div with an id of 'mount-doom' to Mordor
  const $mountDoom = $('<div>').attr('id', 'mount-doom');
  $('#Mordor').append($mountDoom);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
console.log('We wants it')
  // 1. Create a div with an id of 'gollum' and add it to Mordor
const $gollum = $('<div>').attr('id', 'gollum')
$('#Mordor').append($gollum);

  // 2. Move the ring from Frodo and give it to Gollum
  const $thering = $('#the-ring')
  $('#the-ring').detach();
  $('#gollum').append($thering);


  // 3. Move Gollum into Mount Doom
  
  $('#mount-doom').append($gollum);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  console.log('There and back again')

  // 1. remove Gollum and the Ring from the DOM
  const $gollum = $('#gollum')
  $gollum.remove();

  // 2. remove all the baddies from the DOM
  $('#Mordor ul').remove();

  // 3. Move all the hobbits back to the shire
  const $allHobbits = $('.hobbit');
  $allHobbits.detach();
  $('#The-Shire').append($allHobbits);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
