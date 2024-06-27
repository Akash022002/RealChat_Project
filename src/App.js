import { Fragment } from "react"
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
//import HomeMain from "./Component/HomeMain"
//import About from "./Component/About/About"
//import PremiumBuy from "./Component/Premium/PremiumBuy";
import PremiumMain from "./Component/Premium/PremiumMain";
import HomeMain from "./Component/Home/HomeMain";
import LoginMain from "./Component/login/LoginMain";
import RegistrationMain from "./Component/registration/RegistrationMain";
import ContactMain from "./Component/Contact/ContactMain";
import UserchatMain from "./Component/Userchat/UserchatMain";
import DashboardMain from "./Component/Dashboard/dashboardMain";
import PrePopUp from "./Component/PremiumPOPUP/PrePopUp";
import PaymentMain from "./Component/Payment/PaymentMain";
import Loginshort from "./Component/login/Loginshort";
import AboutMain from "./Component/About/AboutMain";
import Interest from "./Component/ManageInterest/Interest";
import Setting from "./Component/Setting/Setting";
import Test from "./Component/Test/Test";
import TextChat from "./Component/Userchat/TestChat";
//import VideoCall from "./Component/Video/VIdeoChat";

//import Dashboard from "./Component/Dashboard/dashboard";

//Here we are handle all the routing of the page
const Router = createBrowserRouter([
  {path:'/', element:<HomeMain></HomeMain>},
  {path:'/login', element:<LoginMain/>},
  {path:'/register', element:<RegistrationMain/>},
  {path:'/contact',element:<ContactMain/>},
  {path:'/userchat',element:<UserchatMain/>},
  {path:'/premium',element:<PremiumMain/>},
  {path:'/about', element:<AboutMain/>},
  {path:'/dashboard', element:<DashboardMain/>},
  {path:'/popup', element:<PrePopUp/>},
  {path:'/payment', element:<PaymentMain/>},
  {path:'/loginshort',element:<Loginshort/>},
  {path:'/usechat/interest', element:<Interest/>},
  {path:'/userchat/settings',element:<Setting/>},
  {path:'/userchat/textchat',element:<TextChat/>},
  //{path:'/userchat/video', element:<VideoCall/>},
  {path:'/test',element:<Test/>}
])

function App(){ 
  return(
    //Manage main routing page with other associated pages with it.
    <Fragment>
      <RouterProvider router={Router}></RouterProvider>
    </Fragment>
  )
}

export default App;