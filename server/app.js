const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//create a variable to access express methods and properties
const app = express();

const PORT = process.env.PORT;

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
  
// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

//require db
require('./db/connectDB');
app.use(express.json());

app.use(require('./routes/auth'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    next();
});


app.get('/', (req, res) =>{
    res.send(`Hello World!`)
});


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
});