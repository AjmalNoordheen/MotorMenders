import { Route, Routes } from "react-router-dom";
import ProfRoutes from "./Routes/ProfRoutes";
import AdminRoutes from "./Routes/adminRoutes";
import UserRoute from "./Routes/UserRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import HomePro from "./Components/proffesional/Home/HomePro";
import Chat from "./Components/user/Chat/Chat";
import Chats from "./Components/proffesional/Chat/Chats";

function App() {
  return (
    <>
      <Routes>
        {/* User */}
        <Route path="/*" element={<UserRoute />} />
        <Route path='/demo'  element={<Chat/>}/>
        <Route path='/proChat'  element={<Chats/>}/>
        {/* proffesional */}
        <Route path="/proffesional/*" element={<ProfRoutes />} />
        {/* Admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
        <ToastContainer autoClose={2000}/> 
    </>
  );
}

export default App;
