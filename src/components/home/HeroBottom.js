import React, { useContext , useEffect } from 'react'
import ApiContext from '../../context/ApiContext';
import { Link } from "react-router-dom"
const HeroBottom = () => {

    const { mustreadBlogs , getMustreads } = useContext(ApiContext);

    useEffect(() => {
        getMustreads();
    }, [])
    
  return (
   <>
    <div className='container text-gray-700 dark:text-gray-300'>

        <div className='py-6 md:py-10 border-b border-gray-600 border-opacity-10 dark:border-opacity-30'>
            <h3 className='px-3 py-1 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase'>must read</h3>
            <div className='my-3 grid gap-y-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 md:gap-x-6'>

            {
                mustreadBlogs && mustreadBlogs.map && mustreadBlogs.slice(0,3).map((post)=>{
                    const { _id , title , slug ,  BImg , category } = post;

                    return (
               <Link key={_id} to={`/article/${slug}`}>
                <div className='flex gap-x-4 p-3 shadow-md rounded group cursor-pointer'>
                    <img className='!h-24 !w-32 md:!h-28 md:!w-36 lg:!h-24 lg:!w-32 xl:!h-28 xl:!w-36 bg-cover object-fill rounded-md group-hover:scale-105
                     transition-all duration-300' 
                     src={ BImg } alt="programming-post" />
                    <div>
                        <p className='mt-2 text-sm text-orange-600 font-semibold'>{category}</p>
                        <h4 className='mt-1 text-md md:text-lg lg:!text-md xl:!text-lg font-semibold blog-title'>{title}</h4>
                        <p className='text-xs font-semibold text-orange-700 group-hover:text-orange-800'>Read More</p>
                    </div>
                </div>
            </Link>
                    )
                })
            }
            </div>
        </div>
    </div>
   </>
  )
}

export default HeroBottom