import React from 'react'
import { FaHome } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"

const Dashboard = () => {
  return (
    <>
        <main className='container py-10'>
        <div className='flex '>
        {/* Sidebar  */}
          <section>
            
<div className="relative border-r border-gray-600 border-opacity-10 dark:border-opacity-30">
    <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="lg:w-56 min-h-[80vh]">
            <nav className="pr-2 md:pr-3 lg:pr-6 text-gray-600 dark:text-gray-300">
                <a href="/dashboard" className="sidebar-list text-gray-100 rounded-lg bg-orange-600">
                    <FaHome className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                        Dashboard
                    </span>
                </a>

                <a href="/dashboard" className="sidebar-list">
                    <FaHome className='text-xl -translate-y-0.5'/>
                    <span className="mx-4 md:text-lg font-normal hidden lg:flex">
                        Dashboard
                    </span>
                </a>
                
                
                
            </nav>
            <div className="absolute bottom-0 mt-10">
                <a href="/" className="flex items-center py-2 pr-8">
                    <svg width="20" fill="currentColor" height="20" className="h-5 w-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                        </path>
                    </svg>
                    <span className="mx-4 font-medium">
                        Support
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>

          </section>

          {/* overview */}
          <section className='pl-4 text-gray-600 dark:text-gray-300 w-full'>
          <div>

            <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-orange-600'>Overview</h1>
            <a href="/" className='flex items-center text-orange-600 gap-x-2 py-2 px-4 uppercase border rounded border-orange-600 hover:text-gray-100 hover:bg-orange-600'>
             <AiOutlinePlus className='font-semibold'/> 
             <span>new posts</span>
             </a>
            </div>
          </div>
          </section>
        </div>
        </main>
    </>
  )
}

export default Dashboard