const {model,Schema} = require('mongoose')

const adminSchema = new Schema({
    name: {
        typeof : String
    },
    password: {
        typeof: String
    }
})


module.exports = {
    Admin : model("admin",adminSchema)
}
