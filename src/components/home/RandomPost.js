import React from 'react'
import { WiTime8 } from "react-icons/wi"
const RandomPost = () => {
  return (
    <>
        <div className='container py-10'>

            <h3 class="px-3 py-1 text-gray-400 text-lg font-semibold border-l-2 border-orange-700 uppercase">Random Posts</h3>
            
            <div className='my-6 grid gap-y-6 lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8'>

              <div className='py-3 shadow rounded xl:min-w-[38rem] group cursor-pointer'>
              <div className='overflow-hidden w-full'>
                  <img className='bg-cover object-fill rounded lg:rounded-md w-full lg:min-h-[20rem] xl:min-h-[24rem] group-hover:scale-105 transition-all duration-500' src="https://media.istockphoto.com/id/1339226443/es/foto/la-pareja-usa-un-dispositivo-de-tel%C3%A9fono-inteligente-mientras-est%C3%A1-sentada-en-un-sof%C3%A1-en-el.jpg?s=612x612&w=0&k=20&c=qjWr8z3ZtJspxKqRtBUxkQzQkqXxIlOP5IY-m6yKa3w=" alt="random-posts" />
                </div>
                <div className='px-3 lg:px-4'>
                <p class="mt-2 lg:mt-3 text-sm text-orange-600 font-semibold">LifeStyle</p>
                <h3 class="my-2 text-xl font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                <p className='hidden xl:block my-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fuga unde neque nihil ratione cumque eveniet distinctio nulla</p>
                <p className="lg:mt-2 flex items-center gap-x-1 text-gray-500">
                    <WiTime8 className="text-sm" />
                    <span className="text-sm font-semibold">
                      12 November, 2022
                    </span>
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3 lg:gap-x-4'>
           
                <div className='p-1 md:p-2 shadow rounded relative group cursor-pointer'>
                <div className='rounded overflow-hidden w-full'>
                   <img className='bg-cover object-cover group-hover:scale-105 transition-all duration-500' src="https://media.istockphoto.com/id/1351141161/es/foto/mujer-con-gafas-vr-s.jpg?s=612x612&w=0&k=20&c=tjIVZx6yzXHsv0u23JDZDke2cq4xJ4rhnVg6e77QTLs=" alt="random-small-post" />
                </div>
                <div>
                <p class="absolute top-1 left-2 md:top-2 md:left-3 text-xs text-orange-600 font-semibold">Technology</p>
                <h3 class="my-1 text-sm md:my-2 md:text-md font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                  <p className="text-xs lg:text-sm flex items-center gap-x-1 text-gray-500">
                    <WiTime8/>
                    <span className="font-semibold">
                      12 November, 2022
                    </span>
                  </p>
                </div>
                </div>

                <div className='p-1 md:p-2 shadow rounded relative group cursor-pointer'>
                <div className='rounded overflow-hidden w-full'>
                   <img className='bg-cover object-cover group-hover:scale-105 transition-all duration-500' src="https://media.istockphoto.com/id/1357759108/es/foto/rostro-humano-abstracto-el-poder-de-la-mente-inteligencia-artificial-psicolog%C3%ADa-tecnolog%C3%ADa.jpg?s=612x612&w=0&k=20&c=FtJHyme9M8s__Y4h1thKWuHJna-6Y7nhGQK_CrfnmJ8=" alt="random-small-post" />
                </div>
                <div>
                <p class="absolute top-1 left-2 md:top-2 md:left-3 text-xs text-orange-600 font-semibold">Technology</p>
                <h3 class="my-1 text-sm md:my-2 md:text-md font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                  <p className="text-xs lg:text-sm flex items-center gap-x-1 text-gray-500">
                    <WiTime8/>
                    <span className="font-semibold">
                      12 November, 2022
                    </span>
                  </p>
                </div>
                </div>

                <div className='p-1 md:p-2 shadow rounded relative group cursor-pointer'>
                <div className='rounded overflow-hidden w-full'>
                   <img className='bg-cover object-cover group-hover:scale-105 transition-all duration-500' src="https://media.istockphoto.com/id/1360149924/es/foto/partido-de-f%C3%BAtbol-masculino.jpg?s=612x612&w=0&k=20&c=04K-P5RnXJMYYX8-aGP00vr8oStJt72_YEwdmkaKp1Y=" alt="random-small-post" />
                </div>
                <div>
                <p class="absolute top-1 left-2 md:top-2 md:left-3 text-xs text-orange-600 font-semibold">Sports</p>
                <h3 class="my-1 text-sm md:my-2 md:text-md font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                  <p className="text-xs lg:text-sm flex items-center gap-x-1 text-gray-500">
                    <WiTime8/>
                    <span className="font-semibold">
                      12 November, 2022
                    </span>
                  </p>
                </div>
                </div>

                <div className='p-1 md:p-2 shadow rounded relative group cursor-pointer'>
                <div className='rounded overflow-hidden w-full'>
                   <img className='bg-cover object-cover group-hover:scale-105 transition-all duration-500' src="https://media.istockphoto.com/id/1351141161/es/foto/mujer-con-gafas-vr-s.jpg?s=612x612&w=0&k=20&c=tjIVZx6yzXHsv0u23JDZDke2cq4xJ4rhnVg6e77QTLs=" alt="random-small-post" />
                </div>
                <div>
                <p class="absolute top-1 left-2 md:top-2 md:left-3 text-xs text-orange-600 font-semibold">Technology</p>
                <h3 class="my-1 text-sm md:my-2 md:text-md font-semibold blog-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                  <p className="text-xs lg:text-sm flex items-center gap-x-1 text-gray-500">
                    <WiTime8/>
                    <span className="font-semibold">
                      12 November, 2022
                    </span>
                  </p>
                </div>
                </div>
                

              </div>

            </div>
        </div>
    </>
  )
}

export default RandomPost