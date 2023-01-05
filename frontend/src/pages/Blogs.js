import React, { useEffect , useContext } from 'react'
import { WiTime8 } from "react-icons/wi";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ReactPaginate from 'react-paginate'
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";
import ApiContext from '../context/ApiContext';
const Blogs = () => {

  const [ paginateBlogs , setPaginateBlogs ] = useState({});
  const publishedBlogs = paginateBlogs.blogs;
  const data = useContext(ApiContext);
  let totalBlogs = data.publishedBlogs.length;
  let totalPage ;
  let limit = 14;
if(totalBlogs){
  totalPage = Math.ceil(totalBlogs / limit );
}
  

  useEffect(() => {
    data.GetAllPublishedBlogs();
     getPaginateBlogs();
  }, [])

  // get paginateBlogs 

  const getPaginateBlogs = async()=>{
    const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/pagination/?page=1&limit=${limit}`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
      },
    });
    const paginateBlogs = await response.json();
    setPaginateBlogs(paginateBlogs);
  }


  // change paginateBlogs page 

  const fetchPaginateBlogs = async(currentPage)=>{
    const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/pagination/?page=${currentPage}&limit=${limit}`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const paginateBlogs = await response.json();
      return paginateBlogs;
}

const handlePageClick = async(data)=>{
    let currentPage = data.selected + 1 ;
    const pageChangeBlogs = await fetchPaginateBlogs(currentPage);
    setPaginateBlogs(pageChangeBlogs);

}

  return (
    <>
    <Helmet>
            <meta name="keywords" content="pointview blogs ,  programming blogs , cybersecurity , pointview.tech"/>
            <title>pointview - Blogs</title>
            <link rel="canonical" href="https://pointview.tech/blogs" />
        </Helmet>
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
    publishedBlogs && publishedBlogs.map && publishedBlogs.slice(5).map((post)=>{
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

  <div>
  <ReactPaginate
    breakLabel={`...`}
    nextLabel={<IoIosArrowForward/>}
    previousLabel={<IoIosArrowBack/>}
    pageCount={totalPage}
    pageRangeDisplayed={2}
    marginPagesDisplayed={2}
    onPageChange={handlePageClick}
    containerClassName={`pagination`}
    pageClassName={`page-item`}
    pageLinkClassName={`page-link`}
    previousClassName={`page-item`}
    previousLinkClassName={`page-link`}
    nextClassName={`page-item`}
    nextLinkClassName={`page-link`}
    breakClassName={`page-item`}
    breakLinkClassName={`page-link`}
    activeClassName={`!bg-orange-600`}
  />
  </div>

</div>
        </section>
    </>
  )
}

export default Blogs