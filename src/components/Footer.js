import React,{useState , useEffect , useContext } from "react";
import { FaGithub , FaLinkedin , FaTwitter ,  FaStackOverflow , FaInstagram ,FaFacebook } from "react-icons/fa";
import { NavLink , Link } from "react-router-dom";
import ApiContext from '../context/ApiContext';

export const Footer = ({Toast}) => {

  const { getSocialLinks , SocialLinks} = useContext(ApiContext);
  const [ subscriber , setSubscriber ] = useState('');

    useEffect(() => {
      getSocialLinks();
    }, []);

    if(SocialLinks.links){
      var { facebook  , instagram , twitter , github , linkedin , stackoverflow  } = SocialLinks.links[0]
    }
    


  const handleChange = (event)=>{
    setSubscriber({ ...subscriber , [event.target.name] : event.target.value })
  }

  const Submitform =async (e)=>{
    e.preventDefault();
    const { email } = subscriber;
    const response = await fetch(`${process.env.REACT_APP_HOST}/subscriber`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ email })
      });
      const subs = await response.json();
      if(subs.success){
        Toast(subs.message);
      } 
      else{
         Toast(subs.Error)
      }
    setSubscriber("");
    
    
  }

    return (
      <div className="bg-gray-100 dark:bg-gray-600 dark:bg-opacity-5">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 xl:max-w-7xl 2xl:px-0">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-2">
              <div>
                <p className="font-medium tracking-wide dark:text-gray-300 text-gray-600">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  
                 
                  <li className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    <NavLink to="/category/technology">Technology</NavLink>
                  </li>
                  <li className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    <NavLink to="/category/programming">Programming</NavLink>
                  </li>
                  <li className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    <NavLink to="/category/programming">CyberSecurity</NavLink>
                  </li>
                  <li className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    <NavLink to="/category/programming">LifeStyle</NavLink>
                  </li>
                  <li className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    <NavLink to="/category/programming">Scamming</NavLink>
                  </li>
                  
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide dark:text-gray-300 text-gray-600">Pages</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to="/blogs"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <a
                     target="_blank"
                     rel="noreferrer"
                      href="https://umeraziz-engineer.herokuapp.com/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Privacy & Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms-conditions"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 md:max-w-md lg:col-span-2">
              <span className="text-base font-medium tracking-wide dark:text-gray-300 text-gray-600">
                Subscribe for updates
              </span>
              <form onSubmit={Submitform} className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="email"
                  name="email"
                  value={subscriber.email || ""}
                  onChange={handleChange}
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-gray-50 text-gray-600 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-gray-100 transition-all duration-500 rounded outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Subscribe to get latest articles in your email box!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-dark sm:flex-row">
            <p className="text-sm text-gray-500 text-center md:text-start">
              © Copyright 2023 Viewpoint Inc. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end mt-4 space-x-4 sm:mt-0 text-md md:text-lg text-gray-500 dark:text-gray-300">
                   
                  {linkedin && <a href={linkedin} target="_blank" rel='noreferrer'><FaLinkedin className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {github &&  <a href={github} target="_blank" rel='noreferrer'><FaGithub className='cursor-pointer text-md hover:text-gray-700 dark:hover:text-gray-400'/></a>}
                    {stackoverflow && <a to={stackoverflow} target="_blank" rel='noreferrer'><FaStackOverflow className='cursor-pointer text-md hover:text-orange-600'/></a>}
                    {twitter && <a href={twitter} target="_blank" rel='noreferrer'><FaTwitter className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {facebook && <a href={facebook} target="_blank" rel='noreferrer'><FaFacebook className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {instagram && <a href={instagram} target="_blank" rel='noreferrer'><FaInstagram className='cursor-pointer text-md hover:text-orange-500'/></a>}
            </div>
          </div>
        </div>
      </div>
    );
  };