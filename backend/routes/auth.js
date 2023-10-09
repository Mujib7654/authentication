const express = require('express');
const router = express.Router();
require('../db/connectDB');
const User = require('../model/userSchema');

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

    if(!name || !email || !phone || !password || !work || !cpassword)
    {
        return res.status(422).json({error: "Please fill the field properly"});
    }

    try {
        const userExist = await User.findOne({$or: [{ email: email }, { phone: phone }]});

        if(userExist) 
        {
            let duplicateField = userExist.email === email ? "Email" : "Phone";
            return res.status(422).json({error: `${duplicateField} Already Registered`});
        }
        else if (password != cpassword) {
            return res.status(422).json({ error:"Passwords do not match!" });
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

module.exports = router;