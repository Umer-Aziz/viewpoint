import React, { useState , useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa";

const ScrolltoTop = () => {

  const [ visible , setVisible ] = useState(false);

    const goToTop = ()=>{

        window.scrollTo({top:0 , left:0 , behavior:"smooth"})
    }

    const scrollLister =()=>{

        let heightofScroll = 300;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop ;

        if ( winScroll > heightofScroll ) {
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }

    useEffect(() => {
     window.addEventListener("scroll", scrollLister);
     return () => {
        window.removeEventListener("scroll", scrollLister );
      } 
    }, [])
    
    

  return (
    <>
   {  visible &&  <div className='fixed bottom-5 right-5'>

            <button className='p-2 bg-orange-600 z-50 rounded-full' onClick={goToTop}>
            <FaArrowUp className='animate-bounce text-gray-50'/>
            </button>
        </div>}
    </>
  )
}

export default ScrolltoTop