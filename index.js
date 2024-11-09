require('dotenv').config() 
const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req,res) =>{
    res.send('hello baby!')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`APP listening on port ${PORT}`)
})