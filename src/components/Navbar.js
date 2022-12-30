import React, { useState , useEffect , useContext } from 'react'
import { FaGithub , FaLinkedin , FaTwitter ,  FaStackOverflow , FaInstagram ,FaFacebook } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import moment from "moment";
import { Link , NavLink , useLocation } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import Searchbar from './Searchbar';
const Navbar = () => {

    const [ theme , setTheme ] = useState("dark");
    let path = useLocation().pathname;
    const { getSocialLinks , SocialLinks} = useContext(ApiContext);

    useEffect(() => {
      getSocialLinks();
    }, []);

    if(SocialLinks.links){
      var { facebook  , instagram , twitter , github , linkedin , stackoverflow  } = SocialLinks.links[0]
    }
    

    // checking default browser theme 
    useEffect(() => {
      if(window.matchMedia(("prefers-color-scheme:dark"))){
        setTheme("dark")
      }
      else{
        setTheme("light")
      }
    }, [])
    

    // set theme mode 
    useEffect(() => {
      if( theme === "dark"){
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark");
      }
    }, [theme])
    
    const ThemeSwitcher = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    }

    let date = new Date();
    date = moment(date).format('dddd, MMM Do, YYYY');
  return (
    <>
        <div>
            <header className='bg-gray-100 dark:bg-gray-600 dark:bg-opacity-5'>
            <div className='container py-3 flex justify-between text-gray-500 dark:text-gray-100'>
                
                <div className="flex items-center gap-x-4">
                
                    {linkedin && <a href={linkedin} target="_blank" rel='noreferrer'><FaLinkedin className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {github &&  <a href={github} target="_blank" rel='noreferrer'><FaGithub className='cursor-pointer text-md hover:text-gray-700 dark:hover:text-gray-400'/></a>}
                    {stackoverflow && <a to={stackoverflow} target="_blank" rel='noreferrer'><FaStackOverflow className='cursor-pointer text-md hover:text-orange-600'/></a>}
                    {twitter && <a href={twitter} target="_blank" rel='noreferrer'><FaTwitter className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {facebook && <a href={facebook} target="_blank" rel='noreferrer'><FaFacebook className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {instagram && <a href={instagram} target="_blank" rel='noreferrer'><FaInstagram className='cursor-pointer text-md hover:text-orange-500'/></a>}
                    
                </div>

                <div className='flex items-center gap-x-6 sm:gap-x-8'>
                   <ul className='flex gap-x-4 font-semibold'>
                    <li className='hover:text-gray-600 dark:hover:text-gray-300'>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className='hover:text-gray-600 dark:hover:text-gray-300'>
                    <a target="_blank" rel="noreferrer" href="https://umeraziz-engineer.herokuapp.com">About</a>
                    </li>
                   </ul>
                    <span className='hidden sm:block text-sm text-gray-600 dark:text-gray-400 mt-0.5 font-semibold'>{date}</span>
                    <div onClick={ThemeSwitcher} title="Theme">
                {  theme === "light" ?
                    <BsMoonStarsFill className='cursor-pointer text-md hover:text-orange-600'/>:
                    <ImSun className='cursor-pointer text-md dark:text-orange-600 dark:hover:text-gray-300 hover:text-gray-500'/>
                }
                    </div>
                </div>
            </div>
            </header>
            <nav className='container pt-6'>
              <div className='flex justify-between gap-x-6'>
              <NavLink to="/"><img className='w-24 md:32 lg:w-40' src="../img/dark-logo.png" alt="logo" /></NavLink> 
                <Searchbar/>
              </div>
              <ul className='navbar-ul mt-5 flex gap-x-8 !gap-y-0 font-semibold border-b border-gray-500 border-opacity-30
               text-gray-600 dark:text-gray-100 overflow-x-scroll xl:overflow-x-hidden'>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/">Explore</NavLink>
                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/business" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/business">Business</NavLink>
                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/technology" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/technology">Technology</NavLink>
                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/programming" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/programming">Programming</NavLink>
                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/cybersecurity" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/cybersecurity">Cybersecurity</NavLink>

                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/scamming" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/scamming">Scamming</NavLink>

                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/fitness" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/fitness">Fitness</NavLink>

                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/lifestyle" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/lifestyle">lifeStyle</NavLink>

                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 ${path === "/category/sports" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/sports">Sports</NavLink>

                    </li>
                    <li className={`py-2 hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap ${path === "/category/others" && "border-b-2 border-orange-600"}`}>
                        <NavLink to="/category/others">Others</NavLink>

                    </li>
                   </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar