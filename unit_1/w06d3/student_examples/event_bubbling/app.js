console.log('app.js');

$(() => {
  $('.outside').on('click', ()=> {
      console.log('Outside Clicked');
  })
  $('.inside').on('click', (event)=> {
    //   event.preventDefault(); //used to stop a form from reloading on the page
      console.log('Inside Clicked');
    //   return false; //same thing as stopPropagation
  })
  
  
});