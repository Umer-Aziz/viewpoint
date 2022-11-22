import React from 'react'
import { FaHome , FaBlog , FaRegEdit } from "react-icons/fa"
import { RiUserSettingsLine , RiLogoutCircleRLine } from "react-icons/ri"
import { MdOutlineAttachEmail } from "react-icons/md"

import Overview from '../components/admin/Overview'

const Dashboard = () => {
  return (
    <>
        <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
        <section>
            
<div className="relative border-b lg:border-r lg:border-b-0 border-gray-600 border-opacity-10 dark:border-opacity-30">
    <div className="flex flex-col">
        <div className="lg:w-56 lg:min-h-[80vh] flex lg:grid">
            <nav className="flex gap-x-4 lg:flex-col pr-2 md:pr-3 lg:pr-6 text-gray-600 dark:text-gray-300">
                <a href="/dashboard" className="sidebar-list text-gray-100 rounded-lg bg-orange-600">
                    <FaHome className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                        Dashboard
                    </span>
                </a>

                <a href="/dashboard" className="sidebar-list">
                    <FaBlog className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                     Show All Blogs
                    </span>
                </a>

                <a href="/dashboard" className="sidebar-list">
                    <MdOutlineAttachEmail className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                        Blogs Subscriber
                    </span>
                </a>
                
                <a href="/dashboard" className="sidebar-list">
                    <FaRegEdit className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                        Add New Blog
                    </span>
                </a>

                <a href="/dashboard" className="sidebar-list">
                    <RiUserSettingsLine className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                        Setting
                    </span>
                </a>
                
                
                
            </nav>
            <div className="absolute right-0 lg:left-0 lg:bottom-0 pr-2 md:pr-3 lg:pr-6">
            <a href="/dashboard" className="sidebar-list mb-0">
                    <RiLogoutCircleRLine className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                        Logout
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>

          </section>

          {/* overview */}      
          <Overview/>
                </div>
        </main>
    </>
  )
}

export default Dashboard