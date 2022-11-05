import React from 'react'

const PicksPosts = () => {
  return (
    <>
        <section className='container'>
           
            <div className='py-10'>

                <div>
                <h3 class="px-3 py-2 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase">Top Picks For You</h3>
                
                <div className='box py-8 grid md:grid-cols-2 gap-y-6 lg:grid-cols-3 max-w-4xl gap-x-4'>

                     <div className='slider max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             opacity-70 group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/1341371666/es/foto/hermosas-mujeres-de-pie-en-la-azotea-del-hotel-viendo-globos-aerost%C3%A1ticos-volando-sobre-la.jpg?s=612x612&w=0&k=20&c=gJpq7uDFjEsvzjEOFlG89G7vQjKir3ix5Nboo4-LYfk=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 class="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                     </div>

                     <div className='slider max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             opacity-70 group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/914469918/es/foto/en-la-orilla-del-sena.jpg?s=612x612&w=0&k=20&c=2g9_ODTWrCgcj3Zmr2y9tP0LssCobL7LDabZl8ExZoY=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 class="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                     </div>

                     <div className='slider max-h-96 shadow group overflow-hidden relative'>
                          <div className='overflow-hidden rounded md:rounded-md cursor-pointer'>
                            <img className='rounded md:rounded-md bg-cover
                             object-cover w-full h-96 group-hover:scale-110 transition-all duration-700
                             opacity-70 group-hover:opacity-20' 
                             src="https://media.istockphoto.com/id/1158891212/es/foto/colorida-vista-del-paisaje-de-vernazza-al-atardecer-en-cinque-terre-liguria-italia.jpg?s=612x612&w=0&k=20&c=oH-wFDAQoR4LDKODADxy4y8q-CNvn98qQK2OV4a-Huo=" alt="top-picks-post" />
                          </div>
                          <div className='-translate-y-24 translate-x-5 transition-all duration-500'>
                            <p className='text-sm text-orange-600 font-semibold'>LifeStyle</p>
                            <h3 class="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>                          </div>
                            <p className='p-2 absolute top-10 left-0 -translate-x-96 group-hover:translate-x-0 transition-all duration-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quasi at porro dignissimos. Ab eos ipsum numquam iure beatae. Iste quia expedita quo eius.</p>
                     </div>
                     
                </div>
                </div>
            
            </div>

        </section>
    </>
  )
}

export default PicksPosts