import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { FaBlog } from "react-icons/fa"
import { MdPendingActions , MdOutlineAttachEmail } from "react-icons/md"


const Overview = () => {
  return (
    <>
       <div>
       <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-orange-600'>Overview</h1>
            <a href="/" className='flex items-center text-orange-600 gap-x-2 py-2 px-4 uppercase border rounded border-orange-600 hover:text-gray-100 hover:bg-orange-600'>
             <AiOutlinePlus className='font-semibold'/> 
             <span>new posts</span>
             </a>
            </div>

            <div className="py-8 grid grid-cols-3 gap-6">
            
                <div className='py-4 flex flex-col items-center border border-orange-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105'>
                <FaBlog className='text-2xl text-orange-600 '/>
                <p className='pt-3 pb-2 text-3xl font-semibold'>41</p>
                <h6 className='text-2xl font-semibold'>Total Blogs</h6>
                </div>
                <div className='py-4 flex flex-col items-center border border-orange-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105'>
                <MdPendingActions className='text-2xl text-orange-600 '/>
                <p className='pt-3 pb-2 text-3xl font-semibold'>13</p>
                <h6 className='text-2xl font-semibold'>Pending Blogs</h6>
                </div>

                <div className='py-4 flex flex-col items-center border border-orange-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105'>
                <MdOutlineAttachEmail className='text-2xl text-orange-600 '/>
                <p className='pt-3 pb-2 text-3xl font-semibold'>17</p>
                <h6 className='text-2xl font-semibold'>Blogs Subscriber</h6>
                </div>

            </div>
       </div>
    </>
  )
}

export default Overview