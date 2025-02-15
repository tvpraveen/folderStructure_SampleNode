const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel