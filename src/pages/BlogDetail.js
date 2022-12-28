import React,{ useEffect, useState , useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { WiTime8 } from "react-icons/wi"
import PostSwitcher from "../components/home/PostSwitcher";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
import 'react-toastify/dist/ReactToastify.css';
import { FacebookShareButton , TwitterShareButton , TelegramShareButton , WhatsappShareButton , LinkedinShareButton } from "react-share";
import { FacebookIcon , TwitterIcon , TelegramIcon , WhatsappIcon , LinkedinIcon } from "react-share";
import { useLocation , useNavigate } from "react-router-dom";
import moment from "moment";
import { Parser } from 'html-to-react';
import ApiContext from "../context/ApiContext";
const BlogDetail = ({Toast}) => {

  const navigate = useNavigate();
  const [ blogs , setBlogs ] = useState({});

  const { GetNextBlogs , GetPreviousBlogs , nextBlog , previousBlog } = useContext(ApiContext);

  const location = window.location.href;
  let ShareUrl = location;

  // get blogs url 
  const path = useLocation();
  const url = path.pathname.replace("/article/", "") ;
  const Id = blogs._id;

  useEffect(()=>{
    getBlogSlug();
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
    const response = await fetch(`${process.env.REACT_APP_HOST}/blogs/${url}`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
      },
    });
    const slug = await response.json();
    setBlogs(slug);
  }

  const { title , category , updatedAt , BImg, content , tags} = blogs;
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
  }
  const NextPost = ()=>{
    navigate(`/article/${nextslug}`);
    window.location.reload();
  }

  function checkURLchange(){
    if(window.location.href != oldURL){
       window.location.reload()
       oldURL = window.location.href;
    }
  }
  
  var oldURL = window.location.href;
  setInterval(checkURLchange, 1000);


  return (
    <>  
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
                     <FacebookShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag=" #Technology ">
                      <FacebookIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </FacebookShareButton>

                     <TwitterShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag=" #Technology ">
                      <TwitterIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </TwitterShareButton>

                     <WhatsappShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag=" #Technology ">
                      <WhatsappIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </WhatsappShareButton>

                     <TelegramShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag=" #Technology ">
                      <TelegramIcon className="w-10 hover:scale-110 transition-all duration-300" round={true}/>
                     </TelegramShareButton>

                     <LinkedinShareButton url={ShareUrl} quote="Lorem ipsum dolor sit amet consectetur adipisicing." hashtag=" #Technology ">
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
           <h3 className="px-3 py-1 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase">Similar Posts</h3>
          <div className='py-6 grid gap-y-6 md:grid-cols-2 xl:grid-cols-3 gap-x-6'>

            <div className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='bg-cover md:h-40 xl:h-52 object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src="https://media.istockphoto.com/id/1402667894/es/foto/pantalla-de-conferencia-de-energ%C3%ADa.jpg?s=612x612&w=0&k=20&c=if8B0E4TJ1ohnU-yZKGXosQfx2ctOh7JTWllo6VxWkc=" alt="blog-posts" />
            </div>
            <div className='px-2 lg:px-3'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">Technology</p>
            <h3 className="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
            <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                <WiTime8 className="text-sm" />
                <span className="text-sm font-semibold">
                12 November, 2022
                </span>
            </p>
            </div>
            </div>

            <div className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='bg-cover md:h-40 xl:h-52 object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src="https://media.istockphoto.com/id/854321536/es/foto/mira-este-vestido-magn%C3%ADfico.jpg?s=612x612&w=0&k=20&c=6Nh1enezE-wNc-GXA3ADbKHH7AiVSYZFmCjXu84q_tw=" alt="blog-posts" />
            </div>
            <div className='px-2 lg:px-3'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">LifeStyle</p>
            <h3 className="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
            <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                <WiTime8 className="text-sm" />
                <span className="text-sm font-semibold">
                12 November, 2022
                </span>
            </p>
            </div>
            </div>

            <div className='py-3 shadow rounded group cursor-pointer'>
            <div className='overflow-hidden w-full rounded md:rounded-md'>
            <img className='md:h-40 xl:h-52 bg-cover object-fill rounded lg:rounded-md w-full group-hover:scale-105 transition-all 
            duration-500' 
            src="https://media.istockphoto.com/id/155596905/es/foto/mujer-ropa-de-alta-categor%C3%ADa.jpg?s=612x612&w=0&k=20&c=AOusb6rXetcs-beZ9IK70-cCOUQccT-rupOqFhjlCTg=" alt="blog-posts" />
            </div>
            <div className='px-2 lg:px-3'>
            <p className="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">LifeStyle</p>
            <h3 className="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
            <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                <WiTime8 className="text-sm" />
                <span className="text-sm font-semibold">
                12 November, 2022
                </span>
            </p>
            </div>
            </div>

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
