import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from '../Pages/Admin/Login'
import DashBoard from '../Pages/Admin/DashBoard'
import UserView from '../Pages/Admin/UserView'
import ListtypesPage from '../Pages/Admin/ListTypes'
import ProView from '../Pages/Admin/WorkShop'
import FreelancerView from '../Pages/Admin/FreelancerView'

function AdminRoutes() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    <Route path='/dashbord' element={<DashBoard/>}/>
    <Route path='/userlist' element={<UserView/>}/>
    <Route path='/workshop' element={<ProView/>}/>
    <Route path='/freelancer' element={<FreelancerView/>}/>
    <Route path='/listtypes' element={<ListtypesPage/>}/>
    </Routes>
    </>
  )
}

export default AdminRoutes