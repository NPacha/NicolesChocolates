$(()=>{
    //Cache my dom nodes
    const $form = $('form'); //grabbing the form element, you can use as an event listener
    const $input = $('#text-box'); //if you grab an input element, an event on it can be 'submit' and you can grab it by the id
    const $password = $('#password');
    const $rosa = $('#rosa');
    const $jimmy = $('#jimmy')

    // 1. We are selecting the dom nodes we want to use to start 2. then we set an event listner on the form in the html .3 the listener has an event handler that prevents the default code from running, checks whether the value of the input password element is > 12. If it's too short, it adds html into the rosa div telling the user to make it longer. 
    // 4. If it's 12 or longer, it displays the value of the name input, and reduces the value of the password to tack on some x's at the end of the password to keep it more secure. It resets the input values (the current Target is the input values) 
    // The text stays red because we are calling the .css on the rosa div that we created. 

    //You use event as a parameter when you are using an event handler, you can listen for this event on the form. 
    $form.on('submit', (event)=> {
        event.preventDefault(); //This will stop the page from running it's default, in this case the whole html on the page will not reload
        let wasGood;

        if($password.val().length < 12){
            wasGood = false;
            $rosa.html(
                `
                <h1>
                Rosa says you are trippin, your password is too short, how abotu you make it longer than ${$password.val().length} characters, we want 12.
                </h1>
                `
            )
            .css('color', 'red')
            .css('font-size', '48px'); //Be careful where you assign properties to, if it's assigned to a div it will store that in memory when the function runs. 

        } else {
            wasGood = true;
            $rosa.html(
                ` 
                <h1>Your name is ${$input.val()}</h1>
                <h1>Your password was ${
                     $password
                        .val()
                        .split('')
                        .reduce((password, char, i)=>{
                            const maxIndex = $password.val().length -1;
                            if(i > maxIndex - 4){
                                password = password + char;
                            }
                            return password
                        }, 'xxxxxxxx')
                }</h1>   
                `
            )
            .css('color', 'black')
            .css('font-size', '32px');   //REDUCE!!! this LOOPS through the array!
        }

        if (wasGood){
            const $li = $('<li>').html(
                `
                ${$input.val()} logged in successfully
                `

            )
            $jimmy.append($li);
        } else {
            const $li = $('<li>').html(
                `
                ${$input.val()} doesn't know how to make a password in 2020
                `

            )
            .css('color', 'red');
            $jimmy.append($li);       
        
        }
       
    
        event.currentTarget.reset(); //This resets the current Target which in this case would be the value of the inputs, because this is where the event is stored. 


    })

})