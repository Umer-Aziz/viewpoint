import ApiContext from "./ApiContext";
import { useState } from "react";
const ApiState = (props)=>{
    const [blogSubscriber, setblogSubscriber] = useState({});
    const [Allblogs, setAllBlogs] = useState([]);
    const [pending, setPendingBlogs] = useState([]);
    const [ blogsEdit , setBlogsEdit ] = useState({});
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
        <ApiContext.Provider value={{blogSubscriber,Allblogs,pending, blogsEdit ,GetSubscriber,GetAllBlogs , deleteBlogs, GetAllPendingBlogs,getBlogsEdit}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState