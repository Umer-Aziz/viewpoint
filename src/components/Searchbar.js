import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {

    const [ query , setQuery ] = useState("");
    const [ blogs , setBlogs ] = useState({});
    const { filterBlogs } = blogs;
  console.log("blogs ", blogs)
   const onSearchSubmit = async (event) =>{
     event.preventDefault();
      console.log("click")
      try {
        let url=`${process.env.REACT_APP_HOST}/blogs/search?title=${query}`;
        const res =await fetch(url,{
            method:"GET",
            headers: {
                'Content-Type': "application/json",
              },
        });
        const data= await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
  
   }

  return (
    <>
    <div className="relative">
      <form onSubmit={onSearchSubmit} className="px-3 sm:px-4 py-2 bg-white flex items-center rounded border border-gray-300 dark:border-dull-black shadow-sm">
        <input
          className="outline-none bg-transparent text-gray-700 max-w-[150px] sm:max-w-max"
          type="search"
          name="search"
          id="search"
          onChange={(e)=>{setQuery(e.target.value)}}
          placeholder="Search.."
          required
          minLength={4}
        />
        <button>
          <BiSearch className="text-xl text-gray-600 hover:text-orange-600" />
        </button>
      </form>
      <div className="absolute top-12 left-0 bg-gray-50 w-full rounded shadow-md z-20">
        <ul className="text-gray-600 rounded">
        {
            filterBlogs && filterBlogs.map && filterBlogs.map((post)=>{
                const { _id , slug , title } = post;
                return(
                    <li key={_id} className="p-2 text-sm font-medium hover:text-orange-600 border border-dark dark:!border-opacity-10">
                   <a href={`/article/${slug}`} className="blog-title">Lorem ipsum dolor sit amet consectetur.</a>
                   </li>
                )
            }) 
        }
        {
          filterBlogs && filterBlogs.length == 0 && <li className="p-2 text-sm font-medium text-center text-orange-600">No Result Matched...</li>

        }
        </ul>
      </div>
      </div>
    </>
  );
};

export default Searchbar;
