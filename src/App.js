import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";

function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/blogs" element={<Blogs/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
