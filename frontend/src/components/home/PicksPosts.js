import React, { useContext, useEffect , useRef , useState } from 'react';
import { Link } from 'react-router-dom';

import ApiContext from '../../context/ApiContext';
import Categories from './Categories';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
const PicksPosts = () => {

  const { toppicksBlogs , gettopPicksPosts } = useContext(ApiContext);

  useEffect(()=>{
    gettopPicksPosts();
  },[])

    //Owl Carousel Settings
const options = {
  grabCursor:true,
  pagination:true,
  loop:true,
  spaceBetween:30,
  
  breakpoints: {
        0: {
          slidesPerView:1,
        },
        400: {
          slidesPerView:1,
        },
        640: {
          slidesPerView:2,
        },
        1280: {
          slidesPerView:3,
        }
    },
  };

  return (
    <>
        <section className='container'>
           
            <div className='py-10 text-gray-300 lg:flex lg:justify-between gap-x-4 lg:gap-x-6 xl:gap-x-8'>

                
                <div className='w-12/12'>
  
                <h3 className="px-3 py-2 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase">Top Picks For You</h3>
                <Swiper effect={"coverflow"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        modules={[Autoplay, EffectCoverflow, Pagination]}   className='mySwiper relative my-8 grid md:grid-cols-2 gap-y-6 lg:grid-cols-3 lg:max-w-3xl xl:max-w-[58.5rem] gap-x-4' {...options}>

                 {
                  toppicksBlogs && toppicksBlogs.map && toppicksBlogs.slice(0,10).map((post)=>{
                    const { _id , slug , title , BImg , description , category  } = post;
                    return (
                      <Link key={_id} to={`/article/${slug}`}>
                      <SwiperSlide className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-center
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src={BImg} alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-4 transition-all duration-500'>
                            <span className='z-10 text-xs bg-orange-600 font-semibold capitalize px-1 py-0.5 rounded'>{category}</span>
                            <h3 className="z-10 my-2 text-lg xl:text-xl font-semibold blog-title text-gray-100 max-w-[16rem]">{title}</h3>
                            </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 
                            group-hover:text-gray-50 transition-all duration-500'>{description}</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>
                     </SwiperSlide>
                      </Link>
                    )
                  })
                 }   
                </Swiper>
              
              
                </div>
                {/* categories */}
                <Categories/>
            </div>
           
        </section>
    </>
  )
}

export default PicksPosts