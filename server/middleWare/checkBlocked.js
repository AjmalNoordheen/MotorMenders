const UserSchema = require("../Model/userSchema")

const isBlocked = async(req,res,next)=>{
    try {
        const {email} = req.query
        const {nav}  = req.query

        const user = await UserSchema.findOne({email:email})
        if (!user) {
            return res.json({ status: false, message: 'Invalid email' });
          }

        if(user.isBlocked==true){
            res.json({message:'blocked'})
        }
        else if(nav!=true){
            next()
        }else{
            res.json({message:'not found'})
        }
       
    } catch (error) {
        res.status(500)
    }
}

module.exports={isBlocked}