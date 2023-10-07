const mongoose = require('mongoose');

const DB = process.env.DATABASE;

//to connect
mongoose.connect(DB, {
    useNewUrlParser: true, 
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(() =>{
    console.log("Connected to DB");  
}).catch((err)=> {
    console.error(`Error connecting to db`);
});

