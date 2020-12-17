const express = require('express');
const app = express();
const PORT = 3000;
///GREETINGS///
app.get('/greeting', (req, res)=>{
    res.send('<h1>Hello stranger</h1>')
});

app.get('/greeting/:name', (req, res)=> {
    res.send(`Hello, ${req.params.name}! It's so great to see you!`)
})

///TIP CALCULATOR///
app.get('/tip/:total/:tipPercent', (req, res)=> {
    const totalTip = parseInt(req.params.total) * (parseInt(req.params.tipPercent)* .01);
    res.send(`${totalTip}`);
});



app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
});