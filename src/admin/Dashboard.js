import React from 'react'

import Overview from '../components/admin/Overview'
import Sidebar from '../components/admin/Sidebar'

const Dashboard = () => {
  return (
    <>
        <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* overview */}      
          <Overview/>
        </div>
        </main>
    </>
  )
}

export default Dashboard