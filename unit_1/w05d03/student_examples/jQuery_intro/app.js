console.log($);
if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};





// add a document.ready function
$(()=> {

  // Create a div using j query
const $div = $('<div>').addClass('meat');

// create an h3 element
// give element some text
// append to our div
const $h3 = $('<h3>').text('Ostrich');
$div.append($h3);
// Create second div with a class of dessert
const $div2 = $('<div>').addClass('Dessert').css("background-color", "#123C69");
// Append this div to the body
$('body').append($div2);

// Create a new h3 tag
const $h3Dessert = $('<h3>').text('Dessert');
// Append this h3 to the second div
$div2.append($h3Dessert);

$('body').append($div);

// Hide all divs with class meat
const $meat = $('.meat');
$meat.hide("slow");
// $meat.show("slow");

// Prepend an image to the body
const $image = $('<img>').attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3Ds');
$('body').prepend($image);

//Create a variable that holds all of the divs on the page
const $divs = $('div');
console.log($divs);
//Grab the first index div and change the color with Jquery
$divs.eq(1).css('background-color', 'pink');
//$divs[0].style.backgroundColor = "pink";  <======= Vanilla JS Syntax, can use but should not

$divs.eq(2).html('<h2>Hello World</h2>')
  })
