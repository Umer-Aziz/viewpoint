import React from 'react'
import PostSwitcher from '../components/home/PostSwitcher'

const BlogDetail = () => {
  return (
    <>
        <main className='container pt-10 pb-20'>
          <div className='md:flex md:justify-between md:gap-x-6 lg:gap-x-8 xl:gap-x-12 relative'>
            <div className='border w-full'>
                <h1>Blog Detail</h1>
            </div>
            <div className='w-auto sm:w-72 md:w-80 xl:w-88'>
              <PostSwitcher/>
            </div>
            </div>
        </main>
    </>
  )
}

export default BlogDetail