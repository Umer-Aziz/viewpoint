import React, { useState , useEffect } from 'react'
import { FaGithub , FaLinkedin , FaTwitter ,  FaStackOverflow } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons//im";
import moment from "moment"
const Navbar = () => {

    const [ theme , setTheme ] = useState(null);

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
            <div className='container flex justify-between text-gray-500 dark:text-gray-100'>
                
                <div className="flex items-center gap-x-4">
                    <FaLinkedin className='cursor-pointer text-md hover:text-blue-500'/>
                    <FaGithub className='cursor-pointer text-md hover:text-gray-700 dark:hover:text-gray-400'/>
                    <FaStackOverflow className='cursor-pointer text-md hover:text-orange-500'/>
                    <FaTwitter className='cursor-pointer text-md hover:text-blue-500'/>
                </div>

                <div className='flex items-center gap-x-6 sm:gap-x-8'>
                   <ul className='flex gap-x-4 font-semibold'>
                    <li className='hover:text-gray-600 dark:hover:text-gray-300'>
                        <a href="/">Blogs</a>
                    </li>
                    <li className='hover:text-gray-600 dark:hover:text-gray-300'>
                        <a href="/">About</a>
                    </li>
                   </ul>
                    <span className='hidden sm:block text-sm text-gray-600 dark:text-gray-400 mt-0.5 font-semibold'>{date}</span>
                    <div onClick={ThemeSwitcher} title="Theme">
                {  theme === "light" ?
                    <BsMoonStarsFill className='cursor-pointer text-md hover:text-yellow-500'/>:
                    <ImSun className='cursor-pointer text-md dark:text-yellow-500 dark:hover:text-gray-300 hover:text-gray-500'/>
                }
                    </div>
                </div>
            </div>
            </header>
        </div>
    </>
  )
}

export default Navbar