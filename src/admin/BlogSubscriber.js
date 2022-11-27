import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'

const BlogSubscriber = () => {

  const [ formstate , setFormstate ] = useState({});
  const [ visible , setVisible ] = useState(false);

const changeHandler = (event)=>{
  setFormstate({ ...formstate , [event.target.name] : event.target.value })
}

const emails = [
  "umeraziz682@gmail.com",
  "umeraziz019@gmail.com",
  "umars25271997@gmail.com"
]

let emailsend = "";
let bccemail = "";

if(visible === true ){
  emailsend = formstate.emailto
  bccemail = "jacksparrow434445@gmail.com"
}else{
  bccemail = emails
  emailsend = "jacksparrow434445@gmail.com"
}


const handleForm = (e)=>{
  e.preventDefault();

  const config = { 
    SecureToken : "2e295e82-452d-4012-912c-b4c2bceecd2a",
    From : formstate.emailfrom,
    To : emailsend,
    Bcc : bccemail,
    Subject : formstate.emailsubject,
    Body : formstate.msg
  }
  if(window.Email){
    window.Email.send(config).then(()=>{
      alert("email Send");
    }).catch((error)=>{
      console.log("error",error)
    })

  }
  console.log("config ",config)
//  setFormstate("");
}
  return (
   <>
     <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* email Subscriber */}      
          <div className='grid gap-8 lg:flex py-10 lg:py-0 lg:pl-4 w-full text-gray-600 dark:text-gray-300'>

           {/* email lists  */}
          <div>
          <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md lg:max-w-xs'>
              <h3 className='py-2 border-b text-lg md:text-xl font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>Email List</h3>
              <div className='grid py-4'>
                <ul className='grid gap-3 text-gray-600 dark:text-gray-700'>
                  <li className='md:text-lg inline-block bg-orange-300 dark:bg-gray-100 px-2 rounded-md'>umeraziz682@gmail.com</li>
                  <li className='md:text-lg inline-block bg-orange-300 dark:bg-gray-100 px-2 rounded-md'>jacksparrow434445@gmail.com</li>
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
                  <input placeholder='Email From' value={formstate.emailfrom || ""} onChange={changeHandler} className='outline-none py-2 px-4 rounded text-gray-600' type="email" name="emailfrom" id="emailfrom" />
                </div>
  
                <div className='flex gap-3'>
               <div className='flex items-center gap-2'>
               <span className='font-semibold text-orange-600'>Send to One</span>
                  <input className='accent-orange-600' onClick={()=>{setVisible(true)}} name='sendto' type="radio" value="0" />
               </div>
               <div className='flex items-center gap-2'>
               <span className='font-semibold text-orange-600'>Send to All</span>
                  <input className='accent-orange-600' onClick={()=>{setVisible(false)}} name='sendto' type="radio"  value="1"/>
               </div>
                </div>
                 {visible && 
                 <div className='grid gap-y-1'>
                  <label htmlFor="emailto">To</label>
                  <input placeholder='Email to' value={ formstate.emailto || "" } onChange={changeHandler} className='outline-none py-2 px-4 rounded text-gray-600' type="email" name="emailto" id="emailto" />
                </div>
                 }
                <div className='grid gap-y-1'>
                  <label htmlFor="emailsubject">Email Subject</label>
                  <input placeholder='Subject' value={formstate.emailsubject || ""} onChange={changeHandler} className='outline-none py-2 px-4 rounded text-gray-600' type="text" name="emailsubject" id="emailsubject" />
                  </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="msg">Message</label>
                  <textarea placeholder='Message...' value={formstate.msg || "" } onChange={changeHandler} className='lg:min-h-[8rem] outline-none py-2 px-4 rounded text-gray-600' type="text" name="msg" id="msg" ></textarea>
                  </div>
                  <div className='mt-4'>
                  <button className='btn'>Send</button>
                  </div>
              </form>
           </div>
          </div>
          </div>
        </div>
        </main>
   </>
  )
}

export default BlogSubscriber