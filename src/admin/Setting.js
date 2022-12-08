import React, { useEffect } from 'react'
import Sidebar from '../components/admin/Sidebar'
import { useNavigate } from 'react-router-dom';

const Setting = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/dashboard/login");
    }
  }, []);

  return (
    <>
      {localStorage.getItem("token") && <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* Setting */}      
          <div className='py-10 lg:py-0 lg:pl-4 w-full text-gray-600 dark:text-gray-300'>
          <h4 className="text-2xl text-orange-600 mb-4">Settings</h4>

         <div className='grid lg:grid-cols-2 gap-8'>
         {/* profile detail */}
          <div className='grid gap-8 w-full'>
          <div>
            <div className='w-80 h-80 rounded-full overflow-hidden shadow-xl mx-auto'>
              <img className='bg-cover bg-center object-cover' src="https://user-images.githubusercontent.com/62507205/183687106-3d0979dd-9e78-49e9-86e4-0cb127a713d0.png" alt="profile-pic" />
            </div>
           </div>

            <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md'>
              <h3 className='py-2 border-b text-lg font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>User Profile Settings</h3>
              <form action="" className='py-3 grid gap-4'>
              <div className='grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                <div className='grid gap-y-1'>
                  <label htmlFor="name">Name</label>
                  <input placeholder='name' className='outline-none py-2 px-4 rounded text-gray-600' type="text" name="name" id="name" />
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="pic">Profile Pic</label>
                  <input placeholder='image url' className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="pic" id="pic" />
                  </div>
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="phone">Contact Phone</label>
                  <input placeholder='Phone' className='outline-none py-2 px-4 rounded text-gray-600' type="tel" name="phone" id="phone" />
                  </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="cemail">Contact Email</label>
                  <input placeholder='Email' className='outline-none py-2 px-4 rounded text-gray-600' type="email" name="cemail" id="cemail" />
                  </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="name">Bio</label>
                  <textarea placeholder='Write about yourself...' className='lg:min-h-[8rem] outline-none py-2 px-4 rounded text-gray-600' type="text" name="name" id="name" ></textarea>
                  </div>
                  <div>
                  <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Update</button>
                  </div>
              </form>
            </div>
          </div>

          {/* Social Links  */}
          <div className='grid gap-8'>
            <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md'>
              <h3 className='py-2 border-b text-lg font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>Account Settings</h3>
              <form action="" className='py-3 grid gap-4'>
                <div className='grid gap-y-1'>
                  <label htmlFor="email">Email</label>
                  <input placeholder='Email' className='outline-none py-2 px-4 rounded text-gray-600' type="email" name="email" id="email" />
                  </div>
                  <div className='grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                <div className='grid gap-y-1'>
                  <label htmlFor="password">Password</label>
                  <input placeholder='password' className='outline-none py-2 px-4 rounded text-gray-600' type="password" name="password" id="password" />
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="newpass">New Password</label>
                  <input placeholder='New Password' className='outline-none py-2 px-4 rounded text-gray-600' type="password" name="newpass" id="newpass" />
                  </div>
                </div>
                  <div>
                  <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Update</button>
                  </div>
              </form>
            </div>
            <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md'>
              <h3 className='py-2 border-b text-lg font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>Social Links</h3>
              <form action="" className='py-3 grid gap-4'>

              <div className='flex gap-x-4 items-end'>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="facebook">Facebook URL:</label>
                  <input placeholder='Paste your link here' className='outline-none py-2 px-4 rounded text-gray-600'
                   type="url" name="facebook" id="facebook" />
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </div>

               <div className='flex gap-x-4 items-end'>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="instagram">Instagram URL:</label>
                  <input placeholder='Paste your link here' className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="instagram" id="instagram" />
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </div>

               <div className='flex gap-x-4 items-end'>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="twitter">Twitter URL:</label>
                  <input placeholder='Paste your link here' className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="twitter" id="twitter" />
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </div>

               <div className='flex gap-x-4 items-end'>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="linkedin">LinkedIn URL:</label>
                  <input placeholder='Paste your link here' className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="linkedin" id="linkedin" />
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </div>

              <div className='flex gap-x-4 items-end'>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="github">Github URL:</label>
                  <input placeholder='Paste your link here' className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="github" id="github" />
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </div>


               <div className='flex gap-x-4 items-end'>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="stack">Stackoverflow URL:</label>
                  <input placeholder='Paste your link here' className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="stack" id="stack" />
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </div>


              </form>
            </div>
          </div>
          </div>

          </div>
        </div>
        </main>}
    </>
  )
}

export default Setting