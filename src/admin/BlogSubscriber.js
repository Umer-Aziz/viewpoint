import React, { useState , useRef , useEffect, useContext } from 'react'
import Sidebar from '../components/admin/Sidebar'
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
const BlogSubscriber = ({Toast}) => {

  const navigate = useNavigate();
  const data = useContext(ApiContext);

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/dashboard/login");
    }
    data.GetSubscriber();
  }, []);

  const [ formstate , setFormstate ] = useState({});
  const [ visible , setVisible ] = useState(false);
  const [content, setContent] = useState('');
  const editor = useRef('');
  const {subs} = data.blogSubscriber;

const changeHandler = (event)=>{
  setFormstate({ ...formstate , [event.target.name] : event.target.value })
}

const handleForm = (e)=>{
  e.preventDefault();

  let config = {};

if(visible === true ){
 
  config = { 
    SecureToken : process.env.REACT_APP_SecureToken,
    From : formstate.emailfrom,
    To : formstate.emailto,
    Subject : formstate.emailsubject,
    Body : content
  }
  if(window.Email){
      window.Email.send(config).then(()=>{
        Toast("📩 Emails has been send!")
      }).catch((error)=>{
        console.log("error",error)
        Toast("Something Wrong!")
      })
  
    }

}else{
  subs.forEach((data)=>{
   config = { 
    SecureToken : process.env.REACT_APP_SecureToken,
    From : formstate.emailfrom,
    To : data.email,
    Subject : formstate.emailsubject,
    Body : content
  }
  if(window.Email){
      window.Email.send(config).then(()=>{
        Toast("📩 Emails has been send!")
      }).catch((error)=>{
        console.log("error",error)
        Toast("Something Wrong!")
      })
  
    }
});
}
 
 setFormstate("");
 setContent("");
}
  return (
   <>
    { localStorage.getItem("token")  && <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* email Subscriber */}      
          <div className='grid gap-8 lg:flex py-10 lg:py-0 lg:pl-4 w-full text-gray-600 dark:text-gray-300'>

           {/* email lists  */}
          <div>
          <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md lg:max-w-sm lg:min-w-[320px]'>
              <h3 className='py-2 border-b text-lg md:text-xl font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>Email List</h3>
              <div className='grid py-4'>
                <ul className='grid gap-3 text-gray-600 dark:text-gray-700'>
                {
                 subs && subs.map((data)=>{
                    return(
                      <li key={data._id} className='md:text-lg inline-block bg-orange-300 dark:bg-gray-100 px-2 rounded-md'>{data.email}</li>
                    )
                  })
                }
                </ul>
              </div>
            </div>

          </div>
              
              {/* send email  */}
          <div className='py-2 px-4 bg-light-gray dark:bg-dull-gray w-full'>
          <h3 className='py-2 border-b text-lg md:text-xl font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>Send NewsLetter</h3>
           <div>
           <form action="" className='py-3 grid gap-4' onSubmit={handleForm}>
                <div className='grid gap-y-1'>
                  <label htmlFor="emailfrom">From</label>
                  <input placeholder='Email From' value={formstate.emailfrom || ""} onChange={changeHandler} className='outline-none py-2 px-4 rounded text-gray-600' type="email" name="emailfrom" id="emailfrom" required minLength={5}/>
                </div>
  
                <div className='flex gap-3'>
               <div className='flex items-center gap-2'>
               <span className='font-semibold text-orange-600'>Send to One</span>
                  <input className='accent-orange-600' onClick={()=>{setVisible(true)}} name='sendto' type="radio" value="0"/>
               </div>
               <div className='flex items-center gap-2'>
               <span className='font-semibold text-orange-600'>Send to All</span>
                  <input className='accent-orange-600' onClick={()=>{setVisible(false)}} name='sendto' type="radio"  value="1"/>
               </div>
                </div>
                 {visible && 
                 <div className='grid gap-y-1'>
                  <label htmlFor="emailto">To</label>
                  <input placeholder='Email to' value={ formstate.emailto || "" } onChange={changeHandler} className='outline-none py-2 px-4 rounded text-gray-600' type="email" name="emailto" id="emailto" required minLength={5}/>
                </div>
                 }
                <div className='grid gap-y-1'>
                  <label htmlFor="emailsubject">Email Subject</label>
                  <input placeholder='Subject' value={formstate.emailsubject || ""} onChange={changeHandler} className='outline-none py-2 px-4 rounded text-gray-600' type="text" name="emailsubject" id="emailsubject" required minLength={4}/>
                  </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="msg">Message</label>
                  <JoditEditor ref={editor} tabIndex={1} value={content}  onChange={content => setContent(content)} placeholder='Message..' className='input-style min-h-[10rem]' type="text" name="content" id="content" />
                  </div>
                  <div className='mt-4'>
                  <button className='btn'>Send</button>
                  </div>
              </form>
           </div>
          </div>
          </div>
        </div>
        </main>}
   </>
  )
}

export default BlogSubscriber