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
          <div className='py-10 lg:py-0 lg:pl-4 w-full'>
          <h4 class="text-2xl text-orange-600 mb-4">Settings</h4>

         <div className='grid lg:grid-cols-2 border'>
         {/* profile detail */}
          <div className='grid gap-8 border w-full'>
            <div className='w-80 h-80 rounded-full overflow-hidden shadow-xl'>
              <img className='bg-cover bg-center object-cover' src="https://user-images.githubusercontent.com/62507205/183687106-3d0979dd-9e78-49e9-86e4-0cb127a713d0.png" alt="profile-pic" />
            </div>

            <div className='bg-light-gray dark:bg-dull-gray p-4 rounded-md'>
              <h3 className='py-2 border-b text-lg font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>User Profile Settings</h3>
              <form action="" className='py-3'>
                <div className='grid gap-y-1'>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
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