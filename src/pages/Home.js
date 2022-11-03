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
                    <img className='bg-cover object-cover' src="https://media.istockphoto.com/photos/future-technology-3d-concept-automated-retail-warehouse-agv-robots-picture-id1349338733?k=20&m=1349338733&s=612x612&w=0&h=EuiGg8nr_VxK0uhT1JBHAGny-tnt-kALqZQaQBssFrQ=" alt="blog-post" />
                </div>
                <div className='px-5 pb-4'>
                    <p className='mt-3 font-semibold text-orange-600 text-sm'>Technology</p>
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
                    <img className='bg-center object-cover h-72 w-full' src="https://media.istockphoto.com/photos/shot-of-a-unrecognizable-person-using-on-a-laptop-in-a-dark-room-picture-id1334405339?k=20&m=1334405339&s=612x612&w=0&h=Ivid-UKf_jJwUCRcDkSVlJCHI3w2pWc3fcgGxxvur1I=" alt="blog-post" />
                </div>
                <div className='px-4 pb-3'>
                    <p className='mt-3 font-semibold text-orange-600 text-sm'>Cybersecurity</p>
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
                        <button className='text-md font-mono text-gray-500 py-1 border border-gray-600 border-opacity-50 rounded-l hover:border-orange-600 hover:text-orange-600'>TRENDING</button>
                        <button className='text-md font-mono text-gray-500 py-1 border border-gray-600 border-opacity-50 rounded-r hover:border-orange-600 hover:text-orange-600'>LATEST</button>
                        </div>

                        <div className='my-8 trending grid gap-y-6'>

                        <div className='flex gap-x-3'>
                        <div className='w-30 h-22 overflow-hidden'>
                            <img className='!w-36 bg-cover object-cover' src="https://media.istockphoto.com/photos/group-of-business-people-in-office-cafeteria-picture-id1125784640?k=20&m=1125784640&s=612x612&w=0&h=zfl8ueIYN0zJi-3TETjb7kUhpa8jsyiAKFIymir1P8Q=" alt="trending-post" />
                        </div>
                        <div className='w-52 -translate-y-0.5'>
                            <h4 className='text-md font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                            <p className='my-0.5 text-sm font-semibold text-orange-600'>LifeStyle</p>
                            <p className='text-sm flex items-center gap-x-1 dark:text-gray-400'>
                        <WiTime8/>
                        <span>12 November, 2022</span>
                        </p>
                         </div>
                      </div>

                        <div className='flex gap-x-3'>
                        <div className='w-30 h-22 overflow-hidden'>
                            <img className='!w-36 bg-cover object-cover' src="https://media.istockphoto.com/photos/high-angle-view-asian-colleague-with-indian-coworker-in-wheelchair-a-picture-id1331469785?k=20&m=1331469785&s=612x612&w=0&h=EOXTjSxma3XTCNaEmG5geDfrLi-UTM18i8Ou5pt5Mf4=" alt="trending-post" />
                        </div>
                        <div className='w-52 -translate-y-0.5'>
                            <h4 className='text-md font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                            <p className='my-0.5 text-sm font-semibold text-orange-600'>Business</p>
                            <p className='text-sm flex items-center gap-x-1 dark:text-gray-400'>
                        <WiTime8/>
                        <span>12 November, 2022</span>
                        </p>
                         </div>
                      </div>

                      <div className='flex gap-x-3'>
                        <div className='w-30 h-22 overflow-hidden'>
                            <img className='!w-36 bg-cover object-cover' src="https://media.istockphoto.com/photos/running-on-treadmill-picture-id542197916?k=20&m=542197916&s=612x612&w=0&h=UFLdzG2sz7oX_YKbCaGV6_hXIGF_e7Lzxuw_E5EL3M4=" alt="trending-post" />
                        </div>
                        <div className='w-52 -translate-y-0.5'>
                            <h4 className='text-md font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                            <p className='my-0.5 text-sm font-semibold text-orange-600'>Fitness</p>
                            <p className='text-sm flex items-center gap-x-1 dark:text-gray-400'>
                        <WiTime8/>
                        <span>12 November, 2022</span>
                        </p>
                         </div>
                      </div>

                      <div className='flex gap-x-3'>
                        <div className='w-30 h-22 overflow-hidden'>
                            <img className='!w-36 bg-cover object-cover' src="https://media.istockphoto.com/photos/children-playing-soccer-outdoors-picture-id1321901975?k=20&m=1321901975&s=612x612&w=0&h=Xd0lpN7APrqaT369NBfIYgQ7Hs9BpWNJ2Qk9sbZO8Y0=" alt="trending-post" />
                        </div>
                        <div className='w-52 -translate-y-0.5'>
                            <h4 className='text-md font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                            <p className='my-0.5 text-sm font-semibold text-orange-600'>Sport</p>
                            <p className='text-sm flex items-center gap-x-1 dark:text-gray-400'>
                        <WiTime8/>
                        <span>12 November, 2022</span>
                        </p>
                         </div>
                      </div>

                      

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