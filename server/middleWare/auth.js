const jwt = require('jsonwebtoken')
const env = require('dotenv').config()


const verifyToken = async (req, res, next) => {
    let token    = req.header('Authorization')
    const {data} = req.query.data?req.query.data:''
    try {
        if (!token)return res.json({status:false,token:false, message: "Authentication failed: no token provided." });

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token,process.env.jwtSecretKey);
      if(data==1 && verified){
            res.status(200)
         }else if(verified){
            next()
         }else{
            return res.json({status:false, message: "Authentication failed: invalid token." });
        }
    } catch (error) {
        return res.json({status:false, message: "Authentication failed: invalid token." });
    }
};


const generateToken=(userDetails)=>{
    const k='abc'
    const token = jwt.sign({k,id:userDetails._id,name:userDetails.name,email:userDetails.email},process.env.jwtSecretKey,{expiresIn:'2h'})
    return token
}

module.exports={generateToken,verifyToken}