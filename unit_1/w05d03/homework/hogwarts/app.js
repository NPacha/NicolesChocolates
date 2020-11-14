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



});