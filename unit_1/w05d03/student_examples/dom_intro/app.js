console.log('stranger things are coming');
console.log(document);
console.log(document.body);
console.log({document});
const h1 = document.querySelector('h1');
h1.innerText = "Welcome to the Upside Down";
h1.style.color = "red";

// select image and store it in a variable caleld image
const image = document.querySelector("img");
image.style.display = "none";

image.style.display= "block";
image.style.width ="95%";

// Create an img element
// add the image to the page

const eggos = document.createElement('img');
const containter= document.querySelector('.container');
//set a src attribute on the img = eggos
eggos.setAttribute("src","https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg")
//set the width of the image to be 100%
eggos.style.width = "100%";
containter.appendChild(eggos);

// select all of the li items on the page
// store them in a variable 
const allLi = document.querySelectorAll('li');
allLi[0].innerText = "Demo Dog Hangout";

allLi[4].style.color = "hotpink";

allLi[0].remove();