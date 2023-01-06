import ApiContext from "./ApiContext";
import { useState } from "react";
const ApiState = (props)=>{
    const [blogSubscriber, setblogSubscriber] = useState({});
    const [Allblogs, setAllBlogs] = useState([]);
    const [pending, setPendingBlogs] = useState([]);
    const [publishedBlogs, setPublishedBlogs] = useState([]);
    const [ blogsEdit , setBlogsEdit ] = useState({});
    const [ userDetail , setUserDetail ] = useState({});
    const [ SocialLinks , setSocialLinks ] = useState({});
    const [ latestBlog , setLatestBlog ] = useState({});
    const [ mustreadBlogs , setmustReads ] = useState({});
    const [ RandomBlogs , setrandomPosts ] = useState({});
    const [ toppicksBlogs , setToppicksPosts ] = useState({});
    const [ trendingBlog , settrendingBlog ] = useState({});
    const [ CategoryBlog , setCategoryBlog ] = useState({});
    const [ nextBlog , setNextBlog ] = useState({});
    const [ previousBlog , setPreviousBlog ] = useState({});


    // GET subscriber 
    const GetSubscriber = async()=>{
        const response = await fetch(`/api/subscriber/getsubscriber`, {
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
        const response = await fetch(`/api/blogs`, {
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
        const response = await fetch(`/api/blogs/pending`, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
            },
          });
          const blogs = await response.json();
          setPendingBlogs(blogs);         
    }
//    GET All Published Blogs 
    const GetAllPublishedBlogs = async()=>{
        const response = await fetch(`/api/blogs/published`, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
            },
          });
          const blogs = await response.json();
          setPublishedBlogs(blogs);         
    }

    //GET EDIT BLOG
    const getBlogsEdit = async(url)=>{
      const response = await fetch(`/api/blogs/slug/${url}`, {
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
      const response = await fetch(`/api/auth/getuser`, {
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
      const response = await fetch(`/api/links/getlinks`, {
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
      const response = await fetch(`/api/blogs/latest`, {
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
      const response = await fetch(`/api/blogs/trending`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const trending = await response.json();
      settrendingBlog(trending);
    } 

    // GET mustreads blogs 

    const getMustreads = async()=>{
      const response = await fetch(`/api/blogs/mustreads`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const mustreads = await response.json();

      setmustReads(mustreads);
    } 

     // GET randomposts blogs 

     const getRandomPosts = async()=>{
      const response = await fetch(`/api/blogs/randomposts`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const randomposts = await response.json();

      setrandomPosts(randomposts);
    } 

     // GET toppicks blogs 

     const gettopPicksPosts = async()=>{
      const response = await fetch(`/api/blogs/toppicks`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const toppicks = await response.json();

      setToppicksPosts(toppicks);
    } 

     //GET Category  Blogs
     const getCategoryBlogs = async(category)=>{
      const response = await fetch(`/api/blogs/category/${category}`, {
        method: "GET",
        headers: {
          'Content-Type': "application/json",
        },
      });
      const categoryBlog = await response.json();
      setCategoryBlog(categoryBlog);
    } 

        // Next BLOG API 
  const GetNextBlogs = async (id) => {
    // API Call
   const response =  await fetch(`/api/blogs/next/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const nextBlogs = await response.json();
    setNextBlog(nextBlogs);
  }

  // Previous BLOG API 
  const GetPreviousBlogs = async (id) => {
  // API Call
   const response = await fetch(`/api/blogs/previous/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const previousBlogs = await response.json();
  setPreviousBlog(previousBlogs);
}


      // DELETE BLOG API 
  const deleteBlogs = async (id) => {
    // API Call
     await fetch(`/api/blogs/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token'),
      }
    });
    const newBlogs = Allblogs.filter((blog) => { return blog._id !== id })
    setAllBlogs(newBlogs);
  }

  // DELETE Subscriber API 
     const deleteSubscriber = async (id) => {
        // API Call
         await fetch(`/api/subscriber/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token":localStorage.getItem('token'),
          }
        });
        const deleteSubs = blogSubscriber.filter((blogsub) => { return blogsub._id !== id })
        setblogSubscriber(deleteSubs);
      }
 
    return(
        <ApiContext.Provider value={{blogSubscriber,Allblogs,pending, blogsEdit ,userDetail,SocialLinks,
         latestBlog , trendingBlog , CategoryBlog , nextBlog , previousBlog , publishedBlogs , mustreadBlogs ,
         RandomBlogs, toppicksBlogs , 
        GetSubscriber , deleteSubscriber ,GetAllBlogs , deleteBlogs, GetAllPendingBlogs,getBlogsEdit, setBlogsEdit, getUserDetail, 
        getSocialLinks , getLatestBlogs, getTrendingBlogs, getCategoryBlogs , GetNextBlogs , GetPreviousBlogs ,
         GetAllPublishedBlogs, getMustreads , getRandomPosts , gettopPicksPosts }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState