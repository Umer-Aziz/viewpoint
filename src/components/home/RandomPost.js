import React, { useContext , useEffect } from 'react'
import { WiTime8 } from "react-icons/wi";
import ApiContext from '../../context/ApiContext';
import moment from "moment";
import { Link } from 'react-router-dom';
const RandomPost = () => {

  const { RandomBlogs , getRandomPosts } = useContext(ApiContext);

  useEffect(() => {
   getRandomPosts()
  }, [])
  
  return (
    <>
        <div className='container py-10 text-gray-700 dark:text-gray-300'>

            <h3 className="px-3 py-1 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase">Random Posts</h3>
            
            <div className='my-6 grid gap-y-6 lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8'>

            {
              RandomBlogs && RandomBlogs.map && RandomBlogs.slice(0,1).map((post)=>{
                const { _id , slug , title , BImg , description , category , updatedAt } = post;
                    const date = moment(updatedAt).format("D MMMM , YYYY");
                return (
                  <Link key={_id} to={`/article/${slug}`}>
                  <div className='py-3 shadow rounded xl:min-w-[38rem] group cursor-pointer'>
                  <div className='overflow-hidden w-full rounded md:rounded-md'>
                      <img className='bg-cover object-fill rounded lg:rounded-md w-full lg:min-h-[20rem]
                       xl:min-h-[24rem] group-hover:scale-105 transition-all duration-500'
                      src={BImg} alt="random-posts" />
                    </div>
                    <div className='px-3 lg:px-4'>
                    <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold capitalize">{category}</p>
                    <h3 className="my-2 text-xl font-semibold blog-title">{title}</h3>
                    <p className='hidden xl:block my-1 blog-description'>{description}</p>
                    <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                        <WiTime8 className="text-sm" />
                        <span className="text-sm font-semibold">
                          {date}
                        </span>
                      </p>
                    </div>
                  </div>
                  </Link>
                )
              })
            }

              <div className='grid grid-cols-2 gap-3 lg:gap-x-4'>

              {
                RandomBlogs && RandomBlogs.map && RandomBlogs.slice(1,5).map((post)=>{
                  const { _id , slug , title , BImg  , category , updatedAt } = post;
                    const date = moment(updatedAt).format("D MMMM , YYYY")
                  return (
                    <Link key={_id} to={`/article/${slug}`}>
                    <div className='p-1 md:p-2 shadow rounded relative group cursor-pointer'>
                      <div className='rounded overflow-hidden w-full'>
                        <img className='bg-cover h-24 md:h-48 lg:h-40 xl:h-52 w-full brightness-75 group-hover:brightness-100 
                        object-cover group-hover:scale-105 transition-all duration-500 rounded'
                         src={BImg} alt="random-small-post" />
                      </div>
                      <div>
                      <p className="absolute top-1 left-1 md:top-2 md:left-2 text-xs 
                       font-semibold capitalize bg-orange-600 p-1 rounded">{category}</p>
                      <h3 className="my-1 text-sm md:my-2 md:text-md font-semibold blog-title">{title}</h3>
                        <p className="text-xs lg:text-sm flex items-center gap-x-1 text-gray-500">
                          <WiTime8/>
                          <span className="font-semibold">
                          {date}
                          </span>
                        </p>
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

export default RandomPost