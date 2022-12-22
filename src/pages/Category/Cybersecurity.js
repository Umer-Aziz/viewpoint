import React , { useEffect ,useContext } from 'react'
import { WiTime8 } from "react-icons/wi"
import { Link, useLocation } from 'react-router-dom';
import ApiContext from '../../context/ApiContext';
import moment from 'moment';
const Cybersecurity = () => {

  const { getCategoryBlogs , CategoryBlog} = useContext(ApiContext);


  // get category url 
  const path = useLocation();
  const url = path.pathname.replace("/category/", "") ;

  
  useEffect(()=>{
    getCategoryBlogs(url);
  },[])


  return (
    <>
        <main className='container'>
            <div className='pt-8 pb-20'>
            
              {/* All blogs */}
            <div className='grid gap-y-6 md:grid-cols-2 lg:grid-cols-3 gap-x-6'>

          {
           CategoryBlog && CategoryBlog.map  &&  CategoryBlog.map((blog)=>{
              const { _id , slug , title , BImg , category , description , updatedAt } = blog;
              const date = moment(updatedAt).format("Do MMMM , YYYY")
               return (
                <Link to={`/article/${slug}`}>
                <div key={_id} className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='bg-cover md:h-56 xl:h-64 object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src={BImg} alt="blog-posts" />
            </div>
            <div className='px-3 lg:px-4'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">{category}</p>
            <h3 className="my-2 text-xl font-semibold blog-title">{title}</h3>
            <p className='hidden xl:block my-1'>{description}</p>
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

      { CategoryBlog.length == 0 && <p className='text-2xl text-orange-600'>Nothing to Show...</p>}

            </div>
            
            </div>
        </main>
    </>
  )
}

export default Cybersecurity