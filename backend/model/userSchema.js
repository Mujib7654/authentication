const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required : true
        },
        email: {
            type: String,
            require : true
        },
        phone: {
            type: Number,
            require : true
        },
        work: {
            type: String,
            require : true
        },
        password: {
            type: String,
            require : true
        },
        cpassword: {
            type: String,
            require : true
        }
    }
)

//create a collection and connect our schema with our database

const User = mongoose.model('USER', userSchema);

module.exports = User;