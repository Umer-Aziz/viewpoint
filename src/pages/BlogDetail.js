import React,{ useEffect } from "react";
import PostSwitcher from "../components/home/PostSwitcher";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';

const BlogDetail = () => {

  // first, find all the div.code blocks
   useEffect(() => {
    document.querySelectorAll('code').forEach((el) => {
      hljs.highlightElement(el);
    });
   }, [])
   
 
  return (
    <>
      <main className="container pt-10 pb-20 text-gray-600 dark:text-gray-300">
        <div className="grid gap-y-12 md:flex md:justify-between md:gap-x-6 lg:gap-x-8 xl:gap-x-12">
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
            <div className="main-content">
              <img
                className="my-3 bg-cover object-cover w-full rounded-md"
                src="https://media.istockphoto.com/id/1363276509/es/foto/maestra-dando-conferencias-de-ciencias-de-la-computaci%C3%B3n-a-diversos-grupos-multi%C3%A9tnicos-de.jpg?s=612x612&w=0&k=20&c=c8yFDf_yUJiC_qsRNBAo_kppLhY9RT5nXpcpcnhHGlM="
                alt="article-pic"
              />
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
          <div className="w-auto sm:w-72 md:w-80 xl:w-88">
            <PostSwitcher />
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
