$(() => {
  //Cache DOM Nodes
  const $number = $('.num');
  const $operator = $('.operator');
  const $button = $('button');
  const $output = $('.output');
  const number = [];

//Event Handler
const doOperation = () => {
    

}


const displayNumber = (event) =>{
    const $target = $(event.target);
    console.log($target.html());
    number.push($target.html());
    number.join('');
    console.log(number);
    $output.html(number);
    $operator.on('click', doOperation)
}


  //Event Listner
  $button.on('click', displayNumber)
  
});

