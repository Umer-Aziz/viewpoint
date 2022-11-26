import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import JoditEditor from 'jodit-react';
import { MdCancel , MdPublic } from "react-icons/md"
import { VscSaveAs } from "react-icons/vsc"
const AddBlogs = () => {
  const [ tags , setTags ] = useState([]);

  // addTags 
  const addTag = (event) =>{
    if(event.target.value !== "" ){
      setTags([ ...tags , event.target.value ]);
      event.target.value = "";
    }
  }

  // removeTags 
  const removeTags = (indextoRemove)=>{
    setTags(tags.filter((_, index) => index !== indextoRemove ));

  }

  const addBlog = (e) =>{
  e.preventDefault();
  }

  return (
    <>
      <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* add new blogs */}      
          <div className='py-10 lg:py-0 lg:pl-4 w-full text-gray-600 dark:text-gray-300'>
          <h4 className="text-2xl text-orange-600 mb-4">Add a New Post</h4>

         <form action="" onSubmit={addBlog}>
         <div className='grid gap-4'>
         <div className='grid lg:grid-cols-2 gap-y-4 gap-x-8'>
          <div className='grid gap-y-1'>
                  <label htmlFor="title" className='text-lg font-medium'>Title</label>
                  <input required placeholder='Title' className='input-style' type="text" name="title" id="title" />
                </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="BImg" className='text-lg font-medium'>Blog Image</label>
                  <input required placeholder='URL' className='input-style' type="text" name="BImg" id="BImg" />
                </div>
          </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="des" className='text-lg font-medium'>Description</label>
                  <input required placeholder='Description' className='input-style' type="text" name="des" id="des" />
                </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="des" className='text-lg font-medium'>Blog Tags</label>
                  <div className='py-3 px-4 border border-orange-600 rounded-md text-gray-100'>
                    <ul className='flex gap-2 flex-wrap'>
                     {
                      tags.map((tag,index)=>{
                        return (
                        <li key={index} className='px-2 py-1 rounded flex items-center gap-x-1 bg-orange-600'>
                        <span>{tag}</span>
                        <MdCancel onClick={()=>{removeTags(index)}} className='cursor-pointer'/>
                      </li>
                        )
                      })
                     }
                      
                      <input required className='lg:w-60 outline-none bg-transparent text-gray-600 dark:text-gray-100' type="text" id='tags' name='tags'
                        onKeyUp={e => (e.key === "Enter" ? addTag(e) : null)}
                      />
                    </ul>
                  </div>
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="des" className='text-lg font-medium'>Categories</label>
                  <select className='input-style' type="text" name="category" id="category" >
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                    <option value="programming">Programming</option>
                    <option value="scamming">Scamming</option>
                    <option value="fitness">Fitness</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="sports">Sports</option>
                    <option value="others">Others</option>
                  </select>
                  
                  <div className='mt-2 flex flex-wrap gap-3 md:gap-4 xl:gap-6'>
                  <div className='flex gap-1'>
                  <label htmlFor="latest">Latest Post</label>
                    <input className='accent-orange-600' type="checkbox" name="latest" id="Latest" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="trending">Trending Post</label>
                    <input className='accent-orange-600' type="checkbox" name="trending" id="trending" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="mustread">Must Reads</label>
                    <input className='accent-orange-600' type="checkbox" name="mustread" id="mustread" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="randompost">Random Post</label>
                    <input className='accent-orange-600' type="checkbox" name="randompost" id="randompost" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="toppicks">Top Picks</label>
                    <input className='accent-orange-600' type="checkbox" name="toppicks" id="toppicks" />
                  </div>
                  </div>
                  
                  
              </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="content" className='text-lg font-medium'>Content</label>
                  <JoditEditor placeholder='Description' className='input-style min-h-[10rem]' type="text" name="content" id="content" />
                </div>

                <div className='py-4 flex gap-4'>
                  <button className='btn'><VscSaveAs/> <span>Save</span></button>
                  <button className='btn'><MdPublic/><span>Published</span></button>
                </div>
         </div>

         </form>
          </div>
        </div>
        </main>
    </>
  )
}

export default AddBlogs