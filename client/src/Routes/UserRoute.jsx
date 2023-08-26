import { Route, Routes } from 'react-router-dom'
import React from 'react'
import UserProfile from '../Components/user/UserProfile/UserProfile'
import Home from '../Pages/Home'
import UserSignUp from '../Pages/UserSignUp'
import Userlogin from '../Pages/UserLogin'
import VerifyEmail from '../Pages/VerifyEmail'
import OtpNumer from '../Components/user/otp/OtpNumber'
import ProDetailedPage from '../Pages/ProDetailedPage'
import CheckOut from '../Components/Paypal/CheckOut'
import ProfessionalList from '../Components/user/ListPoffesionals/ProfessionalList'
import SuccessPage from '../Components/Paypal/SuccessPage'
import RazorPay from '../Components/Paypal/RazorPay'
import UsersBooking from '../Pages/User/UsersBooking'

function UserRoute() {
  return (
   
    <>
    <Routes>
    <Route path='' element={<Home/>}/>
      <Route path='/signup'    element={<UserSignUp/>}/>
      <Route path='/login'     element={<Userlogin/>}/>
      <Route path='/verify'    element={<VerifyEmail/>}/>
      <Route path='/otplogin'  element={<OtpNumer/>}/>
     <Route path='/userProfile'element={<UserProfile/>}/>
     <Route path='/proDetails' element={<ProDetailedPage/>}/>
     <Route path='/prolists'   element={<ProfessionalList/>}/>
     <Route path='/razorpay'   element={<CheckOut/>}/>
     <Route path='/razorpayPage' element={<RazorPay/>}/>
     <Route path='/successpage' element={<SuccessPage/>}/>
     <Route path='/bookings' element={<UsersBooking/>}/>
    </Routes>
    </>
  )
}

export default UserRoute