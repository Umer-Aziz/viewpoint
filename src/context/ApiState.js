import ApiContext from "./ApiContext";
import { useState } from "react";
const ApiState = (props)=>{
    const [blogSubscriber, setblogSubscriber] = useState({});
    const [Allblogs, setAllBlogs] = useState([]);
    const [pending, setPendingBlogs] = useState([]);
    const [ blogsEdit , setBlogsEdit ] = useState({});
    const [ userDetail , setUserDetail ] = useState({});
    const [ SocialLinks , setSocialLinks ] = useState({});
    const [ latestBlog , setLatestBlog ] = useState({});
    const [ trendingBlog , settrendingBlog ] = useState({});
    const [ CategoryBlog , setCategoryBlog ] = useState({});
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

    //GET Latest  Blogs
    const getLatestBlogs = async()=>{
      const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/latest`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const latest = await response.json();
      setLatestBlog(latest);
    } 
     //GET Latest  Blogs
     const getTrendingBlogs = async()=>{
      const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/trending`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const trending = await response.json();
      settrendingBlog(trending);
    } 

     //GET Category  Blogs
     const getCategoryBlogs = async(category)=>{
      const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/category/${category}`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const categoryBlog = await response.json();
      setCategoryBlog(categoryBlog);
      console.log("blogs ", categoryBlog)
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
        <ApiContext.Provider value={{blogSubscriber,Allblogs,pending, blogsEdit ,userDetail,SocialLinks, latestBlog , trendingBlog , CategoryBlog ,
        GetSubscriber,GetAllBlogs , deleteBlogs, GetAllPendingBlogs,getBlogsEdit, setBlogsEdit, getUserDetail, getSocialLinks , getLatestBlogs , getTrendingBlogs, getCategoryBlogs}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState