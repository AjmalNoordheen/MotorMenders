import React, { useEffect, useState, } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import createAxiosInstance from '../../../Axios/userAxios'
import proAxiosInstance from '../../../Axios/proAxios'
import ViewMap from "../../ReuseItems/ViewMap";
import { ClientLogout } from "../../../Redux/userState";


function ProDetailPage({email}) {
 
  const [date, setDate] = useState(new Date());
  const [prof,setProf]  = useState('')
  const [confirm,setCo]  = useState('')
  const [existDate,setExistDate]  = useState([])
  const [selectdate, setSelectDate] = useState("");
  const [excixt, setExsit] = useState(0);
  const userAxios = createAxiosInstance()
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const Token = useSelector((state)=>state.Client.Token)
  const userEmail = useSelector((state)=>state.Client.email)
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);

  useEffect(()=>{
     userAxios.get(`/proSingleDetails?proEmail=${email}&email=${userEmail}`).then((res)=>{
      if(res.data.message=='blocked'){
        toast.error('Account is blocked ')
        setTimeout(() => {
          dispatch(ClientLogout(''))
          navigate('/login')
        }, 300);
        return
      }  
      if(res.data.status=='success'){
          setProf(res.data.data)
        }
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  
  useEffect(()=>{
         userAxios.get(`/bookingExist?email=${email}`).then((res)=>{
          if(res.data.message=='blocked'){
            toast.error('Account is blocked ')
            setTimeout(() => {
              navigate('/login')
            }, 300);
            return
          }
        if(res.data.unSavedDates){
          setExsit(1)
          setExistDate(res.data.unSavedDates)
          console.log(existDate);
        }else{
          toast.error(res.data.status)
        }
      }).catch((err)=>{console.log(err);  toast.error(err)})  

    
  },[])

  const handleDateClick = (date)=>{
    setDate(date)
    setSelectDate(date)
  }

  const viewDay = ()=>{
    setCo(date)
    console.log(confirm);
  }

  const fiveDaysFromNow = new Date();
  fiveDaysFromNow.setDate(fiveDaysFromNow.getDate());
  const prevDate = new Date(fiveDaysFromNow); 
  prevDate.setDate(prevDate.getDate() + 5);

  
  const tileDisabled = (date) => {
    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 1);
    const fiveDaysFromNow = new Date(prevDate);
    prevDate.setDate(fiveDaysFromNow.getDate() + 4);
    const currentDateStr = date.toISOString().split('T')[0];
    // Disable dates before today and 5 days after today
    return currentDateStr < fiveDaysFromNow.toISOString().split('T')[0] ||
    currentDateStr > prevDate.toISOString().split('T')[0] ||
    existDate.includes(currentDateStr)
  };

  const tileClassName = ({ date }) => {
    if (tileDisabled(date)) {
      return "disabled-tile hover:bg-red-600  text-slate-400 "; // Apply custom style for disabled dates
    }
    if (date.toDateString() === new Date().toDateString()-1) {
      return "today-tile hover:bg-green-600 transition-colors"; // Apply custom style for today's date
    }
    if (selectdate!="" && selectdate.toDateString() === date.toDateString()) {
      return "selected-tile bg-green-500 hover:bg-green-600 transition-colors ";
    }
    return "hover:bg-green-600 transition-colors ";
  };


  const proData={
    profDetails:prof,
    bookingDate:selectdate
  }
 
 useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (positions) => {
          setUserLatitude(positions.coords.latitude)
          setUserLongitude(positions.coords.longitude)
		
        },
        (error) => {
          console.error("Error getting user's location:", error);
	       toast.error('Please allow location permission')

        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="w-full min-h-screen p-4 md:p-10 flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-screen-lg p-6 md:p-10 mx-auto relative rounded bg-white shadow-md">
        <div className="border w-11/12 left-11 absolute top-16 border-gray-300"></div>
        <div className="flex flex-col md:flex-row md:gap-5 md:pt-10 relative">
          <div className="md:relative">
            <img
              src={prof.image?prof.image:'/profileimage.png'}
              className="w-36 h-36 md:w-44 rounded-full md:h-44 md:left-16"
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:w-2/3">
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-4xl font-josefin-sans font-bold">
               {prof.name?prof.name:''}
              </h1>
              <div className="mt-2 md:mt-4">
                <p className="text-base font-josefin-sans md:text-lg">
                  Profession: {prof.work?prof.work:''}
                </p>
                <p className="text-base font-josefin-sans md:text-lg">
                  Vehicle Type: <br />
                   <span className="text-sm"> {prof.types?prof.types.map((item)=>item.name).join('  /'):''} </span>
                </p>
                <div className="flex items-center">
                  <p className="text-base font-josefin-sans md:text-lg">
                    Ranking:
                  </p>
                  <div className="ml-2 ">
                    {/* You can use star icons for rating */}
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-1/3 mt-12">
              <div className="flex items-center mb-2 md:mb-4">
                <img
                  src="/footer/tick.png"
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <p className="ml-2 text-base font-josefin-sans md:text-lg">
                 {prof.location?prof.location:''}
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="/footer/tick.png"
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                <p className="ml-2 text-base font-josefin-sans md:text-lg">
                  Available for Chat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto h-1 border-t-2 border-gray-300 mt-5" />
        <div className="flex flex-col md:flex-row items-center gap-6 md:justify-center">
          <div className="pb-5 font- md:pb-0 md:mb-10 grid gap-2  md:ml-4">
            <p className="text-base font-josefin-sans  md:text-lg">
              Service Fee:₹ {prof.fees?prof.fees:''}
            </p>
            <p className="text-base font-josefin-sans  md:text-lg">
              Email: {prof.email?prof.email:''}
            </p>
            <p className="text-base font-josefin-sans  md:text-lg">Address:</p>
            <p className="text-sm font-josefin-sans md:text-base md:ml-2">
                {prof.address?prof.address:''}
            </p>
            <p className="text-base md:text-lg font-josefin-sans">
              Working Hours: {prof.workingTime?prof.workingTime:''}
            </p>
          </div>
          <div className="hidden md:block h-[15rem]  border border-gray-300"></div>
          <div className="w-full md:w-[28rem]">
            <div className="mx-auto my-5 flex flex-col items-center">
              <div className="h-[12rem] w-2/3 align-middle border rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-bg-[#793be4] to-blue-700 text-white">
                <div className="flex justify-center items-center h-full">
                  <Calendar
                   
                    value={date}
                    className="p-4 bg-blue-700 rounded-lg "
                    tileClassName={tileClassName}
                   onViewChange={viewDay}
                    prev2Label=""
                    next2Label=""
                    minDate={fiveDaysFromNow} 
                    maxDate={prevDate}
                    tileDisabled={({ date }) =>{if(excixt == 1){
                      tileDisabled(date)}else {
                        tileDisabled(date)
                      }
                    } 
                  }                   
                    onClickDay={handleDateClick} // Pass the function here
                  />
                </div>
              </div>
              {Token? <button onClick={()=>navigate('/razorpay',{state:proData})} className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-colors transform hover:scale-105">
                Book Now
              </button>:
               <button onClick={()=>toast('login for continue')} className="mt-4 px-6 py-2 bg-blue-400 text-white rounded-lg shadow-md transition-colors transform hover:scale-105">
               Book Now
             </button>}
             
            </div>
          </div>
        </div>
        <hr />
        <ViewMap email={email}
         userLongitude={userLongitude}
         userLatitude={userLatitude}
        />
        <h1 className="mt-8 md:mt-12 text-lg md:text-xl font-semibold">
          Previous Works
        </h1>
        <div className="w-11/12 mx-auto border border-gray-300 mt-3" />
        <div className="w-11/12 h-[15rem] mx-auto mt-3 bg-black" />
      </div>
    </div>
  );
}

export default ProDetailPage;
