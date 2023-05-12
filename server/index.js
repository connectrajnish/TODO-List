require('dotenv').config(); //used to load variables from .env file
const express = require('express');
const cors =require('cors');

const connectDB = require('./config/db')
const TODORoutes = require('./routers/todo');

const PORT = process.env.PORT || 8080;

const app = express();
connectDB();    //connect to database using mongoose

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send("Server up and running"));
app.use('/api/todo', TODORoutes);   //Add the routes endpoints to the middleware


app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});