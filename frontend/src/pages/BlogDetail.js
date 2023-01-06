import React,{ useEffect, useState , useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { WiTime8 } from "react-icons/wi"
import PostSwitcher from "../components/home/PostSwitcher";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
import 'react-toastify/dist/ReactToastify.css';
import { FacebookShareButton , TwitterShareButton , TelegramShareButton , WhatsappShareButton , LinkedinShareButton } from "react-share";
import { FacebookIcon , TwitterIcon , TelegramIcon , WhatsappIcon , LinkedinIcon } from "react-share";
import { useLocation , useNavigate , Link } from "react-router-dom";
import moment from "moment";
import { Parser } from 'html-to-react';
import ApiContext from "../context/ApiContext";
import { Helmet } from "react-helmet";
const BlogDetail = ({Toast}) => {

  const navigate = useNavigate();
  const [ blogs , setBlogs ] = useState({});

  const { GetNextBlogs , GetPreviousBlogs , nextBlog , previousBlog , mustreadBlogs , getMustreads } = useContext(ApiContext);

  const location = window.location.href;
  let ShareUrl = location;

  // get blogs url 
  const path = useLocation();
  const url = path.pathname.replace("/article/", "") ;
  const Id = blogs._id;

  useEffect(()=>{
    getBlogSlug();
    getMustreads();
  },[])


  // first, find all the div.code blocks
   useEffect(() => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
      el.addEventListener("click",()=>{
       let CopyText = el.innerText;
        navigator.clipboard.writeText(CopyText);
        Toast("📋 Code Copied!")
      })
    });
    hljs.configure({ignoreUnescapedHTML: true});
    hljs.safeMode();

    
   })
 
   const getBlogSlug = async()=>{
    const response = await fetch(`/api/blogs/slug/${url}`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
      },
    });
    const slug = await response.json();
    setBlogs(slug);
  }

  const { title , slug , description , category , updatedAt , BImg, content , tags} = blogs;
  const date = moment(updatedAt).format('Do MMMM , YYYY');



  let previousslug ;
  let nextslug ;
  let preSuccess ;
  let NextSuccess ;

  useEffect(()=>{
    if(Id){
      GetNextBlogs(Id);
      GetPreviousBlogs(Id);
    } 
  },[Id])

  if(previousBlog.blogs){
  previousslug = previousBlog.blogs.slug;
  preSuccess = false;
  }
  if(nextBlog.blogs){
    nextslug = nextBlog.blogs.slug;
    NextSuccess = false;
  }
