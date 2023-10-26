//require express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//create a variable to access express methods and properties
const app = express();

const PORT = process.env.PORT;

app.use(cookieParser());
// app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, // Allow credentials
  };
  
app.use(cors(corsOptions));

//require db
require('./db/connectDB');
app.use(express.json());

app.use(require('./routes/auth'));



// const middleware = (req, res, next) => {
//     console.log(`hello middleware`);
//     next();
// }

//app.get(path,callback)
app.get('/', (req, res) =>{
    res.send(`Hello World!`)
});

// app.get('/about', middleware, (req, res) =>{
//     res.send(`Hello about!`)
// });

app.get('/contact', (req, res) =>{
    res.send(`Hello contact!`)
});

app.get('/signin', (req, res) =>{
    res.send(`sign in!`)
});

app.get('/signup', (req, res) =>{
    res.send(`sign up!`)
});

//create a server using listen method
// app.listen(PORT, callback)
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
});