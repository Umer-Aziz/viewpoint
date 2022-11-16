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

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <ScrolltoTop/>
    <Routes>
    <Route path="*" element={<Error/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/blogs" element={<Blogs/>}/>
    <Route exact path="/category/:category" element={<Category/>}/>
    <Route exact path="/article/:slug" element={<BlogDetail/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route exact path="/terms-conditions" element={<Terms/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
