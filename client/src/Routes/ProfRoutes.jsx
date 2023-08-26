import { Route, Routes } from 'react-router-dom'
import React from 'react'
import SignUp from '../Pages/proffesional/SignUp'
import Loginpro from '../Pages/proffesional/Loginpro'
import OtpLogin from '../Pages/proffesional/OtpLogin'
import ProHome from '../Pages/proffesional/ProHome'
import Chats from '../Components/proffesional/Chat/Chats'

function ProfRoutes() {
  return (
    <>
    <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login'  element={<Loginpro/>}/>
        <Route path='/otplogin'  element={<OtpLogin/>}/>
        <Route path='/prohome'  element={<ProHome/>}/>
        <Route path='/proChats'  element={<Chats/>}/>
    </Routes>
    </>

    )
}

export default ProfRoutes
