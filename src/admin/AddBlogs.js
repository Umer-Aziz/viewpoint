import React, { useState , useRef , useEffect } from 'react'
import Sidebar from '../components/admin/Sidebar'
import JoditEditor from 'jodit-react';
import { MdCancel , MdPublic , MdAddCircleOutline } from "react-icons/md"
import { VscSaveAs } from "react-icons/vsc"
import { BiAddToQueue } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import  { Helmet } from "react-helmet"
const AddBlogs = ({Toast}) => {
  const [ tags , setTags ] = useState([]);
  const [ formstate , setFormstate ] = useState({});
  const [content, setContent] = useState('');
  const editor = useRef('');
  const tagsvalue = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/dashboard/login");
    }
  }, []);

const changeHandler = (event)=>{
  setFormstate({ ...formstate , [event.target.name] : event.target.value})
 
}

const handleCheck = (event)=>{
  setFormstate({ ...formstate , [event.target.name] : event.target.checked})
}


  // addTags 
  const addTag = () =>{
    if(tagsvalue.current.value !== "" ){
      setTags([ ...tags , tagsvalue.current.value ]);
      tagsvalue.current.value = "";
    }
  }

  // removeTags 
  const removeTags = (indextoRemove)=>{
    setTags(tags.filter((_, index) => index !== indextoRemove ));

  }

  const addBlog = async(e) =>{
  e.preventDefault();

  const { title , BImg , description , category , latest , trending , mustreads , randomposts , toppicks , status} = formstate;
  const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/addblogs`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json", 
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title , BImg , description , tags , category , latest , trending , mustreads , randomposts , toppicks , content , status})
    });
    const addblogs = await response.json();
    if(!addblogs.Error){
      Toast("Blog has been added Successfully!");
      navigate("/dashboard/allblogs");
    }else{
      Toast(addblogs.Error)
    }
    
  }

  return (
    <>
    <Helmet>
            <title>Add Blog</title>
      </Helmet>
     { localStorage.getItem('token') && <main className='container py-10 overflow-x-hidden w-full'>
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
                  <input onChange={changeHandler} value={formstate.title || ""} required placeholder='Title' className='input-style' type="text" name="title" id="title" />
                </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="BImg" className='text-lg font-medium'>Blog Image</label>
                  <input onChange={changeHandler} value={formstate.BImg || ""} required placeholder='URL' className='input-style' type="text" name="BImg" id="BImg" />
                </div>
          </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="description" className='text-lg font-medium'>Description</label>
                  <input onChange={changeHandler} value={formstate.description || ""} required placeholder='Description' className='input-style' type="text" name="description" id="description" />
                </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="tags" className='text-lg font-medium'>Blog Tags</label>
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
                      
                      <div className='flex items-center'>
                      <input ref={tagsvalue} value={tags.tags} className='h-full lg:w-60 border border-orange-600 rounded-md outline-none bg-transparent text-gray-600 dark:text-gray-100' type="text" id='tags' name='tags'
                      />
                      <MdAddCircleOutline className="text-orange-600 text-2xl cursor-pointer hover:text-orange-700"
                        onClick={()=>{addTag()}}
                      />
                      </div>
                    </ul>
                  </div>
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="category" className='text-lg font-medium'>Categories</label>
                  <select onChange={changeHandler} value={formstate.category || ""} className='input-style' type="text" name="category" id="category" >
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
                    <input onChange={handleCheck} className='accent-orange-600' type="checkbox" name="latest" id="Latest" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="trending">Trending Post</label>
                    <input onChange={handleCheck} className='accent-orange-600' type="checkbox" name="trending" id="trending" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="mustread">Must Reads</label>
                    <input onChange={handleCheck} className='accent-orange-600' type="checkbox" name="mustreads" id="mustread" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="randompost">Random Post</label>
                    <input onChange={handleCheck} className='accent-orange-600' type="checkbox" name="randomposts" id="randompost" />
                  </div>
                  <div className='flex gap-1'>
                  <label htmlFor="toppicks">Top Picks</label>
                    <input onChange={handleCheck} className='accent-orange-600' type="checkbox" name="toppicks" id="toppicks" />
                  </div>
                  </div>
                  
                  
              </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="content" className='text-lg font-medium'>Content</label>
                  <JoditEditor ref={editor} tabIndex={1} value={content}  onChange={content => setContent(content)} placeholder='Description' className='input-style min-h-[10rem]' type="text" name="content" id="content" />
                </div>

                <div className='py-4 flex gap-6'>
                  <div className='flex items-center gap-2 text-orange-600'>
                  <input onChange={changeHandler} className='accent-orange-600' type="radio" name="status" value="pending" id="save" required/>
                   <VscSaveAs/> <span>Save</span></div>
                  <div className='flex items-center gap-2 text-orange-600'>
                  <input onChange={changeHandler} className='accent-orange-600' type="radio" name="status" value="published" id="save" required/>
                  <MdPublic/><span>Publish</span></div>
                </div>
                <div className='my-6'>
                  <button className='btn flex items-center gap-2'><BiAddToQueue/> <span>Post a Blog</span> </button>
                </div>
         </div>

         </form>
          </div>
        </div>
        </main>}
    </>
  )
}

export default AddBlogs