const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/dbConnection')
const userRoutes = require('./routes/userRouter')
const cors = require('cors');
const app = express();

// app.use(cors());

app.use(bodyParser.json())



// DB Connection
connectDB()

app.use('/',userRoutes)

// Start your server
const port =  5000

app.listen(port, () => console.log(`Server is running on port ${port}`));



