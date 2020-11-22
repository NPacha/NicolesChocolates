// console.log($);
// console.log('modal practice app.js is linked to this index.html');



$( () => {
  // Cached Dom Nodes
  const $modal = $("#modal"); // dear future Nicole, this is the modal
  const $textBox = $("#modal-textbox"); //this is the textbox in the modal
  const $openModal = $("#openModal"); // this is the button that opens the modal
  const $closeModal = $("#close"); // this is the anchor tag that closes the modal
  //event handlers
  const openModal = (event) => {
    $modal.css('display', 'flex')
  }

  const closeModal = (event) => {
    $textBox.css('display', 'none')
    $modal.css('display', 'none')

  }

  //event listeners

  //htmlelement.on('anEventType', dothisEventHandler)
  $openModal.on('click', openModal);
  $closeModal.on('click', closeModal);

});
