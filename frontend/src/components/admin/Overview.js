import React, { useEffect , useContext } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { FaBlog , FaRegEdit } from "react-icons/fa"
import { MdPendingActions , MdOutlineAttachEmail , MdDeleteForever } from "react-icons/md"
import PieChart from './PieChart'
import { Link, NavLink } from 'react-router-dom';
import ApiContext from "../../context/ApiContext"
import moment from 'moment'

const Overview = ({Toast}) => {
    const { GetAllBlogs , GetAllPendingBlogs , GetSubscriber, deleteBlogs, Allblogs , pending , blogSubscriber} = useContext(ApiContext);
    useEffect(()=>{
        GetAllBlogs();
        GetAllPendingBlogs();
        GetSubscriber();
    },[]);
    
    let Bloglength , pendinglength , Subscriberlength;
    if((Allblogs && Allblogs.length )||( pending && pending.length) ||( blogSubscriber.subs && blogSubscriber.subs.length) ){
         Bloglength = Allblogs.length;
         pendinglength = pending.length;
         Subscriberlength = blogSubscriber.subs.length;
    }

  return (
    <>
    <section className='py-6 lg:py-0 lg:pl-4 text-gray-600 dark:text-gray-300 w-full'>
       <div>
       <div className='flex justify-between items-center'>
            <h1 className='text-2xl text-orange-600'>Overview</h1>
            <Link to="/dashboard/addblogs" className='flex items-center text-orange-600 gap-x-2 py-2 px-4 uppercase border rounded border-orange-600 hover:text-gray-100 hover:bg-orange-600'>
             <AiOutlinePlus className='font-semibold'/> 
             <span>new post</span>
             </Link>
            </div>

            <div className="py-8 grid md:grid-cols-3 gap-6">
            
                <div className='py-4 flex flex-col items-center border border-orange-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105'>
                <FaBlog className='text-2xl text-orange-600 '/>
                <p className='pt-3 pb-2 text-3xl font-semibold'>{Bloglength || 0 }</p>
                <h6 className='text-2xl font-semibold'>Total Blogs</h6>
                </div>
                <div className='py-4 flex flex-col items-center border border-orange-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105'>
                <MdPendingActions className='text-2xl text-orange-600 '/>
                <p className='pt-3 pb-2 text-3xl font-semibold'>{pendinglength || 0 }</p>
                <h6 className='text-2xl font-semibold'>Pending Blogs</h6>
                </div>

                <div className='py-4 flex flex-col items-center border border-orange-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105'>
                <MdOutlineAttachEmail className='text-2xl text-orange-600 '/>
                <p className='pt-3 pb-2 text-3xl font-semibold'>{Subscriberlength || 0}</p>
                <h6 className='text-2xl font-semibold'>Blogs Subscriber</h6>
                </div>

            </div>

            {/* recent posts  */}

            <section className='py-8'>
                <div className='grid xl:flex gap-8'>
                {/* chart  */}
        <div className='flex justify-center max-w-md mx-auto'>
        <PieChart/>
        </div>
            <div className='xl:w-4/6 overflow-x-scroll md:overflow-x-hidden'>
            <h4 className="text-2xl text-orange-600 mb-4">Recent Blogs</h4>
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
            {
                Allblogs && Allblogs.slice(0,11).map((blog)=>{
                    const {_id , title , slug , updatedAt , status } = blog;
                    const date = moment(updatedAt).format("MMM Do , YYYY");
                    return (
                    <tr key={_id} className="bg-white dark:bg-dull-black text-gray-600 dark:text-gray-300
                 lg:hover:bg-gray-100 lg:dark:hover:bg-dull-gray table-row flex-row flex-wrap flex-no-wrap">
                    <td className="w-full max-w-[26rem] p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                    {title}
                    </td>
                    <td className="w-full min-w-[10rem] p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell">
                        {date}
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                    <span className={`rounded text-gray-800 ${status ==="published" ? 'bg-green-400': 'bg-yellow-400'} py-1 px-3 text-xs font-bold capitalize`}>{status}</span>
                    </td>
                    <td className="w-full p-3 text-center border border-b border-gray-600 border-opacity-10 dark:border-opacity-30 table-cell ">
                        <div className='flex justify-center gap-x-2'>
                        <NavLink to={`/dashboard/editblogs/${slug}`}className="text-green-600 hover:text-green-700 md:text-xl"><FaRegEdit/></NavLink>
                        <button onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to Delete this Blog from database?"
                            )
                          ) {
                            // Delete it!
                            deleteBlogs(_id);
                            Toast("Blog has been deleted!")
                          }
                        }} className="text-red-600 hover:text-red-700 md:text-xl"><MdDeleteForever/></button>
                        </div>
                    </td>
                </tr> 
                    )
                })
            }
               
            </tbody>
        </table>

        </div> 
                </div>
            </section>

       </div>
       </section>
    </>
  )
}

export default Overview