//1. A JSON Web Token is a like a unique identifier(web token that is encoded and serialized) that the server creates when a user inputs password and email to log in somehwere. It does not store it in the servers session in server memory, it stores it in the browser.
//It is used in authentication by allowing us to be able to send the JWT to multiple servers, so users can more seamlessley transition to other pages where they may need to be authenticated. 
//It is used in authorization by allowsing the server to check if the user is authorized to log onto this particular site without storing this session in the servers memory, but rather within the web token that is stored on the browser.

//2. 
//-Create an App.js, and Form.js component file
//-Create a data file within my models folder to contain all of my data
//-Inside of App.js, I would use state to initialize the current state of the todo list(what is in the data file)
//In my return statement, I would map over all of the items within the array of to-do list items within my data file so that they display on the screen upon loading the page. 
//-In my form component, I would create a form with an input 
//-I would useRef to grab the input field value from the user, and then set the state to spread in the new input value
//-In the App.js, I would include an onClick property on the 'Completed' button that points to an event handler that removes the list item from the page. 