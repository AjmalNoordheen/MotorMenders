import React, { useEffect, useState } from 'react';
import Popup from '../../../Pages/proffesional/Popup';
import { useSelector } from 'react-redux';
import createAxiosInstance from '../../../Axios/proAxios'
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';



const ProffHomes = () => {
  const [one,setOne] = useState()
  const [message,setMessage] = useState(false)
  const ProAxios = createAxiosInstance()
  const email = useSelector((state) =>state.Proffessional.email);
  
useEffect(() => {
  ProAxios.get(`/checkPro?email=${email}`).then((res)=>{
   if(res.data.pro){
    console.log(res.data.pro);
    setOne('show')
    console.log('worked');
   }
  })
}, []);
  
if(message){
  toast.success(message)
}
  return (
    <>   
     {one=='show' ?<Popup fun={setOne} sendMessage={setMessage}/>:<>
  
    <div className="bg-slate-200 flex h-screen">
      <aside className="fixed z-50 md:relative">
      
        <input type="checkbox" className="peer hidden" id="sidebar-open" />
        <label
          className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
          htmlFor="sidebar-open">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <nav
          aria-label="Sidebar Navigation"
          className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-56">
          <div className="bg-slate-800 mt-5 py-4 pl-10 md:mt-10">
            <span className="">
              <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 align-bottom text-2xl font-bold">U</span>
              <span className="text-xl">rbane</span>
            </span>
          </div>
          <ul className="mt-20 space-y-3">
        <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
          <span
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></span
          ><span className="">Overview</span>
        </li>
        <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
          <span
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></span
          ><span className="">Transaction</span>
          <svg className="absolute -top-1/2 -right-1 h-32 w-8 text-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="399.349 57.696 100.163 402.081" width="1em" height="4em">
            <path fill="currentColor" d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z" />
          </svg>
        </li>
        <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
          <span
            ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></span
          ><span className="">Send Money</span>
        </li>
      
      </ul>

         
        </nav>
      </aside>
     

      <div className="flex h-full w-full flex-col">
       
        <header className="relative flex flex-col items-center bg-white px-4 py-2 shadow sm:flex-row md:h-19">
          <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
            <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
              {/* <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg> */}
              {/* <input
                type="name"
                name="search"
                className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
                placeholder="Search for anything"
              /> */}
               <div className=" mt-auto ml-10 flex cursor-pointer">
            <div>
              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Avatar" />
            </div>
            <div className="ml-3">
              <p className="font-medium">Diana Reeves</p>
              <p className="text-sm text-gray-300">Kyiv, Ukraine</p>
            </div>
          </div>
            </div>
          </div>
        </header>
        {/* /Navbar */}

        {/* Main */}
        <div className="h-full overflow-hidden pl-10">
          <main id="dashboard-main" className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10">
            {/* Put your content inside of the <main/> tag */}
            <h1 className="text-2xl font-black text-gray-800">Good Morning!</h1>
            <p className="mb-6 text-gray-600">Here's an overview of your monthly transactions.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-8">
              <div className="h-56 w-72 rounded-xl bg-white p-10 shadow-md"></div>
              <div className="h-56 w-72 rounded-xl bg-white p-10 shadow-md"></div>
              <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
              <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
              <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
            </div>
          </main>
        </div>
        {/* /Main */}
      </div>
    </div>
    </> }
   
    </>
  )
}

export default ProffHomes;
