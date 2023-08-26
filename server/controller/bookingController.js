const bookingSchema = require('../Model/BookingSchema');
const UserSchema = require('../Model/userSchema');
const proSchema  = require('../Model/mechanicSchema')
// ============Save Booking Details==============
    const BookingDetails = async(req,res)=>{
        try {
            const {bookingData} = req.body
            
            const date =new Date( bookingData.date)
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);            
            const user = await UserSchema.findOne({email:bookingData.userEmail})
            const BookingSave = await bookingSchema.create({
                user:user._id,
                mechanic:bookingData.proDetails._id,
                BookingDate:formattedDate,
                unSavedDate:bookingData.date,
                fees:bookingData.fees,
                location:bookingData.location,
                landmark:bookingData.landMark
            })
            if(BookingSave){
                res.json({status:'success'})
            }else{
                res.status(500)
            }
        } catch (error) {
            res.status(500)
        }
    }


//============================bookingExist ==================

const bookingExist = async (req,res)=>{
   try {
    const {email} = req.query

    const pro =await proSchema.findOne({email:email})

    const dateExist = await bookingSchema.find({mechanic:pro._id})
    const unSavedDates = dateExist.map((doc) => doc.unSavedDate).map((doc)=> doc.toISOString().split('T')[0]);
    if(unSavedDates){
        res.status(200).json({unSavedDates})
    }else{
        res.json({status:'no date'})
    }
    
   } catch (error) {
   res.status(500)
   }
}

// ======================getUserBooking ==================

const getUserBooking = async (req,res)=>{
    try {
        const email = req.query.email
        const status = req.query.status
        const user = await UserSchema.findOne({email:email})
        if(status=='pending'){
            const bookingDetails = await bookingSchema.find({user:user._id,status:'pending'}).populate('mechanic')
            const date =new Date( bookingDetails.BookingDate)
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                const formattedDate = date.toLocaleDateString('en-US', options);   
           if(bookingDetails){
            res.status(200).json({bookingDetails,Date:formattedDate})
        }
       
       }else if(status=='completed'){
        const bookingDetails = await bookingSchema.find({user:user._id,status:'completed'}).populate('mechanic')
        const date =new Date( bookingDetails.BookingDate)
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);   
        if(bookingDetails){
        res.status(200).json({bookingDetails,Date:formattedDate})
    }
       }else if(status=='cancelled'){
        const bookingDetails = await bookingSchema.find({user:user._id,status:'cancelled'}).populate('mechanic')
        const date =new Date( bookingDetails.BookingDate)
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);   
        if(bookingDetails){
        res.status(200).json({bookingDetails,Date:formattedDate})
       }
       res.json({message:'false'})
      } 
    } catch (error) {
        res.status(500)
    }
}


// ======================== CancelBooking ================
    const cancelBooking = async (req,res)=>{
        try {
            const {id} = req.query
            console.log(id);
            const updatedData = await bookingSchema.updateOne({_id:id},{$set:{status:'cancelled'}}) 
            if(updatedData){
                res.status(200).json({message:'success'})
            }else{
                res.json({message:'no data'})
            }
        } catch (error) {
            res.status(500)
        }
    }

module.exports={BookingDetails,bookingExist,getUserBooking,cancelBooking}