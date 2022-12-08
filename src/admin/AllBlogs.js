import React, { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import Sidebar from '../components/admin/Sidebar'
import { useNavigate } from 'react-router-dom'
const AllBlogs = () => {
    
    const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/dashboard/login");
    }
  }, []);

  return (
    <>
    {localStorage.getItem("token") && <main className='container py-10 overflow-x-hidden w-full'>
    <div className='lg:flex '>
    {/* Sidebar  */}
     <Sidebar/>
      {/* All Blogs */}   

       <div className='lg:pl-4 overflow-x-scroll md:overflow-x-hidden w-full'>
            <h4 className="text-2xl text-orange-600 mb-4">All Blogs</h4>
         {/* <!-- component --> */}
        
        <table className="border-collapse w-full max-w-full overflow-x-auto min-w-[43rem] md:min-w-full">
            <thead>
                <tr className='text-gray-600 dark:text-gray-300'>
                    <th className="p-3 font-bold uppercase bg-light-gray dark:bg-dull-gray border border-gray-600 border-opacity-10 dark:border-opacity-30">Blog Title</th>
                    <th className="p-3 font-bold uppercase bg-light-gray dark:bg-dull-gray border border-gray-600 border-opacity-10 dark:border-opacity-30">Date</th>
                    <th className="p-3 font-bold uppercase bg-light-gray dark:bg-dull-gray border border-gray-600 border-opacity-10 dark:border-opacity-30">Status</th>
                    <th className="p-3 font-bold uppercase bg-light-gray dark:bg-dull-gray border border-gray-600 border-opacity-10 dark:border-opacity-30">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-dull-black text-gray-600 dark:text-gray-300
                 lg:hover:bg-gray-100 lg:dark:hover:bg-dull-gray table-row flex-row flex-wrap flex-no-wrap">
                    <td className="w-full max-w-[26rem] p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell">
                        10/12/2022
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <span className="rounded text-gray-800 bg-yellow-400 py-1 px-3 text-xs font-bold">Draft</span>
                        {/* <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">Published</span> */}
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <div className='flex justify-center gap-x-2'>
                        <a href="/" className="text-green-600 hover:text-green-700 md:text-xl"><FaRegEdit/></a>
                        <button className="text-red-600 hover:text-red-700 md:text-xl"><MdDeleteForever/></button>
                        </div>
                    </td>
                </tr>

                <tr className="bg-white dark:bg-dull-black text-gray-600 dark:text-gray-300
                 lg:hover:bg-gray-100 lg:dark:hover:bg-dull-gray table-row flex-row flex-wrap flex-no-wrap">
                    <td className="w-full max-w-[26rem] p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell">
                        10/12/2022
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        {/* <span className="rounded text-gray-800 bg-yellow-400 py-1 px-3 text-xs font-bold">Draft</span> */}
                        <span className="rounded text-gray-800 bg-green-400 py-1 px-3 text-xs font-bold">Published</span>
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <div className='flex justify-center gap-x-2'>
                        <a href="/" className="text-green-600 hover:text-green-700 md:text-xl"><FaRegEdit/></a>
                        <button className="text-red-600 hover:text-red-700 md:text-xl"><MdDeleteForever/></button>
                        </div>
                    </td>
                </tr>

                <tr className="bg-white dark:bg-dull-black text-gray-600 dark:text-gray-300
                 lg:hover:bg-gray-100 lg:dark:hover:bg-dull-gray table-row flex-row flex-wrap flex-no-wrap">
                    <td className="w-full max-w-[26rem] p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell">
                        10/12/2022
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <span className="rounded text-gray-800 bg-yellow-400 py-1 px-3 text-xs font-bold">Draft</span>
                        {/* <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">Published</span> */}
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <div className='flex justify-center gap-x-2'>
                        <a href="/" className="text-green-600 hover:text-green-700 md:text-xl"><FaRegEdit/></a>
                        <button className="text-red-600 hover:text-red-700 md:text-xl"><MdDeleteForever/></button>
                        </div>
                    </td>
                </tr>

                <tr className="bg-white dark:bg-dull-black text-gray-600 dark:text-gray-300
                 lg:hover:bg-gray-100 lg:dark:hover:bg-dull-gray table-row flex-row flex-wrap flex-no-wrap">
                    <td className="w-full max-w-[26rem] p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell">
                        10/12/2022
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        {/* <span className="rounded text-gray-800 bg-yellow-400 py-1 px-3 text-xs font-bold">Draft</span> */}
                        <span className="rounded text-gray-800 bg-green-400 py-1 px-3 text-xs font-bold">Published</span>
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <div className='flex justify-center gap-x-2'>
                        <a href="/" className="text-green-600 hover:text-green-700 md:text-xl"><FaRegEdit/></a>
                        <button className="text-red-600 hover:text-red-700 md:text-xl"><MdDeleteForever/></button>
                        </div>
                    </td>
                </tr>

                <tr className="bg-white dark:bg-dull-black text-gray-600 dark:text-gray-300
                 lg:hover:bg-gray-100 lg:dark:hover:bg-dull-gray table-row flex-row flex-wrap flex-no-wrap">
                    <td className="w-full max-w-[26rem] p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell">
                        10/12/2022
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <span className="rounded text-gray-800 bg-yellow-400 py-1 px-3 text-xs font-bold">Draft</span>
                        {/* <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">Published</span> */}
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <div className='flex justify-center gap-x-2'>
                        <a href="/" className="text-green-600 hover:text-green-700 md:text-xl"><FaRegEdit/></a>
                        <button className="text-red-600 hover:text-red-700 md:text-xl"><MdDeleteForever/></button>
                        </div>
                    </td>
                </tr>
               
            </tbody>
        </table>

        </div>    
      
    </div>
    </main>}
</>
  )
}

export default AllBlogs