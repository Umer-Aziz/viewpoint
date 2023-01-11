import React, { useEffect , useContext } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephonePlus } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaGithub , FaLinkedin , FaTwitter ,  FaStackOverflow , FaInstagram ,FaFacebook } from "react-icons/fa";
import ApiContext from '../context/ApiContext';
import { Helmet } from "react-helmet"
const Contact = () => {

    const { getSocialLinks , SocialLinks} = useContext(ApiContext);

    useEffect(() => {
      getSocialLinks();
    }, []);

    if(SocialLinks.links){
      var { facebook  , instagram , twitter , github , linkedin , stackoverflow  } = SocialLinks.links[0]
    }

  return (
    <>
        <Helmet>
            <title>Contact us</title>
            <link rel="canonical" href="https://pointview.tech/contact" />
        </Helmet>
        <section className="container min-h-screen py-10 grid gap-y-8 md:gap-y-0 lg:flex ">
    <div className="flex flex-col justify-center w-full lg:w-1/2">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-5xl">Contact us.</h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
            Ask us everything and we would love
            to hear from you
        </p>

        <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-center">
                        <SlLocationPin className='text-orange-600 md:text-xl'/>

                        <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                           Mirpur azad kashmir - Pakistan
                        </span>
                    </p>
                    <p className="flex items-center">
                        <BsTelephonePlus className='text-orange-600 md:text-xl'/>

                        <a href='tel:923089752092' className="mx-3 text-gray-700 truncate w-72 dark:text-gray-400">(+92) 308-9752092</a>
                    </p>

                    <p className="flex items-center">
                       <FiMail className='text-orange-600 md:text-xl'/>

                        <a href="mailto:contact@umeraziz.engineer" target="_blank" rel='noreferrer' className="mx-3 text-gray-700 truncate w-72 dark:text-gray-400">contact@umeraziz.engineer</a>
                    </p>
                </div>


        <div className="mt-6 md:mt-8">
            <h3 className="font-medium text-gray-600 dark:text-gray-300 ">Follow us</h3>

            <div className="flex mt-4 gap-x-4 text-xl">
                    {linkedin && <a href={linkedin} target="_blank" rel='noreferrer'><FaLinkedin className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {github &&  <a href={github} target="_blank" rel='noreferrer'><FaGithub className='cursor-pointer text-md hover:text-gray-700 dark:hover:text-gray-400'/></a>}
                    {stackoverflow && <a to={stackoverflow} target="_blank" rel='noreferrer'><FaStackOverflow className='cursor-pointer text-md hover:text-orange-600'/></a>}
                    {twitter && <a href={twitter} target="_blank" rel='noreferrer'><FaTwitter className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {facebook && <a href={facebook} target="_blank" rel='noreferrer'><FaFacebook className='cursor-pointer text-md hover:text-blue-500'/></a>}
                    {instagram && <a href={instagram} target="_blank" rel='noreferrer'><FaInstagram className='cursor-pointer text-md hover:text-orange-500'/></a>}
            </div>
        </div>



    </div>

    <div className="flex flex-col justify-center w-full lg:w-1/2">
        <form action="https://getform.io/f/36e6d4e9-ec4f-4624-8dc3-37172e20655e" method='POST'>
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                    <input type="text" placeholder="John Doe" name='fullname' required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" name='email' required className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea name='message' required className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
            </div>

            <button className="px-6 py-3 mt-6 text-sm font-medium tracking-wide text-orange-600 capitalize transition-colors duration-300 transform border border-orange-600 rounded-md hover:bg-orange-600 hover:text-gray-50 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
            </button>
        </form>
    </div>
</section>
    </>
  )
}

export default Contact