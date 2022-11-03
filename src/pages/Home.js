import React from 'react';
import { WiTime8 } from "react-icons/wi"

const Home = () => {
  return (
    <>
        <main className='container'>
         <div>
            <section className='pb-10 text-gray-600 dark:text-gray-300'>
                <div className='flex gap-x-6'>

                {/* main div */}
                <div className='max-w-xl shadow'>
                <div className='max-h-80'>
                    <img className='bg-cover object-cover' src="https://media.istockphoto.com/photos/future-technology-3d-concept-automated-retail-warehouse-agv-robots-picture-id1349338733?k=20&m=1349338733&s=612x612&w=0&h=EuiGg8nr_VxK0uhT1JBHAGny-tnt-kALqZQaQBssFrQ=" alt="" />
                </div>
                <div className='px-5 pb-4'>
                    <p className='mt-3 text-orange-500 text-sm'>Technology</p>
                    <h3 className='my-2 text-2xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus veniam numquam tempora labore quasi. Maiores facilis natus ut illum sed amet aliquam in quo.</p>
                    <div className='mt-2 flex gap-x-3'>
                    <span className='font-semibold'>Admin</span>
                    <p className='flex items-center gap-x-1'>
                    <WiTime8 className='text-sm'/>
                    <span className='text-sm font-semibold'>12 November, 2022</span>
                    </p>
                    </div>
                    </div>
                    </div>

                    <div className='max-w-xs shadow'>
                <div className='max-h-72 overflow-hidden'>
                    <img className='bg-center object-cover h-72 w-full' src="https://media.istockphoto.com/photos/shot-of-a-unrecognizable-person-using-on-a-laptop-in-a-dark-room-picture-id1334405339?k=20&m=1334405339&s=612x612&w=0&h=Ivid-UKf_jJwUCRcDkSVlJCHI3w2pWc3fcgGxxvur1I=" alt="" />
                </div>
                <div className='px-4 pb-3'>
                    <p className='mt-3 text-orange-500 text-sm'>Cybersecurity</p>
                    <h3 className='my-2 text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus veniam numquam tempora labore quasi. Maiores facilis natus ut illum sed amet aliquam in quo.</p>
                    <div className='mt-2 flex gap-x-3'>
                    <span className='font-semibold'>Admin</span>
                    <p className='flex items-center gap-x-1'>
                    <WiTime8 className='text-sm'/>
                    <span className='text-sm font-semibold'>12 November, 2022</span>
                    </p>
                    </div>
                    </div>
                    </div>

            {/* Treding / Latest Post  */}
                    <div className='w-96'>
                      <div className='grid grid-cols-2'>
                        <button className='text-md text-gray-500 py-1 border border-gray-600 border-opacity-50 rounded-l hover:border-orange-600 hover:text-orange-600'>TRENDING</button>
                        <button className='text-md text-gray-500 py-1 border border-gray-600 border-opacity-50 rounded-r hover:border-orange-600 hover:text-orange-600'>LATEST</button>
                        <button></button>
                      </div>
                    </div>

                    
                </div>
            </section>
         </div>
        </main>
    </>
  )
}

export default Home