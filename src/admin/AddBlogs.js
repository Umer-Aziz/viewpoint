import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import JoditEditor from 'jodit-react';
import { MdCancel } from "react-icons/md"
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


  return (
    <>
      <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* add new blogs */}      
          <div className='py-10 lg:py-0 lg:pl-4 w-full text-gray-600 dark:text-gray-300'>
          <h4 className="text-2xl text-orange-600 mb-4">Add a New Post</h4>

         <div className='grid gap-4'>
         <div className='grid lg:grid-cols-2 gap-y-4 gap-x-8'>
          <div className='grid gap-y-1'>
                  <label htmlFor="title" className='text-lg font-medium'>Title</label>
                  <input placeholder='Title' className='input-style' type="text" name="title" id="title" />
                </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="BImg" className='text-lg font-medium'>Blog Image</label>
                  <input placeholder='URL' className='input-style' type="text" name="BImg" id="BImg" />
                </div>
          </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="des" className='text-lg font-medium'>Description</label>
                  <input placeholder='Description' className='input-style' type="text" name="des" id="des" />
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
                      
                      <input className='lg:w-60 outline-none bg-transparent text-gray-600 dark:text-gray-100' type="text" id='tags' name='tags'
                        onKeyUp={e => (e.key === "Enter" ? addTag(e) : null)}
                      />
                    </ul>
                  </div>
                </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="content" className='text-lg font-medium'>Content</label>
                  <JoditEditor placeholder='Description' className='input-style min-h-[10rem]' type="text" name="content" id="content" />
                </div>
         </div>
          </div>
        </div>
        </main>
    </>
  )
}

export default AddBlogs