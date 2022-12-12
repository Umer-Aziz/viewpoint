import React, { useState , useRef , useEffect , useContext } from 'react'
import Sidebar from '../components/admin/Sidebar'
import JoditEditor from 'jodit-react';
import { MdCancel , MdPublic , MdAddCircleOutline } from "react-icons/md"
import { VscSaveAs } from "react-icons/vsc"
import { BiAddToQueue } from "react-icons/bi"
import { useNavigate , useLocation } from 'react-router-dom';
import ApiContext from '../context/ApiContext';

const EditBlogs = ({Toast}) => {

  const location = useLocation();
  const url = location.pathname.replace("/dashboard/editblogs/", "") ;

  const { getBlogsEdit , blogsEdit , setBlogsEdit } = useContext(ApiContext);
  const { _id } = blogsEdit;

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
    getBlogsEdit(url);
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
   // API Call 
   const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/updateblogs/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token'),
    },
    body: JSON.stringify({title , BImg , description , category , latest , trending , mustreads , randomposts , toppicks , content , status})
  });
  const json = await response.json(); 

   let newBlogs = JSON.parse(JSON.stringify(json))
  // Logic to edit in client
  for (let index = 0; index < newBlogs.length; index++) {
    const element = newBlogs[index];
    if (element._id === _id) {
      newBlogs[index].title = title;
      newBlogs[index].BImg = BImg;
      newBlogs[index].description = description;
      newBlogs[index].category = category;
      newBlogs[index].latest = latest;
      newBlogs[index].trending = trending;
      newBlogs[index].mustreads = mustreads;
      newBlogs[index].randomposts = randomposts;
      newBlogs[index].toppicks = toppicks;
      newBlogs[index].content = content;
      newBlogs[index].status = status;
      break; 
    }
  }  
  navigate(`/article/${blogsEdit.slug}`)
  Toast("Blog has been updated!");
    
  }

  return (
    <>
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
                  <input onChange={changeHandler} value={formstate.title || blogsEdit.title } required placeholder='Title' className='input-style' type="text" name="title" id="title" />
                </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="BImg" className='text-lg font-medium'>Blog Image</label>
                  <input onChange={changeHandler} value={formstate.BImg || blogsEdit.BImg } required placeholder='URL' className='input-style' type="text" name="BImg" id="BImg" />
                </div>
          </div>
          <div className='grid gap-y-1'>
                  <label htmlFor="description" className='text-lg font-medium'>Description</label>
                  <input onChange={changeHandler} value={formstate.description || blogsEdit.description} required placeholder='Description' className='input-style' type="text" name="description" id="description" />
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
                  <select onChange={changeHandler} value={formstate.category || blogsEdit.category } className='input-style' type="text" name="category" id="category" >
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
                  <JoditEditor ref={editor} tabIndex={1} value={blogsEdit.content}  onChange={content => setContent(content)} placeholder='Description' className='input-style min-h-[10rem]' type="text" name="content" id="content" />
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

export default EditBlogs