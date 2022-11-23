import React from 'react'
import Sidebar from '../components/admin/Sidebar'

const Setting = () => {
  return (
    <>
      <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* Setting */}      
          <div className='py-10 lg:py-0 lg:pl-4 w-full text-gray-600 dark:text-gray-300'>
          <h4 class="text-2xl text-orange-600 mb-4">Settings</h4>

         <div className='grid lg:grid-cols-2'>
         {/* profile detail */}
          <div className='grid gap-8 w-full'>
            <div className='w-80 h-80 rounded-full overflow-hidden shadow-xl'>
              <img className='bg-cover bg-center object-cover' src="https://user-images.githubusercontent.com/62507205/183687106-3d0979dd-9e78-49e9-86e4-0cb127a713d0.png" alt="profile-pic" />
            </div>

            <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md'>
              <h3 className='py-2 border-b text-lg font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>User Profile Settings</h3>
              <form action="" className='py-3 grid gap-4'>
              <div className='grid grid-cols-2 gap-x-4'>
                <div className='grid gap-y-1'>
                  <label htmlFor="name">Name</label>
                  <input placeholder='name' className='outline-none py-2 px-4 rounded text-gray-600' type="text" name="name" id="name" />
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="name">Profile Pic</label>
                  <input placeholder='image url' className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="pic" id="pic" />
                  </div>
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="name">Bio</label>
                  <textarea placeholder='Write about yourself...' className='outline-none py-2 px-4 rounded text-gray-600' type="text" name="name" id="name" ></textarea>
                  </div>
                  <div>
                  <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Update</button>
                  </div>
              </form>
            </div>
          </div>

          {/* Social Links  */}
          <div></div>
          </div>
          </div>
        </div>
        </main>
    </>
  )
}

export default Setting