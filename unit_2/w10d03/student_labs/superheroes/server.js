const express = require('express');
const app = express();
const PORT = 3000;

const superheroes = [ 
    {
    name:'Superman',
    powers: ['flight', 'invulnerability', 'x-ray vision']
    },
    { name: 'Wonder Woman',
    powers: ['super-strength', 'laso of truth']
    },
    { name: 'Black Panther',
    powers: ['super sharp teeth', 'speed'] 
    }
];

const villians = [
    {
     name: "Lex Luthor", 
     powers: ["super brain"]
    },
    {
     name: "Ares", 
     powers: ["shape shifting", "teleporting"]
     },
     {
      name: "Killmonger", 
      powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
     }
]

app.get('/', (req, res)=> {
    res.send('Here to save the day.....')
})
//Index
app.get('/superheroes', (req, res)=> {
    res.send(superheroes)
})
//Show
app.get('/superheroes/:index', (req, res)=> {
    const superheroName = superheroes[req.params.index].name;
    let listOfPowers = "";
    for(item of superheroes[req.params.index].powers){
        let currentItem = `<li> ${item}</li>`;
        listOfPowers = listOfPowers + currentItem;
    };
    res.send(`
        <h1>${superheroName}</h1>
        <ul>
        ${listOfPowers}
        </ul>
        <h2>Villian:</h2>
        <p> ${villians[req.params.index].name} </p>
        `)
})

//Index (Villians)
app.get('/villians', (req, res)=> {
    res.send(villians);
})


//Show (Villains)
app.get('/villians/:index', (req, res)=> {
    const villianName = villians[req.params.index].name;
    let powers = "";
    for(item of villians[req.params.index].powers){
        let currentItem = `<li>${item}</li>`;
        powers = powers + currentItem;
    }
    res.send(

        `
        <h1>${villianName}</h1>
        <ul>
        ${powers}
        </ul>
        `
    )
})
     


//listening on Port
app.listen(PORT, ()=> {
    console.log('listening on PORT ' + PORT)
})