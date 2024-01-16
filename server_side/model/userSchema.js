const {model,Schema} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: Number
    },
    password: {
        type: String
    }
})

module.exports = {
    User : model("user",userSchema)
}