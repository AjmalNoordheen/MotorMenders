import React from 'react'
import UserHome from '../Components/user/Homepage/UserHome'
import Navbar from '../Components/user/Navbar/Navbar'
import Footer from '../Components/user/Footer/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <UserHome/>
        <Footer/>
    </>
  )
}

export default Home