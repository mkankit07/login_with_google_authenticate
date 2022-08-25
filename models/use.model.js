const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    phone:{
        type: String,
    },
    email: { 
        type: String 
    },
    password: { 
        type: String 
    },
    status:{
        type: String,
    }
})
module.exports= mongoose.model('User', userSchema);