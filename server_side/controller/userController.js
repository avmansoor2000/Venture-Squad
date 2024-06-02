const {User}  = require('../model/userSchema')


//     USER REGISTER

const userRegister = async(req,res) => {
    try{
        console.log(req.body);
    const {name,email,number,password,cPassword} = req.body
    console.log('dddddddddddddddddd');
    const user = await User.users?.findOne(email)
    if(user === undefined){
        return res.status(409).json({success: false, message: 'user Already registred'})
    }
    if(!name || !email || !number || !password || !cPassword){
        return res.status(400).json('Fill all the fields')
    }
    if(password !== cPassword){
        res.status(400).json({error:'password do not match'})
    }

    const newUser = new User({
        name,
        email,
        number,
        password
    })
    console.log('before saveeee');

    await newUser.save()
    console.log('after saveeee');


    res.status(200).json('success')
}catch(error){
    res.status(500).json({error: "Error while registering user"})
}
} 

//     USER LOGIN

const userLogin = async(req,res) =>{
    const { email, password } = req.body;
    console.log('ddddddddddddddddd');
        
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }
    
    const user = await User?.findOne({ email });

    if (!user) {
        return res.status(401).json({ error: "Invalid Email or Password" });
    }
    const isPasswordValid = password === user.password
    console.log(isPasswordValid,'hhhhhhhhhhhhhhhhhhhhhh');

     if(isPasswordValid === false){
        return res.status(401).json({error: "Invalid Email or Password"})
     }else{
        return res.status(200).json('success')
     }
}

module.exports.userRegister = userRegister
module.exports.userLogin = userLogin