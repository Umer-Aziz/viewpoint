import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {

    
      const [businessBlogs , setBusinessBlog ] = useState({});
      const [technologyBlogs , setTechnoBlog ] = useState({});
      const [programmingBlogs , setProgrammingBlog ] = useState({});
      const [cyberBlogs , setCyberBlog ] = useState({});
      const [scammingBlogs , setScammingBlog ] = useState({});
      const [fitnessBlogs , setFitnessBlog ] = useState({});
      const [lifestyleBlogs , setLSBlog ] = useState({});
      const [sportsBlogs , setSportsBlog ] = useState({});
      const [otherBlogs , setOtherBlog ] = useState({});

      useEffect(()=>{
        getBusinessBlogs();
        getTechnoBlogs();
        getProgrammingBlogs();
        getCyberBlogs();
        getScammingBlogs();
        getFitnessBlogs();
        getLSBlogs();
        getSportsBlogs();
        getOthersBlogs();
      },[])


      //GET Business  Blogs
      const getBusinessBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/business`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setBusinessBlog(categoryBlog);
      }

      //GET technology  Blogs
      const getTechnoBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/technology`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setTechnoBlog(categoryBlog);
      }

      //GET programming  Blogs
      const getProgrammingBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/programming`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setProgrammingBlog(categoryBlog);
      }

      //GET CyberSecurity  Blogs
      const getCyberBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/cybersecurity`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setCyberBlog(categoryBlog);
      }

      //GET Scamming  Blogs
      const getScammingBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/scamming`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setScammingBlog(categoryBlog);
      }

       //GET Fitness  Blogs
       const getFitnessBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/fitness`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setFitnessBlog(categoryBlog);
      }

      //GET Lifestyle  Blogs
      const getLSBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/lifestyle`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setLSBlog(categoryBlog);
      }

      //GET Lifestyle  Blogs
      const getSportsBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/sports`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setSportsBlog(categoryBlog);
      }

       //GET Lifestyle  Blogs
       const getOthersBlogs = async()=>{
        const response = await fetch(`/api/blogs/category/others`, {
          method: "GET",
          headers: {
            'Content-Type': "application/json",
          },
        });
        const categoryBlog = await response.json();
        setOtherBlog(categoryBlog);
      }

  return (
    <>
        <div className='max-w-60 xl:w-80'>
                <h5 className="w-full px-3 py-2 text-gray-400 text-md font-semibold border-l-2 border-orange-700 uppercase">Blog Categories</h5>
                  <div className='py-8 w-12/12'>
                      <div className='text-md font-semibold text-gray-700 dark:text-gray-300'>

                        <div className='flex justify-between pb-2 border-dark cursor-pointer'>
                          <Link to="/category/business" className='hover:text-gray-700 dark:hover:text-gray-400 '>Business</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{businessBlogs && businessBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/technology" className='hover:text-gray-700 dark:hover:text-gray-400 '>Technology</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{technologyBlogs && technologyBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/programming" className='hover:text-gray-700 dark:hover:text-gray-400 '>Programming</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{programmingBlogs && programmingBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/cybersecurity" className='hover:text-gray-700 dark:hover:text-gray-400 '>CyberSecurity</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{cyberBlogs && cyberBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/scamming" className='hover:text-gray-700 dark:hover:text-gray-400 '>Scamming</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{ scammingBlogs && scammingBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/fitness" className='hover:text-gray-700 dark:hover:text-gray-400 '>Fitness</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{ fitnessBlogs && fitnessBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/lifestyle" className='hover:text-gray-700 dark:hover:text-gray-400 '>lifeStyle</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{ lifestyleBlogs && lifestyleBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/sports" className='hover:text-gray-700 dark:hover:text-gray-400'>Sports</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{ sportsBlogs && sportsBlogs.length }</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <Link to="/category/others" className='hover:text-gray-700 dark:hover:text-gray-400 '>Others</Link>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>{ otherBlogs && otherBlogs.length }</span>
                        </div>

                      </div>
                  </div>
                </div>
            
    </>
  )
}

export default Categories