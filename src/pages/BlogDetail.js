import React,{ useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { WiTime8 } from "react-icons/wi"
import PostSwitcher from "../components/home/PostSwitcher";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
import { ToastContainer, toast , Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customId = "custom-id-yes";

const BlogDetail = () => {

  const Toast = (text)=>{
    toast.info(text, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:"colored",
        transition: Zoom , 
        toastId: customId
        });
}

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

    
   }, [])
 
  return (
    <>  
      <ToastContainer toastStyle={{ backgroundColor: "#ea4c13" }}/>
      <main className="container pt-10 pb-20 text-gray-600 dark:text-gray-300">
        <div className="grid gap-y-12 md:flex md:justify-between md:gap-x-6 lg:gap-x-8 xl:gap-x-12">
        <div>
          <article className="w-full">
            <div>
              <h6 className="text-sm font-medium text-orange-600 capitalize">
                technology
              </h6>
              <h1 className="py-1 text-2xl lg:text-3xl font-semibold md:max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
              <p className="text-sm font-medium md:font-semibold dark:text-gray-400">
                20th September 2022
              </p>
            </div>

            {/* tags keywords & Social Share  */}
            <div className="my-2 md:flex md:justify-between items-center">
              <div className="flex gap-x-4 md:gap-x-6 text-sm font-medium capitalize text-orange-600">
                <p>#Al</p>
                <p>#technology</p>
                <p>#productivity</p>
              </div>

              <div>Social Share</div>
            </div>

            {/* main Content  */}
            <div className="main-content w-full">
              <div>
              <img
                className="my-3 bg-cover object-cover w-full rounded-md"
                src="https://media.istockphoto.com/id/1363276509/es/foto/maestra-dando-conferencias-de-ciencias-de-la-computaci%C3%B3n-a-diversos-grupos-multi%C3%A9tnicos-de.jpg?s=612x612&w=0&k=20&c=c8yFDf_yUJiC_qsRNBAo_kppLhY9RT5nXpcpcnhHGlM="
                alt="article-pic"
              />
              </div>
              <div className="article-content">
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis nostrum aut vitae error aspernatur consequatur
                  doloribus, accusantium in minima incidunt dolore reprehenderit
                  ut non dolorum consectetur. Reiciendis expedita sapiente
                  doloribus voluptates labore minima harum autem, ullam iste
                  amet, animi accusantium? Necessitatibus odit itaque, dolores
                  totam modi illo libero ducimus quaerat, ipsum deserunt
                  repudiandae hic commodi, consectetur quidem! Quidem itaque ad
                  dicta libero ullam quasi, laudantium illum excepturi provident
                  maiores vero ipsa id. Porro ullam possimus ducimus dicta
                  commodi quae ipsam harum esse ea veritatis, sequi sint impedit
                  perspiciatis blanditiis illo. Nam rem voluptates vel ratione
                  consequatur, accusantium enim blanditiis maiores iure aliquid
                  aspernatur repellendus quis ducimus magnam deleniti
                  consectetur! Minus officia cum libero sit magni.
                  Necessitatibus, quas recusandae! Magnam aliquam, possimus
                  maxime autem in odit consequuntur, ex doloribus sint alias
                  necessitatibus, atque omnis consequatur magni qui impedit
                  deleniti laborum consectetur esse earum dolores totam tempora.
                  Provident delectus illo necessitatibus quasi vitae iste quae
                  tenetur quos? Deserunt doloribus iure suscipit quia.
                </p>
                <pre>
                  <code>  
{
  `p {
    position: relative;
    background-color: blue;
}

p:before {
    content: '';
    position: absolute;
    left:100%;
    width: 10px;
    height: 100%;
    background-color: red;
}`
}
                  </code>
     
                </pre>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur ut, omnis voluptate nesciunt rerum pariatur,
                  aliquam eius eum repellat doloribus, illo doloremque
                  accusantium facilis. Minus explicabo, velit amet doloremque
                  atque animi odit, eos repudiandae illo fuga id aspernatur
                  eligendi. Autem.
                </p>
                <ol>
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor, sit amet consectetur</li>
                  <li>Lorem ipsum dolor, sit amet consectetur sahdh</li>
                  <li>Lorem ipsum dolor, sit sfsdgddhjtju consectetur sahdh</li>
                </ol>
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  quisquam vel repellat praesentium voluptatum amet, pariatur
                  vitae soluta, veniam dolores quod eveniet rem beatae ducimus
                  expedita esse. Libero qui laborum quos sapiente dolorum, non
                  praesentium, commodi sunt dolorem expedita minus vel
                  exercitationem eius excepturi a asperiores numquam perferendis
                  molestiae reprehenderit officia aut. Tempora suscipit nulla
                  fuga rem, harum debitis animi?
                </p>
                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corrupti voluptate aut nulla illo, dignissimos sed aspernatur
                  consequuntur placeat qui dicta nobis. Cupiditate expedita non
                  cum molestiae sunt ab suscipit sed, sapiente in.
                </p>
                <a href="/">Lorem, ipsum dolor.</a>
                <pre>
                  <code>  
{
  `// Online C++ compiler to run C++ program online
#include <iostream>

int main() {
    // Write C++ code here
    std::cout << "Hello world!";

    return 0;
}`
}
                  </code>
     
                </pre>
              </div>
            </div>
          </article>
          
          {/* previous / Next Post  */}
          <div className="md:px-8 flex justify-between pt-6 pb-10 border-b border-gray-600 border-opacity-10 dark:border-opacity-30">
            <button className="flex items-center gap-x-0.5 font-semibold text-orange-600 hover:text-orange-700"><IoIosArrowBack/> Previous</button>
            <button className="flex items-center gap-x-0.5 font-semibold text-orange-600 hover:text-orange-700"><span>Next</span><IoIosArrowForward/></button>
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
