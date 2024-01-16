const mongoose = require('mongoose')
require('dotenv').config()

const url = 'mongodb+srv://avmansoor2023:acG1J2tg6mnq09Lu@cluster1.ddtriws.mongodb.net/Venture_Squade?retryWrites=true&w=majority'

module.exports = async function connectDB(){
    try{
      await  mongoose.connect(url,
        )
            console.log("database connected");

      
    }catch(err){
        console.error(err);
    }
}