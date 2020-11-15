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


/////////YEAR 3/////////
const $ul = $('<ul>').attr('storage', 'trunk');
$container.append($ul);
const $li1 = $('<li>').text('butter beer');
const $li2 = $('<li>').addClass('secret').text('invisibility cloak');
const $li3 = $('<li>').addClass('secret').text('magic map');
const $li4 = $('<li>').addClass('secret').text('time turner');
const $li5 = $('<li>').addClass('dog').text('leash');
const $li6 = $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans');
$ul.append($li1, $li2, $li3, $li4, $li5, $li6)


//////////YEAR 4///////////
const $table = $('<table>');
$container.append($table)

const $h5 = $('<h5>').text('Spring 2017');
$table.before($h5);

const $thead = $('<thead>');
$table.append($thead);

const $th1 = $('<th>').text('Day');
const $th2 = $('<th>').text('Classes');
$thead.append($th1, $th2);

const $tr1 = $('<tr>');
const $td1 = $('<td>').text('Monday');
const $td2 = $('<td>').text('Herbology, Defense Against the Dark Arts');
$tr1.append($td1, $td2);
const $tr2 = $('<tr>');
const $td3 = $('<td>').text('Tuesday');
const $td4 = $('<td>').text('Divination, Quidditch practice');
$tr2.append($td3, $td4);
const $tr3 = $('<tr>');
const $td5 = $('<td>').text('Wednesday');
const $td6 = $('<td>').text('History of Magic');
$tr3.append($td5, $td6);
const $tr4 = $('<tr>');
const $td7 = $('<td>').text('Thursday');
const $td8 = $('<td>').text('Charms');
$tr4.append($td7, $td8);
const $tr5 = $('<tr>');
const $td9 = $('<td>').text('Friday');
const $td10 = $('<td>').text('Potions, Transfiguration');
$tr5.append($td9, $td10);

$table.append($tr1, $tr2, $tr3, $tr4, $tr5)

//////////YEAR 5////////

$h4Wand.detach();
$li1.remove();
$h4Wand.text('Shiny new wand!');
$ul.before($h4Wand);
$h4Wand.css('color', 'purple');
$($h4Pet).detach();
$h5.append($h4Pet);

$($h4Pet).detach();
$h4Wand.before($h4Pet);

/////////YEAR 6/////////

$('.secret').hide('slow').delay('5000');
$('.secret').show('slow');

$li5.addClass('cabbage');

$li5.removeClass('cabbage');

/////////////YEAR 7//////////

$h5.text('Fall 2018');
$li0 = $('<li>').text('Butter beer').attr('value', 'trunk');
$ul.prepend($li0);

$ul.attr('storage', 'chest');

});