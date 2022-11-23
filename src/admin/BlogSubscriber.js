import React from 'react'
import Sidebar from '../components/admin/Sidebar'

const BlogSubscriber = () => {
  return (
   <>
     <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* overview */}      
          <h1>Blog Subscriber</h1>
        </div>
        </main>
   </>
  )
}

export default BlogSubscriber