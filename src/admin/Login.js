import React , {useState} from 'react'
import { FaUserLock } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import { RiLoginCircleLine } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
const Login = ({Toast}) => {

  const navigate = useNavigate();
  const [credentials , setCredentials] = useState({email:"", password:""});

  const handleChange = (e)=>{
    setCredentials({...credentials, [e.target.name] : e.target.value} );
}

const handleSubmit =async (e)=>{
  e.preventDefault();
  const { email , password } = credentials;
  const response = await fetch(`${process.env.REACT_APP_HOST}/auth/admin/login`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ email, password })
    });
    const login = await response.json();
    if(login.success){
      localStorage.setItem("token",login.authtoken);
      navigate("/dashboard/setting");
      Toast("You are login successfully!")
    } 
    else{
       Toast(login.Error)
    }
}

  return (
    <>
         <main className='container py-10 overflow-x-hidden w-full'>
           <div className='min-h-[60vh] mt-20'>
           <form method='POST' onSubmit={handleSubmit}
            className='px-6 pt-6 pb-8 max-w-sm mx-auto bg-light-gray dark:bg-dull-gray rounded-md'>
           <h3 className='pb-2 border-b text-lg md:text-xl font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>Admin Login</h3>
        <div className="flex flex-col mt-3 mb-6">
          <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-400">E-Mail Address:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 ">
              <MdAlternateEmail className='text-lg text-orange-600'/>
            </div>
            <input id="email" type="email" name="email"  onChange={handleChange} value={credentials.email}
            className="text-sm sm:text-base text-gray-600 placeholder-gray-500 pl-10 pr-4 rounded-lg border
             border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400" placeholder="E-Mail Address" required />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-400">Password:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10">
                <FaUserLock className='text-lg text-orange-600'/>
            </div>

            <input id="password" type="password" name="password"  onChange={handleChange} value={credentials.password}
            className="text-sm sm:text-base text-gray-600 placeholder-gray-500 pl-10 pr-4 rounded-lg border
             border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400" placeholder="Password" required/>
          </div>
        </div>
        <div className="flex">
          <button type="submit" className="btn w-full flex justify-center">
            <span className="mr-2 uppercase">Login</span>
            <RiLoginCircleLine className="text-lg"/>
          </button>
        </div>
      </form>
           </div>
         </main>
    </>
  )
}

export default Login