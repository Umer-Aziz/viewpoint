import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ScrolltoTop from "./components/ScrolltoTop";
import Error from "./pages/404";

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <ScrolltoTop/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/blogs" element={<Blogs/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
