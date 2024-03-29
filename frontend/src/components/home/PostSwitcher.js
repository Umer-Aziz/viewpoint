import React,{useEffect, useState , useContext } from 'react'
import { WiTime8 } from "react-icons/wi";
import ApiContext from '../../context/ApiContext';
import moment from 'moment';
const PostSwitcher = () => {
    const [show, setShow] = useState(true);
    const { getLatestBlogs , getTrendingBlogs , latestBlog , trendingBlog } = useContext(ApiContext);
    
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
                trendingBlog.length >= 0 ? trendingBlog.slice(0,5).map((post)=>{
                  const trendingdate = moment(post.updatedAt).format('Do  MMMM, YYYY');
                  return (
                    <a key={post._id} href={`/#/article/${post.slug}`}>
                    <li className="flex gap-x-3 group cursor-pointer">
                    <img
                      className="bg-cover rounded h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src={post.BImg}
                      alt="trending-post"
                    />
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
                </a>
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
                latestBlog.length > 0 ? latestBlog.slice(0,5).map((post)=>{
                  const latestDate = moment(post.updatedAt).format('Do  MMMM, YYYY');
                  return (
                    <a key={post._id} href={`/#/article/${post.slug}`}>
                    <li className="flex gap-x-3 group cursor-pointer">
                    <img
                      className="bg-cover rounded h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src={post.BImg}
                      alt="trending-post"
                    />
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
                </a>
                  )
                })
                : <p className='text-center text-sm'>Nothing to Show</p>
              }
              </ul>
              </div>
            )}          
            <iframe className='mx-auto' src="http://www.profitabledisplaynetwork.com/fe85a61261c62d732a345a65f9abf9c3/invoke.html?key=fe85a61261c62d732a345a65f9abf9c3&format=iframe&height=250&width=300" frameBorder="0" scrolling="no"  style={{width:"300px",height:"250px"}}></iframe>
          </div>
    </>
  )
}

export default PostSwitcher