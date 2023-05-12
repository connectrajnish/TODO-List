require('dotenv').config(); //used to load variables from .env file
const express = require('express');

const connectDB = require('./config/db')

const PORT = process.env.PORT || 8080;

const app = express();
connectDB();    //connect to database using mongoose

app.use(express.json({ extended: false }));

app.get('/', (req, res) =>{return res.send('Hi')});

app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`);
});