import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const PicksPosts = () => {

    //Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    animateOut:true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        640: {
            items: 2,
        },
        1280: {
            items: 3,
        }
    },
  };

  return (
    <>
        <section className='container'>
           
            <div className='py-10 text-gray-300 lg:flex lg:justify-between gap-x-4 lg:gap-x-6 xl:gap-x-8'>

                
                <div className='w-12/12'>
  
                <h3 className="px-3 py-2 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase">Top Picks For You</h3>
                <OwlCarousel  className='owl-theme slider-items owl-carousel py-8 grid md:grid-cols-2 gap-y-6 lg:grid-cols-3 lg:max-w-3xl xl:max-w-[58.5rem] gap-x-4' {...options}>

                     <div className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/1341371666/es/foto/hermosas-mujeres-de-pie-en-la-azotea-del-hotel-viendo-globos-aerost%C3%A1ticos-volando-sobre-la.jpg?s=612x612&w=0&k=20&c=gJpq7uDFjEsvzjEOFlG89G7vQjKir3ix5Nboo4-LYfk=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='z-10 text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 className="z-10 my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 group-hover:text-gray-50 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>
                     </div>

                     <div className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/914469918/es/foto/en-la-orilla-del-sena.jpg?s=612x612&w=0&k=20&c=2g9_ODTWrCgcj3Zmr2y9tP0LssCobL7LDabZl8ExZoY=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='z-10 text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 className="z-10 my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 group-hover:text-gray-50 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>
                     </div>

                     <div className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/1158891212/es/foto/colorida-vista-del-paisaje-de-vernazza-al-atardecer-en-cinque-terre-liguria-italia.jpg?s=612x612&w=0&k=20&c=oH-wFDAQoR4LDKODADxy4y8q-CNvn98qQK2OV4a-Huo=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='z-10 text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 className="z-10 my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 group-hover:text-gray-50 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>                 
                     </div>

                     <div className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/914469918/es/foto/en-la-orilla-del-sena.jpg?s=612x612&w=0&k=20&c=2g9_ODTWrCgcj3Zmr2y9tP0LssCobL7LDabZl8ExZoY=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='z-10 text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 className="z-10 my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 group-hover:text-gray-50 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>
                     </div>

                     <div className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/1158891212/es/foto/colorida-vista-del-paisaje-de-vernazza-al-atardecer-en-cinque-terre-liguria-italia.jpg?s=612x612&w=0&k=20&c=oH-wFDAQoR4LDKODADxy4y8q-CNvn98qQK2OV4a-Huo=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='z-10 text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 className="z-10 my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 group-hover:text-gray-50 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>                 
                     </div>

                     <div className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/914469918/es/foto/en-la-orilla-del-sena.jpg?s=612x612&w=0&k=20&c=2g9_ODTWrCgcj3Zmr2y9tP0LssCobL7LDabZl8ExZoY=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='z-10 text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 className="z-10 my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 group-hover:text-gray-50 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>
                     </div>

                     <div className='item max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             dark:opacity-70 dark:group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/1158891212/es/foto/colorida-vista-del-paisaje-de-vernazza-al-atardecer-en-cinque-terre-liguria-italia.jpg?s=612x612&w=0&k=20&c=oH-wFDAQoR4LDKODADxy4y8q-CNvn98qQK2OV4a-Huo=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='z-10 text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 className="z-10 my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='z-10 p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 group-hover:text-gray-50 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                            <div className='hidden dark:group-hover:hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 rounded md:rounded-md'></div>                 
                     </div>

                    
                     
                </OwlCarousel>
                </div>

                {/* categories */}
                <div className='max-w-60 xl:w-80'>
                <h5 className="w-full px-3 py-2 text-gray-400 text-md font-semibold border-l-2 border-orange-700 uppercase">Blog Categories</h5>
                  <div className='py-8 w-12/12'>
                      <div className='text-md font-semibold text-gray-700 dark:text-gray-300'>

                        <div className='flex justify-between pb-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>Business</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>2</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>Technology</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>3</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>Programming</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>7</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>CyberSecurity</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>6</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>Scamming</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>6</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>Fitness</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>2</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>LifeStyle</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>13</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>Sports</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>8</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400  whitespace-nowrap'>Tips & Tricks</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>1</span>
                        </div>

                        <div className='flex justify-between py-2 border-dark cursor-pointer'>
                          <p className='hover:text-gray-700 dark:hover:text-gray-400 '>Others</p>
                          <span className='text-md px-2 font-normal text-gray-50 bg-orange-600 rounded'>0</span>
                        </div>

                      </div>
                  </div>
                </div>
            
            </div>

        </section>
    </>
  )
}

export default PicksPosts