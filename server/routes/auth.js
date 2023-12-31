const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cookie = require('cookie');
const router = express.Router();
require('../db/connectDB');
const User = require('../model/userSchema');
const authenticate = require('../middleware/Authenticate');

router.use(cookieParser());


router.get('/', (req, res) =>{
    res.send(`Hello World from router!`)
});

//using promises

// router.post('/register', (req, res) => {
//     // console.log(req.body);
//     // res.json({message: req.body});

//     //storing the user data in the database
//     


//     //get data
//     const {name, email, phone, password, work, cpassword} = req.body;
//     //check validation
//     if(!name || !email || !phone || !password || !work || !cpassword)
//     {
//         return res.status(422).json({error: "Please fill the field properly"});
//     }
//     //email and mobile no. must be unique
//     User.findOne({$or: [{ email: email }, { phone: phone }]})
//     .then((userExist) => {

//         if(userExist) {
//             let duplicateField = userExist.email === email ? "Email" : "Phone";
//             return res.status(422).json({error: `${duplicateField} Already Registered`});
//         }
        
//         const user = new User({name, email, phone, password, work, cpassword});

//         user.save().then(() => {
//             res.status(201).json({message: "User Registered Successfully"});
//         }).catch((err) => res.status(500).json({error: "Failed to register"}))

//     }).catch(err => {
//         console.log(err);
//     }) 
// });

//using async await

router.post('/register', async(req, res) => {
    const {name, email, phone, password, work, cpassword} = req.body;

    //check validation
    if(!name || !email || !phone || !password || !work || !cpassword)
    {
        return res.status(422).json({error: "Please fill all the fields properly"});
    }

    //check user exists or not, password matched with cpassword, lastly create a document for the new user
    try {
        const userExist = await User.findOne({$or: [{ email: email }, { phone: phone }]});

        if(userExist) 
        {
            let duplicateField = userExist.email === email ? "Email" : "Phone";
            return res.status(422).json({error: `${duplicateField} Already Registered`});
        }
        else if (password != cpassword) {
            return res.status(422).json({ error:"Password and Confirm Password does not match!" });
        }
        else{
            const user = new User({name, email, phone, password, work, cpassword});

            const userRegister = await user.save();

            if(userRegister){
                res.status(201).json({message: "User Registered Successfully"});
            }
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/signin', async(req,res) => {
    try {
        const {email, password} = req.body;

        //validation
        if(!email || !password) {
            return res.status(422).json({error: 'Please Fill All The Fields Properly'})
        }
        //check email and password match with our existing db
        const userLogin = await User.findOne({email: email});

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch){
                res.status(400).json({error: "Invalid Password"});
            }
            else{
                const token = await userLogin.generateAuthToken();
                // console.log(token);
                res.status(200).json({message: "user signin successfully", token});
            }
        }
        else{
            res.status(400).json({error: "Invalid email"});
        }
    } catch (error) {
        console.log(`${error}`)
    }
});

router.get("/about", authenticate, (req, res) => {
    try {
      res.send(req.rootUser);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong or invalid token" });
      console.log(`${error}`);
    }
});

module.exports = router;