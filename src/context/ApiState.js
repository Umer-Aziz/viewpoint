import ApiContext from "./ApiContext";
import { useState } from "react";
const ApiState = (props)=>{
    const [blogSubscriber, setblogSubscriber] = useState({});
    const [Allblogs, setAllBlogs] = useState([]);
    const [pending, setPendingBlogs] = useState([]);
    const [ blogsEdit , setBlogsEdit ] = useState({});
    const [ userDetail , setUserDetail ] = useState({});
    const [ SocialLinks , setSocialLinks ] = useState({});
    // GET subscriber 
    const GetSubscriber = async()=>{
        const response = await fetch(`${process.env.REACT_APP_HOST}/subscriber/getsubscriber`, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
              "auth-token":localStorage.getItem("token")
            },
          });
          const subscriber = await response.json();
          setblogSubscriber(subscriber);
          
         
    }

//    GET All Blogs 
    const GetAllBlogs = async()=>{
        const response = await fetch(`${process.env.REACT_APP_HOST}/blogs`, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
            },
          });
          const blogs = await response.json();
          setAllBlogs(blogs);         
    }

//    GET All Pending Blogs 
    const GetAllPendingBlogs = async()=>{
        const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/pending`, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
            },
          });
          const blogs = await response.json();
          setPendingBlogs(blogs);         
    }

    //GET EDIT BLOG
    const getBlogsEdit = async(url)=>{
      const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/${url}`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const blogs = await response.json();
      setBlogsEdit(blogs);
    }
   
    //GET USER DETAIL
    const getUserDetail = async()=>{
      const response = await fetch(`${process.env.REACT_APP_HOST}/auth/getuser`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          "auth-token":localStorage.getItem("token")
        },
      });
      const detail = await response.json();
      setUserDetail(detail);
    }

    //GET Links 
    const getSocialLinks = async()=>{
      const response = await fetch(`${process.env.REACT_APP_HOST}/links/getlinks`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const links = await response.json();
      setSocialLinks(links);
    }

      // DELETE BLOG API 
  const deleteBlogs = async (id) => {
    // API Call
     await fetch(`${process.env.REACT_APP_HOST}/blogs/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token'),
      }
    });
    const newBlogs = Allblogs.filter((blog) => { return blog._id !== id })
    setAllBlogs(newBlogs);
  }
 
    return(
        <ApiContext.Provider value={{blogSubscriber,Allblogs,pending, blogsEdit ,userDetail,SocialLinks,
        GetSubscriber,GetAllBlogs , deleteBlogs, GetAllPendingBlogs,getBlogsEdit, setBlogsEdit, getUserDetail, getSocialLinks}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState