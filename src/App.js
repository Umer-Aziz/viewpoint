import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ScrolltoTop from "./components/ScrolltoTop";
import Error from "./pages/404";
import Category from "./pages/Category";
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

function App() {

  const customId = "custom-id-yes";


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
    <Route exact path="/category/:category" element={<Category/>}/>
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
    <Route exact path="/dashboard/setting" element={<Setting/>}/>
    </Routes>
    <Footer Toast={Toast}/>
    </BrowserRouter>
    </ApiState>
   </>
  );
}

export default App;
