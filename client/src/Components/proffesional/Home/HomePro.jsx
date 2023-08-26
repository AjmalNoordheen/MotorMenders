import React, { useEffect, useState } from "react";
import LineChart from "../chart/LineChart";
import Popup from '../../../Pages/proffesional/Popup';
import { useDispatch, useSelector } from 'react-redux';
import createAxiosInstance from '../../../Axios/proAxios'
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { ProfessionalLogout } from "../../../Redux/ProState";

function HomePro() {
  const [one,setOne] = useState()
  const [message,setMessage] = useState(false)
  const ProAxios = createAxiosInstance()
  const email = useSelector((state) =>state.Proffessional.email);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(email);
useEffect(() => {
  ProAxios.get(`/checkPro?email=${email}`).then((res)=>{
   if(res.data.pro){
    console.log(res.data.pro);
    setOne('show')
    console.log('worked');
   }
  })
}, []);
  
const LogOut = async(req,res)=>{
  try {
    dispatch(ProfessionalLogout())
    navigate('/proffesional/login')
  } catch (error) {
    console.log(error);
  }
}
if(message){
  toast.success(message)
}
  return (
    <>
    {one=='show' ?<Popup fun={setOne} sendMessage={setMessage}/>:<>
    <div className="relative">
      <div className=" w-screen h-[60rem]  lg:h-screen  bg-slate-200 flex justify-between">
        {/* Sidebar */}
        <div className="hidden md:flex  flex-col  lg:w-[14%] bg-white rounded-r-3xl h-[96%] overflow-hidden">
          <div className="flex items-center justify-center h-16 sm:h-20 shadow-md">
            <h1 className="text-2xl sm:text-3xl uppercase text-indigo-500">
              Logo
            </h1>
          </div>
          <ul className="flex flex-col py-2 sm:py-4">
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-10 sm:h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  Dashboard
                </span>
              </a>
            </li>              
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-10 sm:h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-xs sm:text-sm font-medium">Bookings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-10 sm:h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-xs sm:text-sm font-medium">Profile</span>
              </a>
            </li>
            <li>
              <Link
              to={'/proffesional/proChats?'}
                href="#"
                className="flex flex-row items-center h-10 sm:h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-xs sm:text-sm font-medium">Chats</span>
              </Link>
            </li>
            <li>
              <p
                href="#"
                onClick={LogOut}
                className="flex flex-row items-center h-10 sm:h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-xs sm:text-sm font-medium">Logout</span>
              </p>
            </li>
          </ul>
        </div>
        {/* NavBar */}
        <div className="h-[6%] lg:h-[10%] bg-white md:w-[84%]  flex justify-between md:justify-end items-center rounded-es-2xl p-4">
          <div className="flex md:hidden gap-2 justify-center font-semibold text-sm">
            <h1>Dashboard</h1>
            <h1>Bookings</h1>
            <h1>Profile</h1>
            <h1>Logout</h1>
          </div>
          <div className="h-[5%] w-[5%] flex justify-end items-center">
          <h1 className="font-jockey-one font-semibold ml-auto pr-3">Shafin</h1>
            <img src="/profileimage.png" className="" alt="" />
          </div>
        </div>
        </div>
        {/* Main Div */}
        <div className="h-5/6 flex justify-center rounded-sm absolute shadow-md top-[7%] lg:top-[13%] left-1 md:left-[16%] bg-opacity-10 w-[98%] md:w-5/6 bg-black">
          <div className="h-[70%] w-full mt-[1%] ml-[2%]  lg:flex md:gap-x-3">
           <div className="lg:w-4/5  w- flex-col">
            <div className="grid grid-cols-12  w-full lg:flex gap-2 lg:gap-3 lg:justify-center mt-2">
            <div className=" col-span-3  lg:w-[16rem] h-[6rem] rounded-md shadow-md bg-white">

            </div>
            <div className=" col-span-3  lg:w-[16rem] h-[6rem] rounded-md shadow-md bg-white"></div>
            <div className=" col-span-3  lg:w-[16rem] h-[6rem] rounded-md shadow-md bg-white"></div>
            <div className=" col-span-3 mr-2  lg:w-[16rem] h-[6rem] lg:hidden shadow-md  rounded-md bg-white"></div>
            </div>
            <div className="h-[20rem]  lg:h-full w-[99%] lg:w-full ">
            <div className="lg:w-[99%]  mt-4 m-auto h-[100%] rounded-md shadow-md bg-white">
              <LineChart/>
            </div>
            </div>
           </div>
           <div className=" lg:w-[50%] h-[20rem] lg-h-full mt-3 lg:mt-[.8%] space-y-2">
            <div className="w-[95%] h-[44%] mr-5 hidden  lg:flex rounded-md bg-gradient-to-t from-purple-700 to-purple-500 shadow-md ">
            <i class="fa-solid fa-wallet text-xl  text-black ml-2 py-2 mr-auto"></i>
            <p className="m-auto font-semibold">WalletAmount</p>
           <div className="mr-[55%] mt-[20%] font-bold text-3xl"><h1 className="">₹25000</h1></div>
            </div>

            <div className="h-[20rem] w-[99%] lg:w-[95%] grid justify-items-center    mr-5 rounded-md shadow-md bg-white">
              <p className="m-auto font-josefin-sans font-medium">Recent Bookings</p>
              <div className="w-[97%] bg-gray-600 flex items-center  h-16">
               <div className="w-fit  h-16">
               <img src="/profileimage.png" className="h-[60%] w-[100%]" alt="" />
                <h1>Shafin</h1>
               </div>
              </div>
              <div className="w-[97%] bg-black h-16"></div>
              <div className="w-[97%] bg-black h-16"></div>
              <div className="w-[97%] bg-black h-16"></div>
            </div>
           </div>
          </div>
      </div>
    </div>
    </>}
    </>
  );
}

export default HomePro;
