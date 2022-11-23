import React from 'react'
import { FaHome , FaBlog , FaRegEdit } from "react-icons/fa"
import { RiUserSettingsLine , RiLogoutCircleRLine } from "react-icons/ri"
import { MdOutlineAttachEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Sidebar = () => {

    let path = useLocation().pathname;

  return (
    <>
         <section>
            
            <div className="relative border-b lg:border-r lg:border-b-0 border-gray-600 border-opacity-10 dark:border-opacity-30">
                <div className="flex flex-col">
                    <div className="lg:w-56 lg:min-h-[80vh] flex lg:grid">
                        <nav className="flex gap-x-4 lg:flex-col pr-2 md:pr-3 lg:pr-6 text-gray-600 dark:text-gray-300">
                            <NavLink to="/dashboard" className={`sidebar-list group rounded-lg ${path === "/dashboard" && "text-gray-100 bg-orange-600" }`}>
                                <FaHome className={`text-xl -translate-y-0.5 text-orange-600 group-hover:text-gray-300 ${path === "/dashboard" && "text-gray-100" }`}/>
                                <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                                    Dashboard
                                </span>
                            </NavLink>
            
                            <NavLink to="/dashboard/allblogs" className={`sidebar-list group ${path === "/dashboard/allblogs" && "text-gray-100 bg-orange-600" }`}>
                                <FaBlog className={`text-xl -translate-y-0.5 text-orange-600 group-hover:text-gray-300 ${path === "/dashboard/allblogs" && "text-gray-100" }`}/>
                                <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                                 Show All Blogs
                                </span>
                            </NavLink>
            
                            <NavLink to="/dashboard/subscriber" className={`sidebar-list group ${path === "/dashboard/subscriber" && "!text-gray-100 bg-orange-600" }`}>
                                <MdOutlineAttachEmail className={`text-xl -translate-y-0.5 text-orange-600 group-hover:text-gray-300  ${path === "/dashboard/subscriber" && "text-gray-100" }`}/>
                                <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                                    Blogs Subscriber
                                </span>
                            </NavLink>
                            
                            <NavLink to="/dashboard/addblogs" className={`sidebar-list group ${path === "/dashboard/addblogs" && "text-gray-100 bg-orange-600" }`}>
                                <FaRegEdit className={`text-xl -translate-y-0.5 text-orange-600 group-hover:text-gray-300 ${path === "/dashboard/addblogs" && "text-gray-100" }`}/>
                                <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                                    Add New Blog
                                </span>
                            </NavLink>
            
                            <NavLink to="/dashboard/setting" className={`sidebar-list group ${path === "/dashboard/setting" && "text-gray-100 bg-orange-600" }`}>
                                <RiUserSettingsLine className={`text-xl -translate-y-0.5 text-orange-600 group-hover:text-gray-300 ${path === "/dashboard/setting" && "text-gray-100" }`}/>
                                <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                                    Setting
                                </span>
                            </NavLink>
                            
                            
                            
                        </nav>
                        <div className="absolute right-0 lg:left-0 lg:bottom-0 pr-2 md:pr-3 lg:pr-6 text-gray-600 dark:text-gray-300">
                        <a href="/dashboard" className="sidebar-list mb-0 group">
                                <RiLogoutCircleRLine className='text-xl -translate-y-0.5 text-orange-600 group-hover:text-gray-300'/>
                                <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                                    Logout
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
                      </section>
    </>
  )
}

export default Sidebar