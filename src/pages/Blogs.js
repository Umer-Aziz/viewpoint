import React, { useContext , useEffect } from 'react'
import { WiTime8 } from "react-icons/wi";
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";
import ApiContext from '../context/ApiContext';
import { Link } from 'react-router-dom';
import moment from 'moment';
const Blogs = () => {

  const { publishedBlogs , GetAllPublishedBlogs } = useContext(ApiContext);

  useEffect(() => {
    GetAllPublishedBlogs();
  }, [])
  return (
    <>
        <section className='text-gray-700 dark:text-gray-300'>
        <div className='container pt-10 pb-20'>
<div className='my-6 grid gap-y-6 lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8'>

  {
    publishedBlogs && publishedBlogs.map && publishedBlogs.slice(0,1).map((post)=>{
      const { _id , slug , title , BImg , category , description , updatedAt } = post;
      const date = moment(updatedAt).format("D MMMM , YYYY")
      return (
      <Link key={_id} to={`/article/${slug}`}>
      <div className='py-3 shadow rounded xl:min-w-[38rem] group cursor-pointer'>
      <div className='overflow-hidden w-full rounded md:rounded-md'>
          <img className='bg-cover object-fill rounded lg:rounded-md w-full lg:min-h-[20rem] xl:min-h-[24rem] 
          group-hover:scale-105 transition-all duration-500'
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
  <div className='grid grid-cols-2 gap-3 xl:gap-4 lg:gap-x-4'>

 { publishedBlogs && publishedBlogs.map && publishedBlogs.slice(1,5).map((post)=>{
  const { _id , slug , title , BImg , category , updatedAt } = post;
      const date = moment(updatedAt).format("D MMMM , YYYY")
  return (
<Link key={_id} to={`/article/${slug}`}>
<div className='p-1 md:p-2 shadow rounded relative group cursor-pointer'>
    <div className='rounded overflow-hidden w-full'>
       <img className='h-24 md:h-48 lg:h-40 xl:h-48 w-full bg-cover object-cover group-hover:scale-105 transition-all duration-500' 
       src={BImg}
        alt="random-small-post" />
    </div>
    <div>
    <p className="absolute top-1 left-2 md:top-2 md:left-3 text-xs text-orange-600 font-semibold">{category}</p>
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

  {/* All blogs */}
  <div className='grid gap-y-6 md:grid-cols-2 lg:grid-cols-3 gap-x-6'>

  {
    publishedBlogs && publishedBlogs.map && publishedBlogs.slice(6).map((post)=>{
      const { _id , slug , title , BImg , category , updatedAt } = post;
      const date = moment(updatedAt).format("D MMMM , YYYY")
      return (
        <Link key={_id} to={`/article/${slug}`}>
        <div className='py-3 shadow rounded group cursor-pointer'>
  <div className='overflow-hidden w-full rounded md:rounded-md'>
      <img className='bg-cover md:h-56 xl:h-64 object-fill rounded 
      lg:rounded-md w-full group-hover:scale-105 transition-all 
      duration-500' 
      src={BImg} alt="blog-posts" />
    </div>
    <div className='px-3 lg:px-4'>
    <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold capitalize">{category}</p>
    <h3 className="my-2 text-xl font-semibold blog-title">{title}</h3>
    <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
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

  </div>

 {/* pagination  */}
  <div className="flex justify-center mt-12">
    <a href="/" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-gray-50 rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-600 dark:bg-opacity-5 dark:text-gray-600">
        <IoIosArrowBack/>
    </a>

    <a href="/" className="hidden px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-50 dark:text-gray-100">
        1
    </a>

    <a href="/" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md sm:inline dark:bg-gray-600 dark:bg-opacity-5 dark:text-gray-200 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-gray-50 dark:hover:text-gray-100">
        2
    </a>

    <a href="/" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md sm:inline dark:bg-gray-600 dark:bg-opacity-5 dark:text-gray-200 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-gray-50 dark:hover:text-gray-100">
        ...
    </a>

    <a href="/" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md sm:inline dark:bg-gray-600 dark:bg-opacity-5 dark:text-gray-200 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-gray-50 dark:hover:text-gray-100">
        9
    </a>

    <a href="/" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md sm:inline dark:bg-gray-600 dark:bg-opacity-5 dark:text-gray-200 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-gray-50 dark:hover:text-gray-100">
        10
    </a>

    <a href="/" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md rtl:-scale-x-100 dark:bg-gray-600 dark:bg-opacity-5 dark:text-gray-200 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-gray-50 dark:hover:text-gray-100">
       <IoIosArrowForward/>
    </a>
</div>

</div>
        </section>
    </>
  )
}

export default Blogs