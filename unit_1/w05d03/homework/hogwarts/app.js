// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
    // put jQuery in here
    const $container = $('#container');
    console.log($container)

    const $h1 = $('<h1>');
    console.log($h1);

   $h1.text('Hogwarts School of Witchcraft and Wizardry');
   $container.append($h1);
    //This text will not appear because even though we created the h1 element, we did not append it to anything yet. 

const $h2 = $('<h2>').text('Nicole');
$container.append($h2);
const $h3 = $('<h3>').text('Hufflepuff');
$container.append($h3);
const $h4Pet = $('<h4>').addClass('dog').text('Miko');
$container.append($h4Pet);
const $h4Wand = $('<h4>').text('Harry Potter\'s Wand');
$container.append($h4Wand);


});