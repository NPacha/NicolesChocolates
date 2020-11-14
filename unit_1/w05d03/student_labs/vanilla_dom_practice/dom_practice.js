console.log('hello');

const denverActivities = document.querySelector('#denver_activities');
console.log(denverActivities);

const h2 = document.querySelector('h2');
console.log(h2);

h2.innerText = `${h2.innerText}!!!`;

const listItems = document.querySelectorAll('.listitem');
console.log(listItems);

listItems[0].style.color = "#F08080";
listItems[0].innerText = 'Jamboree sandwich at the Jambo-ree';

const newImage = document.createElement('img');
newImage.setAttribute("src", "https://i.imgur.com/MoQW933.jpg");
denverActivities.appendChild(newImage);
const newP = document.createElement('p');
newP.innerText = "safdkkdfjlkjfladkjflkasjdflkaj sjdfl lkasdjf lk alsdkjasfsdf asdfasdff";
denverActivities.appendChild(newP);

listItems[2].remove();

