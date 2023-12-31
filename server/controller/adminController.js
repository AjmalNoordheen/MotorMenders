const authToken   = require('../middleWare/auth')
const adminSchema = require('../Model/adminSchema');
const UserSchema  = require("../Model/userSchema");
const typeSchema  = require('../Model/TypeSchema')
const proSchema   = require('../Model/mechanicSchema')
// ============Admin Login============

const adminLogin = async(req,res)=>{
    try {
       const data = req.body
       const user = await adminSchema.findOne({email:data.email})     
       if(user){
           if(user.password==data.rpassword){
               if(user.isAdmin){
            let userSignUp={
                Status: false,
                message: null,
                token: null,
                name: null,
            }
            const token = authToken.generateToken(user)
            userSignUp.Status  = true,
            userSignUp.message = 'you are logged in',
            userSignUp.token   = token,
            userSignUp.name    = user.email
            return  res.json({userSignUp})

           }else{
            res.json({status:false,message:'not an Admin'})
           }
        }else{
            res.json({status:false,message:'password dosent match'})
        }
       }else{
        res.json({status:false,message:'not an Admin'})
       }
    } catch (error) {
        console.log(error);
    }
}

// ===========Block User====================

const blockuser = async(req,res)=>{
    try {
        console.log(req.body.type)
        if(req.body.type=='user'){
            const user = await UserSchema.findOne({_id:req.body.userid})
            if(user.isBlocked==false){
                const details = await UserSchema.updateOne({_id:req.body.userid},{$set:{isBlocked:true,status:'Blocked'}})
               return res.status(200).json({message:'user blocked'})   
            }else{
                const details = await UserSchema.updateOne({_id:req.body.userid},{$set:{isBlocked:false,status:'Active'}})
               return res.status(200).json({message:'user unblocked'})   
            }
        }else if(req.body.type==='pro'){
            const prof = await proSchema.findOne({_id:req.body.userid})
            if(prof.isBlocked==false){
                const details = await proSchema.updateOne({_id:req.body.userid},{$set:{isBlocked:true,status:'Blocked'}})
               return res.status(200).json({message:'user blocked'})   
            }else{
                const details = await proSchema.updateOne({_id:req.body.userid},{$set:{isBlocked:false,status:'Active'}})
               return res.status(200).json({message:'user unblocked'})   
            }
        }
      
    } catch (error) {
        res.status(500)
    }
}

// ==================Add Types============
    
const listType =async (req,res)=>{
    try {
        const {typeList} = req.body
        console.log(typeList);
        const duplicate = await typeSchema.findOne({name:typeList})
        console.log(duplicate);
        if(duplicate){
            res.json({status:false,message:'Category already exists'})
        }else{
            const types = await typeSchema.create({
                name:typeList
            })
            if(types){
                res.status(200).json({status:true,types})
            }
        }
       
    } catch (error) {
        res.status(500).json({error})
    }
    }

//==========================display TypeList ======================

    const displayType = async(req,res)=>{
        try {
            const list = await typeSchema.find()
            if(list){
                res.status(200).json({list})
            }else{
                res.status(500)
            }
        } catch (error) {
            res.status(500)
        }
    }

//==============Delete Type====================
     const deleteType  = async(req,res)=>{
        try {
            const type_id =req.query.id
            const exists = await proSchema.findOne({types:type_id})
            if(exists){
                return res.json({status:false,message:'user Exists in this type'})
            }
            else{
               await typeSchema.deleteOne({_id:type_id})
               res.json({status:true,message:'success',check:1})
            }

        } catch (error) {
            res.json({error})
        }
     }

// =========================Edit Type===============
     const editType = async(req,res)=>{
        try {
         const edited = req.query
         console.log(edited.oldData);
        
         const duplicate =  await typeSchema.findOne({name:edited.newData})
         if(duplicate){
            return res.json({status:false,message:'categort already exists'})
         }

         if(edited){
           const newData = await typeSchema.updateOne({name:edited.oldData},{$set:{name:edited.editedData}})
           if(newData){
            res.status(200).json({status:true,success:newData.name})
           }else{
            res.status(500).json({status:false,message:'somethind went Wrong'})
           }
         }
        } catch (error) {
            res.status(500)
        }
     }

     // =============Users Lists=============

  const listUsers = async(req,res)=>{
    try {
      // console.log(req.user._id);
      const userList = await UserSchema.find()
      if(userList){
        res.status(200).json({userList})
      }else{
        res.status(500).json({message:'users are empty'})
      }
    } catch (error) {
      res.status(500).json({error})
    }
  }

  
// =========================List Freelancers=====================
const listFreelancer = async(req,res)=>{
    try {
      const Freelancer = await proSchema.find({work:'freelancer'}).populate('types')
      console.log(Freelancer.types);
      if(Freelancer){
        res.status(200).json({Freelancer})
      }else{
        res.status(500)
      }
    } catch (error) {
      res.status(500)
    }
  }

  
  // ========Get Mechanic ==================
  const getMechanic = async(req,res)=>{
    try {
      const {id} = req.query
      const proDetails = await proSchema.findOne({_id:id})
    } catch (error) {
      
    }
  }
module.exports={adminLogin,blockuser,listType,
                deleteType,displayType,editType,listUsers,
                listFreelancer,getMechanic}