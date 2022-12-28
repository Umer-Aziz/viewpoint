import React , { useEffect , useContext } from "react";
import { WiTime8 } from "react-icons/wi";
import PostSwitcher from "./PostSwitcher";
import { Link } from "react-router-dom";
import ApiContext from "../../context/ApiContext";
import moment from "moment";
const Homehero = () => {

  const { publishedBlogs , GetAllPublishedBlogs } = useContext(ApiContext);

  useEffect(() => {
    GetAllPublishedBlogs();
  }, [])

  return (
    <>
      <section className="container mx-auto py-10 text-gray-700 dark:text-gray-300">
        <div className="grid gap-y-6 sm:flex sm:gap-x-6">
          <div className="grid gap-y-6 lg:flex sm:gap-x-6 lg:gap-x-6">
            {/* main div */}
            <div className="sm:max-w-xl xl:min-w-[38rem] shadow rounded group cursor-pointer">
            {
              publishedBlogs && publishedBlogs.map && publishedBlogs.slice(0,1).map((post)=>{
                const { _id , slug , title , BImg , description , category , updatedAt } = post;
                    const date = moment(updatedAt).format("D MMMM , YYYY")
                return (
                  <Link key={_id} to={`/article/${slug}`}>
              <div className="max-h-80 lg:max-h-max overflow-hidden rounded md:rounded-md">
                <img
                  className="sm:min-h-[18rem] xl:min-h-[22rem] bg-cover w-full rounded md:rounded-md object-cover group-hover:scale-105 transition-all duration-500"
                  src={BImg} alt="blog-post"
                />
              </div>
              <div className="px-3 sm:px-4 pb-3">
                <p className="mt-3 font-semibold text-orange-600 text-sm capitalize">
                  {category}
                </p>
                <h3 className="my-2 text-2xl font-semibold blog-title">
                  {title}
                </h3>
                <p className="blog-description">
                  {description}
                </p>
                <div className="mt-2">
                  <p className="flex items-center gap-x-1 text-gray-500">
                    <WiTime8 className="text-sm" />
                    <span className="text-sm font-semibold">
                      {date}
                    </span>
                  </p>
                </div>
              </div>
              </Link>
                )
              })
            }
            </div>

           {

            publishedBlogs && publishedBlogs.map && publishedBlogs.slice(1,2).map((post)=>{
              const { _id , slug , title , BImg , description , category , updatedAt } = post;
                    const date = moment(updatedAt).format("D MMMM , YYYY")
              return (
           <div key={_id} className="lg:max-w-xs shadow rounded group cursor-pointer">
                <Link  to={`/article/${slug}`}>
              <div className="max-h-72 xl:max-h-80 overflow-hidden rounded">
                <img
                  className="bg-center object-cover xl:h-80 w-full rounded group-hover:scale-105 transition-all duration-500"
                 src={BImg} alt="blog-post"
                />
              </div>
              <div className="px-3 sm:px-4 pb-3">
                <p className="mt-3 font-semibold text-orange-600 text-sm">
                  {category}
                </p>
                <h3 className="my-2 text-xl font-semibold blog-title">
                  {title}
                </h3>
                <p className="blog-description">
                  {description}
                </p>
                <div className="mt-2">
                 <p className="flex items-center gap-x-1 text-gray-500">
                    <WiTime8 className="text-sm" />
                    <span className="text-sm font-semibold">
                      {date}
                    </span>
                  </p>
                </div>
              </div>
           </Link>
            </div>
              )
            })

           }
          </div>

<PostSwitcher/>
          
        </div>
      </section>
    </>
  );
};

export default Homehero;
