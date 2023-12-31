import React from 'react'
import NavBar from '../Components/user/Navbar/Navbar'
import ProDetailPage from '../Components/user/ProfessionalDetails/ProDetailPage'
import Footer from '../Components/user/Footer/Footer'
import { useLocation } from 'react-router-dom'

function ProDetailedPage({Proemail}) {
  const location = useLocation()
  Proemail = location.state
  return (
   <>
  <div className='w-full bg-[#793be4]'>
  <NavBar data={1}/>
  </div>
   <ProDetailPage email={Proemail}/>
   <Footer/>
   </>
  )
}

export default ProDetailedPage