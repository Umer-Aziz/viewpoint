import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Overview from '../components/admin/Overview'
import Sidebar from '../components/admin/Sidebar'

const Dashboard = ({Toast}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/dashboard/login");
    }
  }, []);
  return (
    <>
       {localStorage.getItem('token') && <main className='container py-10 overflow-x-hidden w-full'>
        <div className='lg:flex '>
        {/* Sidebar  */}
         <Sidebar/>
          {/* overview */}      
          <Overview Toast={Toast}/>
        </div>
        </main>}
    </>
  )
}

export default Dashboard