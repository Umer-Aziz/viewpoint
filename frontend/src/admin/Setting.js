import React, { useEffect , useContext , useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import { useNavigate } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import { Helmet } from "react-helmet";

const Setting = ({Toast}) => {
  
  const navigate = useNavigate();
  const { getUserDetail , getSocialLinks , userDetail , SocialLinks} = useContext(ApiContext);
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/dashboard/login");
    }
    getUserDetail();
    getSocialLinks();
  }, []);

  const [ formstate , setFormstate ] = useState({});
  const [ linksstate , setLinkstate ] = useState({});
  const { _id } = userDetail;
  if(SocialLinks.links){
    var { facebook  , instagram , twitter , github , linkedin , stackoverflow  } = SocialLinks.links[0]
  }
  
  const changeHandler = (event)=>{
    setFormstate({ ...formstate , [event.target.name] : event.target.value}) 
  }

  // links handler 
  const LinksHandler = (event)=>{
    setLinkstate({ ...linksstate , [event.target.name] : event.target.value}) 
  }
 
  // update user 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const { name , profilePic , phone , Bio , email , password } = formstate;

      // API Call 
   const response = await fetch(`/api/auth/updateuser/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token'),
    },
    body: JSON.stringify({ name , profilePic , phone , Bio , email , password })
  });
  const json = await response.json(); 

   let newBlogs = JSON.parse(JSON.stringify(json))
  // Logic to edit in client
  for (let index = 0; index < newBlogs.length; index++) {
    const element = newBlogs[index];
    if (element._id === _id) {
      newBlogs[index].name = name;
      newBlogs[index].profilePic = profilePic;
      newBlogs[index].phone = phone;
      newBlogs[index].Bio = Bio;
      break; 
    }
  }  
  if(!password == "" || !email == ""){
    localStorage.removeItem("token");
  }
  window.location.reload()
  Toast("Profile Setting has been updated!");
  }

  // update sociallinks 

  const handleLinkSubmit = async(e)=>{
    e.preventDefault();
    let { _id } =  SocialLinks.links[0]
    const { facebook  , instagram , twitter , github , linkedin , stackoverflow  } = linksstate

      // API Call 
   const response = await fetch(`/links/updatelinks/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token'),
    },
    body: JSON.stringify({ facebook  , instagram , twitter , github , linkedin , stackoverflow  })
  });
  const json = await response.json(); 

   let updateLinks = JSON.parse(JSON.stringify(json))
  // Logic to edit in client
  for (let index = 0; index < updateLinks.length; index++) {
    const element = updateLinks[index];
    if (element._id === _id) {
      updateLinks[index].facebook = facebook;
      updateLinks[index].instagram = instagram;
      updateLinks[index].twitter = twitter;
      updateLinks[index].github = github;
      updateLinks[index].linkedin = linkedin;
      updateLinks[index].stackoverflow = stackoverflow;
      break; 
    }
  }  
  Toast("Links has been updated!");
  }



  return (
    <>
    <Helmet>
            <title>Account Settings</title>
      </Helmet>
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
              <img className='bg-cover bg-center object-cover' src={userDetail.profilePic} alt="profile-pic" />
            </div>
           </div>

            <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md'>
              <h3 className='py-2 border-b text-lg font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>User Profile Settings</h3>
              <form className='py-3 grid gap-4' onSubmit={handleSubmit}>
              <div className='grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                <div className='grid gap-y-1'>
                  <label htmlFor="name">Name</label>
                  <input placeholder='name' onChange={changeHandler} value={formstate.name || userDetail.name } className='outline-none py-2 px-4 rounded text-gray-600' type="text" name="name" id="name" />
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="pic">Profile Pic</label>
                  <input placeholder='image url' onChange={changeHandler} value={formstate.profilePic || userDetail.profilePic } className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="profilePic" id="pic" />
                  </div>
                </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="phone">Contact Phone</label>
                  <input placeholder='Phone' onChange={changeHandler} value={formstate.phone || userDetail.phone } className='outline-none py-2 px-4 rounded text-gray-600' type="tel" name="phone" id="phone" />
                  </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="Bio">Bio</label>
                  <textarea onChange={changeHandler} placeholder='Write about yourself...' value={formstate.Bio || userDetail.Bio } className='lg:min-h-[8rem] outline-none py-2 px-4 rounded text-gray-600' type="text" name="Bio" id="Bio"></textarea>
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
              <form className='py-3 grid gap-4' onSubmit={handleSubmit}>
                <div className='grid gap-y-1'>
                  <label htmlFor="email">Email</label>
                  <input placeholder='New Email' onChange={changeHandler} value={ formstate.email || userDetail.email  } className='outline-none py-2 px-4 rounded text-gray-600' type="email" name="email" id="email" />
                  </div>
                <div className='grid gap-y-1'>
                  <label htmlFor="password">New Password</label>
                  <input placeholder='New Password' onChange={changeHandler} value ={ formstate.password || "" } className='outline-none py-2 px-4 rounded text-gray-600' type="password" name="password" id="password" />
                  </div>
                  <div>
                  <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Update</button>
                  </div>
              </form>
            </div>
            <div className='bg-light-gray dark:bg-dull-gray py-2 px-4 rounded-md'>
              <h3 className='py-2 border-b text-lg font-medium text-orange-600 border-gray-600 border-opacity-10 dark:border-opacity-30'>Social Links</h3>
              <div className='py-3 grid gap-4'>

              <form className='flex gap-x-4 items-end' onSubmit={handleLinkSubmit}>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="facebook">Facebook URL:</label>
                  <input placeholder='Paste your link here' className='outline-none py-2 px-4 rounded text-gray-600'
                   type="url" name="facebook" id="facebook" onChange={LinksHandler} value={ linksstate.facebook || ( facebook || "" ) }/>
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </form>

               <form className='flex gap-x-4 items-end' onSubmit={handleLinkSubmit}>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="instagram">Instagram URL:</label>
                  <input placeholder='Paste your link here' 
                  className='outline-none py-2 px-4 rounded text-gray-600' type="text" name="instagram" 
                  id="instagram" onChange={LinksHandler} value={ linksstate.instagram || ( instagram || "") }/>
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </form>

               <form className='flex gap-x-4 items-end' onSubmit={handleLinkSubmit}>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="twitter">Twitter URL:</label>
                  <input placeholder='Paste your link here' 
                  className='outline-none py-2 px-4 rounded text-gray-600' type="url" name="twitter" 
                  id="twitter" onChange={LinksHandler} value={ linksstate.twitter || ( twitter || "")  }/>
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </form>

               <form className='flex gap-x-4 items-end' onSubmit={handleLinkSubmit}>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="linkedin">LinkedIn URL:</label>
                  <input placeholder='Paste your link here' 
                  className='outline-none py-2 px-4 rounded text-gray-600' type="url"
                   name="linkedin" id="linkedin" onChange={LinksHandler} value={linksstate.linkedin || ( linkedin || "" ) }/>
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </form>

              <form className='flex gap-x-4 items-end' onSubmit={handleLinkSubmit}>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="github">Github URL:</label>
                  <input placeholder='Paste your link here' 
                  className='outline-none py-2 px-4 rounded text-gray-600' type="url" 
                  name="github" id="github" onChange={LinksHandler} value={ linksstate.github || (github || "") }/>
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </form>

               <form className='flex gap-x-4 items-end' onSubmit={handleLinkSubmit}>
                <div className='grid gap-y-1 w-full'>
                  <label htmlFor="stack">Stackoverflow URL:</label>
                  <input placeholder='Paste your link here' 
                  className='outline-none py-2 px-4 rounded text-gray-600' type="url" 
                  name="stackoverflow" id="stack" onChange={LinksHandler} value={ linksstate.stackoverflow || (stackoverflow || "") } />
                </div>
                <div>
                <button className='py-2 px-4 border text-orange-600 border-orange-600 rounded inline-block float-right hover:text-gray-100 hover:bg-orange-600'>Edit</button>
                </div>
               </form>

              </div>
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