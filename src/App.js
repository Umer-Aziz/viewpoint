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
import Login from "./components/admin/Login";

function App() {

  return (
   <>
   <BrowserRouter>
    <ScrolltoTop/>
    <Navbar/>
    <Routes>
    <Route path="*" element={<Error/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/blogs" element={<Blogs/>}/>
    <Route exact path="/category/:category" element={<Category/>}/>
    <Route exact path="/article/:slug" element={<BlogDetail/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route exact path="/terms-conditions" element={<Terms/>}/>

    {/* admin Routes  */}
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route exact path="/dashboard/login" element={<Login/>}/>
    <Route exact path="/dashboard/allblogs" element={<AllBlogs/>}/>
    <Route exact path="/dashboard/subscriber" element={<BlogSubscriber/>}/>
    <Route exact path="/dashboard/addblogs" element={<AddBlogs/>}/>
    <Route exact path="/dashboard/setting" element={<Setting/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
