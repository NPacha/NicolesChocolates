
//1.

// $(() => {
//     const container = $('<div>').addClass('container');
// $('body').append(container);


//     const generateSquares = (numOfSquares) => {
//         for (let i = 1; i <= numOfSquares; i++){
//         const $redSquare = $('<div>').addClass('red');
//         container.append($redSquare);
//         let $blackSquare = $('<div>').addClass('black');
//         container.append($blackSquare);


//         console.log('it works')
    
//         }

//     }


//         generateSquares(32);
// });


//2

$(() => {
    const container = $('<div>').addClass('container');
$('body').append(container);




let row = 0;

const generateBlackFirst = (num)=> {
    if (row === 8){
        return;
    }
    for (let i = 1; i <= num; i++){
        let $blackSquare = $('<div>').addClass('black');
    container.append($blackSquare);
    const $redSquare = $('<div>').addClass('red');
    container.append($redSquare);

    }
    row += 1;
    generateRedFirst(4);
}

    const generateRedFirst = (numOfSquares) => {
        if (row === 8){
            return;
        }
        for (let i = 1; i <= numOfSquares; i++){
        const $redSquare = $('<div>').addClass('red');
        container.append($redSquare);
        let $blackSquare = $('<div>').addClass('black');
        container.append($blackSquare);

        }
        row += 1;
        generateBlackFirst(4);
    
        }

    

    generateRedFirst(4);
    

        
});



