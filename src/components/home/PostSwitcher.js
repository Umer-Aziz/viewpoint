import React,{useEffect, useState , useContext } from 'react'
import { WiTime8 } from "react-icons/wi";
import ApiContext from '../../context/ApiContext';
import moment from 'moment';
const PostSwitcher = () => {
    const [show, setShow] = useState(true);
    const { getLatestBlogs , getTrendingBlogs , latestBlog , trendingBlog } = useContext(ApiContext);
    const { updatedAt } = trendingBlog;
    const trendingdate = moment(updatedAt).format('Do  MMMM, YYYY');
    const latestDate = moment(latestBlog.updatedAt).format('Do  MMMM, YYYY');

    
    useEffect(()=>{
      getTrendingBlogs();
      getLatestBlogs();
    },[])


  return (
    <>
        {/* Treding / Latest Post  */}
        <div className="w-auto sm:w-72 md:w-80 xl:w-88">
            <div className="grid grid-cols-2">
              <button
                onClick={() => {
                  setShow(true);
                }}
                className={`text-md font-mono py-1 border rounded-l hover:border-orange-600 hover:text-orange-600 ${
                  show === true
                    ? "text-orange-600 border-orange-600"
                    : "text-gray-500 border-gray-600 border-opacity-50"
                }`}
              >
                TRENDING
              </button>
              <button
                onClick={() => {
                  setShow(false);
                }}
                className={`text-md font-mono py-1 border rounded-r hover:border-orange-600 hover:text-orange-600 ${
                  show === false
                    ? "text-orange-600 border-orange-600"
                    : "text-gray-500 border-gray-600 border-opacity-50"
                }`}
              >
                LATEST
              </button>
            </div>

            {/* Trending Block  */}
            {show === true ? (
              <div className="trending">

              <ul className='my-8 grid gap-y-4'>
              {
                trendingBlog.length >= 0 ? trendingBlog.map((post)=>{
                  return (
                    <li key={post._id} className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover h-full object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src={post.BImg}
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      {post.title}
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600 capitalize">
                      {post.category}
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>{trendingdate}</span>
                    </p>
                  </div>
                </li>
                  )
                })
                : <p className='text-center text-sm'>Nothing to Show</p>
              }
              </ul>
              </div>
            ) : (
              <div className="latest">

              <ul className='my-8 grid gap-y-4'>
              {
                latestBlog.length >=0 ? latestBlog.map((post)=>{
                  return (
                    <li key={post._id} className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover h-full object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src={post.BImg}
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      {post.title}
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600 capitalize">
                      {post.category}
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>{latestDate}</span>
                    </p>
                  </div>
                </li>
                  )
                })
                : <p className='text-center text-sm'>Nothing to Show</p>
              }
              </ul>
              </div>
            )}
          </div>
    </>
  )
}

export default PostSwitcher