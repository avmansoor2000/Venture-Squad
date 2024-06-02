const {Admin} = require('../model/adminSchema')

const adminLogin = async(req,res)=> {
    const {email,password} = req.body;

    const admin = await Admin.admins?.findOne(email)
    // console.log(admin,'admin value');
    if(!admin){
        return res.status(401).json({error: "Invalid email or password"})
    }

     res.status(200)

} 

module.exports.adminLogin = adminLogin