if(!previousBlog.blogs){
    preSuccess = true;
}
if(!nextBlog.blogs){
  NextSuccess = true;
}

  const previousPost = ()=>{
    navigate(`/article/${previousslug}`);
    window.location.reload();
    window.scrollTo(0,0)

  }
  const NextPost = ()=>{
    navigate(`/article/${nextslug}`);
    window.location.reload();
    window.scrollTo(0,0)

  }

  function checkURLchange(){
    if(window.location.href != oldURL){
       oldURL = window.location.href;
       window.location.reload();
       window.scrollTo(0,0);
    }
  }
  var oldURL = window.location.href;
  setInterval(checkURLchange, 1000);
  
  return (
    <>  
    <Helmet>
            <title>{title}</title>
            <meta name="keywords" content={ tags && tags.map && tags.map((tag)=>{ return tag })}/>
            <meta name="description" content={title} />
            <link rel="canonical" href={`https://pointview.tech/blogs/${slug}`} />

            {/* og meta tag  */}

            <meta property="og:url" content={`https://pointview.tech/blogs/${slug}`}/>
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={BImg}/>

            {/* Twitter card tag */}

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@umeraziz_00" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description"  content={description}/>
            <meta name="twitter:image" content={BImg} />

    </Helmet>
      <main className="container pt-10 pb-20 text-gray-600 dark:text-gray-300">
        <div className="grid gap-y-12 md:flex md:justify-between md:gap-x-6 lg:gap-x-8 xl:gap-x-12">
        <div>
          <article className="w-full">
            <div>
              <h6 className="text-sm font-medium text-orange-600 capitalize">
                {category}
              </h6>
              <h1 className="py-1 text-2xl lg:text-3xl font-semibold md:max-w-3xl">
                {title}
              </h1>
              <p className="text-sm font-medium md:font-semibold dark:text-gray-400">
                {date}
              </p>
            </div>

            {/* tags keywords & Social Share  */}
            <div className="my-2 grid gap-y-2 lg:flex lg:justify-between items-center">
              <div className="flex gap-x-4 md:gap-x-6 text-sm font-medium text-orange-600">
                <ul className="flex gap-x-3 capitalize">
                {
                  tags && tags.map((tag,index)=>{
                    return (
                      <li key={index}>#{tag}</li>
                    )
                  })
                }
                </ul>
              </div>

              <div>
                <div className="flex gap-2 justify-end">
                     <FacebookShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag={tags && tags.map && tags.map((tag)=>{ return tag })}>
                      <FacebookIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </FacebookShareButton>

                     <TwitterShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag={tags && tags.map && tags.map((tag)=>{ return tag })}>
                      <TwitterIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </TwitterShareButton>

                     <WhatsappShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag={tags && tags.map && tags.map((tag)=>{ return tag })}>
                      <WhatsappIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </WhatsappShareButton>

                     <TelegramShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag={tags && tags.map && tags.map((tag)=>{ return tag })}>
                      <TelegramIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </TelegramShareButton>

                     <LinkedinShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag={tags && tags.map && tags.map((tag)=>{ return tag })}>
                      <LinkedinIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </LinkedinShareButton>

                </div>
              </div>
            </div>

            {/* main Content  */}
            <div className="main-content w-full">
              <div>
              <img
                className="my-3 bg-cover object-cover w-full rounded-md"
                src={BImg}
                alt="article-pic"
              />
              </div>
              <div className="article-content">
              {Parser().parse(content)}
              </div>
            </div>
          </article>
          
          {/* previous / Next Post  */}
          <div className="md:px-8 flex justify-between pt-6 pb-10 border-b border-gray-600 border-opacity-10 dark:border-opacity-30">
          <button disabled={preSuccess} onClick={()=>{previousPost()}} className={`flex items-center gap-x-0.5 font-semibold ${preSuccess == false ? "text-orange-600 hover:text-orange-700" : "text-orange-900 cursor-not-allowed"}`}><IoIosArrowBack/> Previous</button>
            <button disabled={NextSuccess} onClick={()=>{NextPost()}} className={`flex items-center gap-x-0.5 font-semibold ${NextSuccess == false ? "text-orange-600 hover:text-orange-700" : "text-orange-900 cursor-not-allowed"}`}><span>Next</span><IoIosArrowForward/></button>
          </div>

          {/* Similar posts  */}

           <div className="my-10">
           <h3 className="px-3 py-1 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase">Author Choice</h3>

          <div className='py-6 grid gap-y-6 md:grid-cols-2 xl:grid-cols-3 gap-x-6'>
          {
            mustreadBlogs && mustreadBlogs.map && mustreadBlogs.slice(1,4).map((post)=>{
              const { _id , slug , title , BImg , description , category , updatedAt } = post ;
              const date = moment(updatedAt).format('D MMMM , YYYY')
              return (
               <a key={_id} href={`/article/${slug}`}>
               <div className='py-3 shadow rounded group cursor-pointer'>
                <div className='overflow-hidden w-full rounded md:rounded-md'>
                <img className='bg-cover md:h-40 xl:h-52 object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
                duration-500' 
                src={BImg} alt="blog-posts" />
                </div>
                <div className='px-2 lg:px-3'>
                <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">{category}</p>
                <h3 className="my-2 text-xl font-semibold blog-title">{title}</h3>
                <p className='hidden xl:block my-1 blog-description'>{description}</p>
                <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                    <WiTime8 className="text-sm" />
                    <span className="text-sm font-semibold">
                    {date}
                    </span>
                </p>
                </div>
                </div>
               </a>
              )
            })
          }

          </div>

        </div>

          </div>


          <div className="w-auto sm:w-72 md:w-80 xl:w-88">
            <PostSwitcher />
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
