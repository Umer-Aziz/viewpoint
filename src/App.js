import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ScrolltoTop from "./components/ScrolltoTop";
import Error from "./pages/404";
import Business from "./pages/Category/Business";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import BlogDetail from "./pages/BlogDetail";
import Dashboard from "./admin/Dashboard";
import AllBlogs from "./admin/AllBlogs";
import BlogSubscriber from "./admin/BlogSubscriber";
import AddBlogs from "./admin/AddBlogs";
import Setting from "./admin/Setting";
import Login from "./admin/Login";
import ApiState from "./context/ApiState";
import { ToastContainer, toast , Zoom } from 'react-toastify';
import EditBlogs from "./admin/EditBlogs";
import Technology from "./pages/Category/Technology";
import Programming from "./pages/Category/Programming";
import Cybersecurity from "./pages/Category/Cybersecurity";
import Scamming from "./pages/Category/Scamming";
import Fitness from "./pages/Category/Fitness";
import LifeStyle from "./pages/Category/LifeStyle";
import Sports from "./pages/Category/Sports";
import Other from "./pages/Category/Other";

function App() {

  const customId = "custom-id-yes";

  // function checkURLchange(){
//   if(window.location.href != oldURL){
//     window.location.reload()
//       oldURL = window.location.href;
//   }
// }

// var oldURL = window.location.href;
// setInterval(checkURLchange, 1000);

  const Toast = (text)=>{
    toast.info(text, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:"colored",
        transition: Zoom , 
        toastId: customId
        });
}

  return (
   <>
  
  <ApiState>
    <ToastContainer toastStyle={{ backgroundColor: "#ea4c13" }}/>
   <BrowserRouter>
    <ScrolltoTop/>
    <Navbar/>
    <Routes>
    <Route path="*" element={<Error/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/blogs" element={<Blogs/>}/>
     
     {/* Category pages  */}
    <Route exact path="/category/Business" element={<Business/>}/>
    <Route exact path="/category/technology" element={<Technology/>}/>
    <Route exact path="/category/programming" element={<Programming/>}/>
    <Route exact path="/category/cybersecurity" element={<Cybersecurity/>}/>
    <Route exact path="/category/scamming" element={<Scamming/>}/>
    <Route exact path="/category/fitness" element={<Fitness/>}/>
    <Route exact path="/category/lifestyle" element={<LifeStyle/>}/>
    <Route exact path="/category/sports" element={<Sports/>}/>
    <Route exact path="/category/others" element={<Other/>}/>

    <Route exact path="/article/:slug" element={<BlogDetail Toast={Toast}/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route exact path="/terms-conditions" element={<Terms/>}/>

    {/* admin Routes  */}
    <Route exact path="/dashboard" element={<Dashboard Toast={Toast}/>}/>
    <Route exact path="/dashboard/login" element={<Login Toast={Toast}/>}/>
    <Route exact path="/dashboard/allblogs" element={<AllBlogs Toast={Toast}/>}/>
    <Route exact path="/dashboard/subscriber" element={<BlogSubscriber Toast={Toast}/>}/>
    <Route exact path="/dashboard/addblogs" element={<AddBlogs Toast={Toast}/>}/>
    <Route exact path="/dashboard/editblogs/:slug" element={<EditBlogs Toast={Toast}/>}/>
    <Route exact path="/dashboard/setting" element={<Setting Toast={Toast}/>}/>
    </Routes>
    <Footer Toast={Toast}/>
    </BrowserRouter>
    </ApiState>
   </>
  );
}

export default App;
